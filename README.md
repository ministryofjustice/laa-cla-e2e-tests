# End to end tests for Civil Legal Aid and Find A Legal Advisor

This is the monorepo codebase for the end to end tests for [Civil Legal Advice](https://checklegalaid.service.gov.uk/) and [Find A Legal Adviser](https://find-legal-advice.justice.gov.uk/).

![Application relationship diagram](https://www.lucidchart.com/publicSegments/view/2ae20038-503d-4899-8c04-e21378678b95/image.png)

## What is Civil Legal Advice?

Civil Legal Advice is a service provided to the general public in England and Wales where users can obtain free legal advice from specialist legal providers relating to a range of Civil matters. This is subject to the user's matter being within scope of the service and the user passing the means eligibility test. The advice can either be given via telephone or in person depending upon the client’s unique circumstances.

### Applications

- Public facing website available at https://checklegalaid.service.gov.uk/
- Case Handling System used by call centre staff

## What is Find A Legal Adviser?

Find A Legal Adviser Search for a legal adviser or family mediator with a legal aid contract in England and Wales.

### Applications

- Public faciing website available at https://find-legal-advice.justice.gov.uk/
- Administration website to upload legal aid provider csv

## Codebase

Here's the coarse architecture for each application in the monorepo:

- **Docker Compose:** We use Docker Compose to set up everything necessary for the end-to-end tests to run against. By default, it'll fetch and run pre-built Docker images hosted on AWS ECR. 
- **Dockerfile:** The Dockerfile will set up the testing dependencies, e.g. headless browsers and, by default, know how to run the tests against localhost.

### Technologies

Here is a list of all the big technologies used in the applications (you shouldn't need to know anything about these to run the tests):

- Django: Python web framework
- Postgres: Data storage
- etc...

The browser tests use these technologies:

- Nightwatch: Automated testing framework powered by Node.js and using W3C Webdriver
- Protractor: An end-to-end test framework for Angular and AngularJS applications

### Folder structure

### Code style

## First time setup

### Installation

### Building blocks

1. `bin/setup` will
    1. Bring up<sup>*</sup> dependent services (PostgreSQL, RabbitMQ, Redis, etc.)
    1. Run all pre-deployment steps (migrations, seeds, etc.)
    1. Bring up<sup>*</sup> all applications
1. `bin/run` will
    1. Run tests against the running applications

<sup>*</sup>"bring up" means start and wait until it is running and is reporting healthy.

### Default ports

| Service | Default host and port |
|---|---|
| `postgresql` | localhost:5432 |
| `rabbitmq` | localhost:5672<br/>localhost:15672 for the management interface|

| Application | Default host and port |
|---|---|
| `cla_public` | localhost:5000 |
| `cla_frontend` | localhost:8001<br/>localhost:8005 for websockets |
| `cla_backend` | localhost:8000 |
| `laalaa` | ??? |
| `fala` | ??? |

### Running tests locally

```
$ bin/setup
$ bin/run
```

### Running tests against staging

When running against a dedicated environment like _staging_, we need to skip the **setup** step, as the
deployment of our applications are managed by external tools.

1. Deploy all desired application versions to the _staging_ environment.  
   Each application should have a guideline on how to do this.
1. Execute
    ```
    $ bin/run \
      --cla_public=staging-public.cla.dsd.io \
      --cla_backend=staging-backend.cla.dsd.io \
      --cla_frontend=staging-frontend.cla.dsd.io \
      --fala=staging.fala.dsd.io \
      --laalaa=staging.laalaa.dsd.io
    ```
    or
    ```
    $ bin/run --configuration=config/staging.yml
    ```

### Running tests on CircleCI

Please see `.circleci/config.yml` for details on how this is done.

## Roadmap
Here's a very high level view of things we want to achieve.

### Now
- Create and destroy an isolated testing environment
- Run tests against the isolated testing environment
- Ensure tests can run on Circle CI against the isolated testing environment

### Next
- Test can run against a dedicated environment like _staging_
- Test can run on a developer's local machine (Chrome with `headless` turned off) against any environment, e.g. the isolated testing environment or _staging_.
- Test reports published and available after each test run

### Later
Nothing yet
