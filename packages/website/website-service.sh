set -e

# Relies on:
# - docker
function buildWebsite() {
  ENV=$1
  SANITY_TOKEN=$2
  YOUTUBE_API_TOKEN=$3
  CONTAINER_REGISTRY=$4
  TAG=$5

  echo "building alv website"

  if [ ! -f .env.production ]; then
    echo "ENV=$ENV" >>packages/website/.env.production
    echo "SANITY_TOKEN=$SANITY_TOKEN" >>packages/website/.env.production
    echo "YT_API=$YOUTUBE_API_TOKEN" >>packages/website/.env.production
    if [ "$ENV" != "prod" ]; then
      echo "SANITY_DATASET=development" >>packages/website/.env.production
    fi
  fi

  docker build . \
    --file website.Dockerfile \
    --tag "$CONTAINER_REGISTRY/website:$TAG" \
    --no-cache
}

# Relies on:
# - docker
function pushWebsite() {
  CONTAINER_REGISTRY=$1
  TAG=$2

  echo "pushing website"

  docker push "$CONTAINER_REGISTRY/website:$TAG"
}

# Relies on:
# - helm
function deployWebsite() {
  ALV_HOSTNAME=$1
  CONTAINER_REGISTRY=$2
  TAG=$3
  CHART_NAME_SUFFIX=$4

  echo "helm website"

  HOSTS="$ALV_HOSTNAME,www.$ALV_HOSTNAME"

  helm upgrade "website$CHART_NAME_SUFFIX" ./chart \
    --install \
    --set image.repository="$CONTAINER_REGISTRY/website" \
    --set image.tag="$TAG" \
    --set "hosts={$HOSTS}" \
    --namespace "alv-no"
}
