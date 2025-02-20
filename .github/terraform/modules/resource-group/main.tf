variable "base_name" {
  description = "The name of the resource group"
  type        = string
}

variable "location" {
  description = "The location of the resource group"
  type        = string
}

resource "azurerm_resource_group" "rg" {
  name     = lower("rg-${base_name}")
  location = var.location
}

output "name" {
  value = azurerm_resource_group.rg.name
}

output "location" {
    value = azurerm_resource_group.rg.location
}