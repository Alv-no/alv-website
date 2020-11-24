az-docker-login: ## logs you in to azure and uses those credentials for docker
	az acr login --name dockercontainerregistry2020 --expose-token|jq .accessToken -r|docker login dockercontainerregistry2020.azurecr.io --username 00000000-0000-0000-0000-000000000000 --password-stdin

build-website: ## Builds website docker image and pushes it to Azure's container registry
	docker context use default
	docker build -f website.Dockerfile -t website .
	docker tag website dockercontainerregistry2020.azurecr.io/website
	docker push dockercontainerregistry2020.azurecr.io/website

build-cms: ## Builds cms docker image and pushes it to Azure's container registry
	docker context use default
	docker build -f cms.Dockerfile -t cms .
	docker tag cms dockercontainerregistry2020.azurecr.io/cms
	docker push dockercontainerregistry2020.azurecr.io/cms

docker-compose-up: ## Deploy images based on docker-compose-prod.yml
	docker context use myacicontext
	docker compose up --file docker-compose-prod.yml
	docker context use default

.PHONY: help

.DEFAULT_GOAL := help

help:
	@# Help command taken from: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@echo "Usage: make [task]\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
