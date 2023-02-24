FROM node:16-alpine

ARG BUILD_CONTEXT
ARG PACKAGE

USER node

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN yarn install

RUN yarn workspace ${PACKAGE} build

EXPOSE 3000

WORKDIR /home/node/app/

ENV PACKAGE ${PACKAGE}

CMD yarn workspace ${PACKAGE} start
