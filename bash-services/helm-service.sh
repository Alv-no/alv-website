# Relies on:
# - helm
function helmLoginAndPull() {
  SP_ALVTIME_ADMIN_CLIENT_ID=$1
  SP_ALVTIME_ADMIN_RBAC_SECRET=$2
  CONTAINER_REGISTRY=$3
  
  echo "$SP_ALVTIME_ADMIN_RBAC_SECRET" | helm registry login "$CONTAINER_REGISTRY" \
    --username "$SP_ALVTIME_ADMIN_CLIENT_ID" \
    --password-stdin

  if [[ -d "chart" ]] && [[ "$CI" ]]; then
    echo "The chart folder exists on this filesystem. And this is runing in CI"
    echo "Deleting the chart folder in order for the next command to work"
    rm -rf chart
  fi

  helm pull "oci://$CONTAINER_REGISTRY/helm/chart" --version v1 --untar
}