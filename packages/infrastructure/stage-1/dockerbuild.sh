#!/bin/bash

USERNAME="$2"
PASSWORD="$3"
NEW_IMAGE_NAME="$1/website:$4"

docker build -f ../../../website.Dockerfile -t website ../../../
docker tag website $NEW_IMAGE_NAME
echo $PASSWORD|docker login $1 --username $USERNAME --password-stdin&& docker push $NEW_IMAGE_NAME
