FROM kinlan/puppets:latest

WORKDIR app
COPY package.json package-lock.json ./

RUN npm i
RUN npm run update-chromedriver

# Add user so we don't need --no-sandbox.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser ./node_modules

# Run everything after as non-privileged user.
USER pptruser

COPY . ./

EXPOSE 8084

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "test-docker"]