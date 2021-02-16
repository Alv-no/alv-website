# Terraform infrastructure setup

This is the infrastructure setup for Azure.

# Development setup

- Install Terraform

- Create a file "stage-1/terraform.tfvars":

```
git_hash = "latest"
subscription_id = ""
service_name = "website"
container_registry = "dockercontainerregistry2020.azurecr.io"
container_registry_username = "dockerContainerRegistry2020"
container_registry_password = ""
```

- `cd stage-1 && terraform init && terraform apply`
