FROM docker.io/node:16.13.2-alpine3.14 as DEPS

ENV NPM_AUTH_TOKEN=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
ENV APP_VERSION=0.17.2
ENV BUILD_ENV=development

WORKDIR /opt/frst/app

COPY package*.json ./

RUN npm i

FROM DEPS as BUILD

COPY --from=DEPS /opt/frst/app/node_modules ./node_modules
COPY . .

RUN touch /opt/frst/app/.npmrc
RUN echo "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}" > /opt/frst/app/.npmrc
RUN npm version $APP_VERSION
RUN npm run build
RUN npm publish --access public
