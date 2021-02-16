provider "azurerm" {
	version = "=2.20.0"
	features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "alvwebsite-resource-group-1"
  location = "West Europe"
}

resource "azurerm_container_registry" "acr" {
  name                     = "dockerContainerRegistry2020"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  sku                      = "Basic"
  admin_enabled            = false
}
