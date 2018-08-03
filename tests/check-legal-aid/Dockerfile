FROM kinlan/puppets:latest

WORKDIR app
COPY package.json package-lock.json ./

RUN npm i

# Add user so we don't need --no-sandbox.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser ./node_modules

# Run everything after as non-privileged user.
RUN mkdir -p reports && chown pptruser reports
USER pptruser

COPY nightwatch.conf.js ./
COPY test ./test

EXPOSE 8084

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "test-docker"]
