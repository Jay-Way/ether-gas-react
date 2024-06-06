# Simple Dockerfile for the user interface
# - Provides node including npm
# - Installs aws cli for deployment via pipeline

FROM node:21-alpine3.19

WORKDIR /react-app

EXPOSE 3000

ENV AWS_SDK_LOAD_CONFIG=1

RUN apk update && apk add aws-cli --no-cache

USER node
