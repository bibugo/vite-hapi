#FROM node:lts-alpine
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:18-bullseye

#RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

ARG WORKDIR_SUB \
    EXPOSE_PORT \
    UID \
    GID

#RUN apk add --no-cache shadow \
#    && useradd --uid ${UID:-501} --gid ${GID:-20} -d /workspace vscode
RUN useradd --uid ${UID:-501} --gid ${GID:-20} -d /workspace vscode

USER vscode

WORKDIR /workspace/${WORKDIR_SUB:-app}

EXPOSE ${EXPOSE_PORT:-5173}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
