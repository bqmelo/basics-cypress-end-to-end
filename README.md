# bqmelo

# Project Title

basics-cypress-end-to-end

## Getting Started

Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests.

Cypress enables you to write all types of tests:

End-to-end tests
Integration tests
Unit tests

All documentation you can found on: 
- https://www.cypress.io/


### Prerequisites

Should install home brew and node version 8+.
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```
$ brew install node
```


### Installing

Open the project folder from terminal.

```
 $ npm install cypress --save-dev
    $ npm install
```
```
 $ npx cypress open
```
If the package.json is not created (new project), run:
```
 $ npm init
```
Open the project using VSCode.


## Running the tests

```
 $ npx cypress open - Open cypress interface.
 $ npx cypress run - Run all in headless.
```

Accessing package.json, you can create scripts to open or run cypress:
In this example, as we are working with only one environment, so our baseUrl is always the same.

```
"scripts": {
    "cypress": "cypress open",
    "test": "cypress run"
  }
```

But if you need to, you can create a running command by passing baseUrl:

```
"scripts": {
    "cypress": "cypress open",
    "test": "cypress run",
    "cy.run:dev": "CYPRESS_baseUrl=https://dev.environment.com npm run cypress run",
    "cy.open:dev": "CYPRESS_baseUrl=https://dev.environment.com npm run cypress open"
  }
```

### Tips
Usually the folder "cypress/integration/examples" should be deleted, but I keep it in this project as usage examples of commands.


## Authors

* **Bruna Melo** - *Initial work* - [GitHub](https://github.com/bqmelo)
