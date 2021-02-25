build-website: ## Builds website docker image
	docker build -f website.Dockerfile -t website .

build-cms: ## Builds cms docker image
	docker build -f cms.Dockerfile -t cms .

docker-compose-up: build-website build-cms ## Run docker compose up
	docker-compose up

prod-deploy: ## Deploy to prod
	az acr login --name AlvNoProd --expose-token|jq .accessToken -r|docker login AlvNoProd.azurecr.io --username 00000000-0000-0000-0000-000000000000 --password-stdin
	docker tag website AlvNoProd.azurecr.io/website
	docker push AlvNoProd.azurecr.io/website

.PHONY: help

.DEFAULT_GOAL := help

help:
	@# Help command taken from: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@echo "Usage: make [task]\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
