variable "resource_base_name" {
  description = "The base name of the resources"
  type        = string
}

variable "resource_group" {
  description = "The resource group"
  type        = object({
    name     = string
    location = string
  })
}

variable "function_app" {
  description = "The function app configuration"
  type        = object({
    sku_name = string
  })
}

variable "environment_settings" {
  type = any
  description = "The app settings for the function app"
  default = {}
}

locals {
  function_settings = {
    "WEBSITE_USE_PLACEHOLDER_DOTNETISOLATED" = "1"
    "WEBSITE_RUN_FROM_PACKAGE" = "1"  
  }
}

resource "azurerm_storage_account" "function_storage" {
  name                     = lower(replace(replace("func${var.resource_base_name}", ".", ""), "-", ""))  
  resource_group_name      = var.resource_group.name
  location                 = var.resource_group.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_service_plan" "function_hosting" {
  name                = lower("asp-${var.resource_base_name}")
  resource_group_name = var.resource_group.name
  location            = var.resource_group.location
  os_type             = "Windows"
  sku_name            = var.function_app.sku_name
}

resource "azurerm_windows_function_app" "app" {
  name                = lower("func-${var.resource_base_name}")
  resource_group_name = var.resource_group.name
  location            = var.resource_group.location
  storage_account_name       = azurerm_storage_account.function_storage.name
  storage_account_access_key = azurerm_storage_account.function_storage.primary_access_key
  service_plan_id            = azurerm_service_plan.function_hosting.id
  https_only = true
  app_settings = merge(local.function_settings, var.environment_settings)
  site_config {
    use_32_bit_worker = false
    ftps_state = "Disabled" 
    application_stack {
      dotnet_version = "v8.0"
      use_dotnet_isolated_runtime = true
    }
  }
}

output function_app_name {
  value = azurerm_windows_function_app.app.name
}