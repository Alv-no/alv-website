# Relies on:
# - helm
function helmLoginAndPull() {
  SERVICE_PROVIDER_CLIENT_ID=$1
  SERVICE_PROVIDER_SECRET=$2
  CONTAINER_REGISTRY=$3

  echo "$SERVICE_PROVIDER_CLIENT_ID, $SERVICE_PROVIDER_SECRET, $CONTAINER_REGISTRY"
  echo "$1, $2, $3"
  
  echo "$SERVICE_PROVIDER_SECRET" | helm registry login "$CONTAINER_REGISTRY" \
    --username "$SERVICE_PROVIDER_CLIENT_ID" \
    --password-stdin

  if [[ -d "chart" ]] && [[ "$CI" ]]; then
    echo "The chart folder exists on this filesystem. And this is runing in CI"
    echo "Deleting the chart folder in order for the next command to work"
    rm -rf chart
  fi

  helm pull "oci://$CONTAINER_REGISTRY/helm/chart" --version v1 --untar
}