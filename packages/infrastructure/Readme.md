# Terraform infrastructure setup

This is the infrastructure setup for Azure.

# Development setup

- Install Terraform

- Create a file "stage-1/terraform.tfvars":

```
docker_tag = "latest"
subscription_id = ""
service_name = "alvno-dev"
```

- `cd stage-1 && terraform init && terraform apply -auto-approve`
