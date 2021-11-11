build-website: ## Builds website docker image
	docker build -f website.Dockerfile -t website .

build-website-alvb: ## Builds website-alvb docker image
	docker build -f website-alvb.Dockerfile -t website-alvb .

build-cms: ## Builds cms docker image
	docker build -f cms.Dockerfile -t cms .

build-mail-api:
	docker build -f mail-api.Dockerfile -t mail-api .

docker-compose-up: build-website build-cms build-mail-api ## Run docker compose up
	docker-compose up

.PHONY: help

.DEFAULT_GOAL := help

help:
	@# Help command taken from: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@echo "Usage: make [task]\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
