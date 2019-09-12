# End to end tests for Civil Legal Aid and Find A Legal Adviser

This is the monorepo codebase for the end to end tests for [Civil Legal Aid](https://checklegalaid.service.gov.uk/) and [Find A Legal Adviser](https://find-legal-advice.justice.gov.uk/).

- Details about Civil Legal Aid: https://github.com/ministryofjustice/cla_public.
- Details about Find A Legal Adviser: https://github.com/ministryofjustice/fala.

These systems talk to each other:

## Civil Legal Aid interactions

![Civil Legal Aid container diagram](https://media.githubusercontent.com/media/ministryofjustice/laa-architecture-documentation/master/diagrams/get-access/civil-legal-aid-containers.png)

## Find a Legal Adviser interactions

![Find a Legal Adviser container diagram](https://media.githubusercontent.com/media/ministryofjustice/laa-architecture-documentation/master/diagrams/get-access/find-a-legal-adviser-containers.png)

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

#### Make sure you're logged into Amazon ECR registry with get-login

1. Install AWS CLI
1. Use `aws configure` to configure your AWS Access Key ID and AWS Secret Access Key, and set the default region name to `eu-west-1`.
1. Run `aws ecr get-login --no-include-email`
1. Copy and paste the resulting docker login command into a terminal to authenticate your Docker CLI to the registry. This command provides an authorization token that is valid for the specified registry for 12 hours.
1. Run `aws ecr describe-repositories`. You should see a list of ECR repositories.

#### Run the tests in docker container
The following command will (1) start services and applications, (2) run the tests and (3) stop the services and applications.

```
$ bin/setup && bin/run_tests_in_docker && bin/stop
```

#### Run the tests on local machine
First - run cla_backend and cla_public locally (copy the cla_public url, adding a '/start' at the end to ensure it is running locally)

To run the Check Legal Aid tests locally, run the following commands:
```
cd tests/check-legal-aid
npm install
npm test
```

#### Run single test on local machine
To run a single test on your local machine go to:
```tests/check-legal-aid/package.json```
Inside 'scripts' create a new test name with a path to your test.
```
{
  "name": "laa-cla-e2e-tests",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "find test/specs/ -type f -exec nightwatch {} +",
    "name-of-new-test": "nightwatch test/specs/face-to-face-page.js",
    "test-docker": "find test/specs/ -type f -exec nightwatch --verbose {} +"
  },
```

To run your test in the terminal run:
```buildoutcfg
npm run name-of-new-test
```

### Trouble shooting for local machine.
Check you are running cla_back end and cla_public locally
Make sure you are in:
```buildoutcfg
tests/check-legal-aid
```
#####- Failing test due to an incorrect URL being generated. 

   
Go to:     
    ```
    tests/check-legal-aid/nightwatch.conf.js
    ```

And change:
    ```
    var baseUrl = process.env.CLA_PUBLIC_URL || localhost;
    ```
     
With: 
    ```
     var baseUrl = process.env.CLA_PUBLIC_URL || "http://127.0.0.1:5000";
    ```

#####- If you receive the following error message start the chrome driver manually:
```
 Error retrieving a new session from the selenium server   
```
 - open a new terminal
 - make sure you are inside: 
 ```buildoutcfg
tests/check-legal-aid
```
  
- paste the following
    
```buildoutcfg
./node_modules/chromedriver/bin/chromedriver 
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
