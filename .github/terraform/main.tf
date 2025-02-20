terraform {
  required_providers {
    arm2tf = {
      source = "cloud-maker-ai/arm2tf"
      version = "0.2.3"
    }
  }
}

variable "resource_location" {
  type = string
}

variable "subscription_id" {
  type = string
}

variable "application_name" {
  description = "name of application"
  type        = string
}

provider "arm2tf" {
}

provider "azurerm" {
  subscription_id = var.subscription_id
  features {}
}

data "azurerm_client_config" "current" {}

resource "arm2tf_unique_string" "unique_string" {
  input = [data.azurerm_client_config.current.subscription_id]
}

module "resource_group" {
  source = "./modules/resource-group"
  base_name = var.application_name
  location = var.resource_location
}

/*
module "function_app" {
  source = "./modules/function-app"
  resource_base_name = "${var.application_name}"
  function_app = var.function_app
  resource_group = {
    name     = module.resource_group.name
    location = module.resource_group.location
  }
}*/

/*
output function_app_name {
  value = module.function_app.function_app_name
}
*/