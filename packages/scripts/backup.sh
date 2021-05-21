#!/usr/bin/env bash

set -e

KEY_VAULT="alvnoprodkv"

function getSecret() {
  az keyvault secret show --vault-name $KEY_VAULT --name $1 | jq '.value' -r
}

export SANITY_AUTH_TOKEN="$(getSecret sanity-api-export-auth-token)"

yarn
yarn workspace cms sanity dataset export production backupfolder

DATETIME=$(date "+%Y-%m-%d_%H%M")
BAKCUP_FILE_NAME="production.tar.gz"
BAKCUP_FILE_DATE_NAME="$DATETIME-production.tar.gz"

echo "$BAKCUP_FILE_DATE_NAME"
# azcopy copy "backupfolder/$BAKCUP_FILE_NAME" "https://mystorageaccount.blob.core.windows.net/mycontainer/$BAKCUP_FILE_DATE_NAME"
