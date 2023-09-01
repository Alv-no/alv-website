# Relies on:
# - Azure CLI
# - kubelogin
function getAksCredentials() {
  SUBSCRIPTION=$1
  RESOURCE_GROUP_NAME=$2
  KUBERNETES_CLUSTER_NAME=$3

  # Retrieve the access credentials for your cluster and automatically configure kubectl
  az aks get-credentials \
    --subscription "$SUBSCRIPTION" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --name "$KUBERNETES_CLUSTER_NAME"

  kubelogin convert-kubeconfig -l azurecli
}