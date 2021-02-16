variable "git_hash" {
  description = "git hash"
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

variable "container_registry" {
  description = "Docker container registry link"
  type        = string
}

variable "container_registry_username" {
  description = "Docker container registry link"
  type        = string
}

variable "container_registry_password" {
  description = "Docker container registry password"
  type        = string
}

#terraform {
#  backend "azurerm" {}
#}

provider "azurerm" {
  subscription_id = var.subscription_id
  tenant_id       = "76749190-4427-4b08-a3e4-161767dd1b73"
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = var.service_name
  location = "West Europe"
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

	app_settings = {
    DOCKER_REGISTRY_SERVER_URL      = "https://${var.container_registry}"
    DOCKER_REGISTRY_SERVER_USERNAME = var.container_registry_username
    DOCKER_REGISTRY_SERVER_PASSWORD = var.container_registry_password
	}

  identity {
    type = "SystemAssigned"
  }

  site_config {
    app_command_line = ""
#    linux_fx_version = "DOCKER|${var.container_registry}/${azurerm_resource_group.rg.name}:${var.git_hash}"
    linux_fx_version = "DOCKER|${var.container_registry}/${azurerm_resource_group.rg.name}"
  }
}
