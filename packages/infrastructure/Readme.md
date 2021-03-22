# Terraform infrastructure setup

This is the infrastructure setup for Azure.

# Development setup

- install [azure cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) version 2.20.0 or later
- install [terraform cli](https://learn.hashicorp.com/tutorials/terraform/install-cli) version 0.14.0 or later

- login to azure `az login`

- select the correct subscription `az account set --subscription <Name or ID of subscription>`

- Create a file "stage-1/terraform.tfvars":

```
docker_tag = "latest"
subscription_id = ""
service_name = "alvnodev"
```

- `cd stage-1 && terraform init -backend-config="test-backend.tfvars && terraform apply -auto-approve`
