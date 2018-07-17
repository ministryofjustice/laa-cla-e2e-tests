# CLA call centre application - End to end tests 

These end-to-end tests have been pulled from cla_frontend repo. 

This codebase is a spike on how to run the end-to-end tests using Puppeteer.

The end-to-end tests require three containers to be up and running:

- cla_backend
- cla_frontend
- postgres

# Set up

Build the `test` image:

```
docker-compose build test
```

Once done, run the tests:

```
docker-compose run test
```

_Note: You can control the order of service startup with the `depends_on` in `docker-compose.yml`. However, Compose does not wait until a container is "ready". `cla_backend` should wait until Postgres is ready to accept commands. [See this post for info](https://docs.docker.com/compose/startup-order/). Until then, re-run `docker-compose run test` if the tests fail._