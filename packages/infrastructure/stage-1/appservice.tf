variable "docker_tag" {
  description = "Tag for the docker image"
  type        = string
}

variable "subscription_id" {
  description = "azure subscription_id"
  type        = string
}

variable "service_name" {
  description = "service_name"
  type        = string
}

variable "hostname" {
  description = "hostname"
  type        = string
}

terraform {
  backend "azurerm" {}
}

provider "azurerm" {
  subscription_id = var.subscription_id
  tenant_id       = "76749190-4427-4b08-a3e4-161767dd1b73"
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = var.service_name
  location = "West Europe"
}

resource "azurerm_container_registry" "acr" {
  name                = "${var.service_name}acr"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic"
  admin_enabled       = true
}

resource "null_resource" "docker_build" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "./dockerbuild.sh ${azurerm_container_registry.acr.login_server} ${azurerm_container_registry.acr.admin_username} ${azurerm_container_registry.acr.admin_password} ${var.docker_tag}"
  }

  depends_on = [
    azurerm_container_registry.acr,
  ]
}

resource "azurerm_app_service_plan" "asp" {
  name                = "${azurerm_resource_group.rg.name}-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }
}

resource "azurerm_app_service" "as" {
  name = "${azurerm_resource_group.rg.name}-as"

  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.asp.id

  https_only = var.hostname == "alv.no" ? true : false

  app_settings = {
    DOCKER_REGISTRY_SERVER_URL      = "https://${azurerm_container_registry.acr.login_server}"
    DOCKER_REGISTRY_SERVER_USERNAME = azurerm_container_registry.acr.admin_username
    DOCKER_REGISTRY_SERVER_PASSWORD = azurerm_container_registry.acr.admin_password
  }

  identity {
    type = "SystemAssigned"
  }

  site_config {
    app_command_line = ""
    linux_fx_version = "DOCKER|${azurerm_resource_group.rg.name}acr.azurecr.io/website:${var.docker_tag}"
  }

  depends_on = [
    null_resource.docker_build, azurerm_app_service_plan.asp
  ]
}
