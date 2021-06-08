#!/usr/bin/env bash

set -e

KEY_VAULT="alvnoprodkv"
SUBSCRIPTION="AlvNo-Dev"
STORAGE_ACCOUNT="alvnobackup"
SAS_EXPIRY=$(date -u -v "+1H" +"%Y-%m-%dT%H:%M:%SZ")

function getSecret() {
  az keyvault secret show --vault-name $KEY_VAULT --name $1 | jq '.value' -r
}

function getSasToken() {
  az storage account generate-sas --permissions cw --account-name $1 --services b --resource-types sco --expiry $SAS_EXPIRY --subscription $2 | jq -r
}

export SANITY_AUTH_TOKEN="$(getSecret sanity-api-export-auth-token)"

SAS_TOKEN="$(getSasToken $STORAGE_ACCOUNT $SUBSCRIPTION)"
DATETIME=$(date "+%Y-%m-%d_%H%M")
BACKUP_FILE_DATE_NAME="$DATETIME-production.tar.gz"
BACKUP_FILE_NAME="../cms/backupfolder/production.tar.gz"

RM -f "$BACKUP_FILE_NAME"
yarn workspace cms sanity dataset export production backupfolder

#Terraform?
#azcopy make "https://alvnobackup.blob.core.windows.net/alvnobackup?$SAS_TOKEN"

azcopy copy "$BACKUP_FILE_NAME" "https://alvnobackup.blob.core.windows.net/alvnobackup/$BACKUP_FILE_DATE_NAME?$SAS_TOKEN"
