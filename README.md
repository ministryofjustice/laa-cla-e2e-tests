# End to end tests for Civil Legal Aid and Find A Legal Advisor

This is the monorepo codebase for the end to end tests for [Civil Legal Advice](https://checklegalaid.service.gov.uk/) and [Find A Legal Adviser](https://find-legal-advice.justice.gov.uk/).

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

### Running tests locally

### Running tests against staging

### Running tests on Circle CI

The tests on Circle CI are configured to run against our staging instances.

