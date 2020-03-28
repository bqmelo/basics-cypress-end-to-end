# bqmelo
basics-cypress-end-to-end

Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests.

Cypress enables you to write all types of tests:

End-to-end tests
Integration tests
Unit tests

All documentation you can get on: 
- https://www.cypress.io/


#Precondition
    - Install brew:
        - /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    - NodeJs version 8+ installed.
        - brew install node

#Installing CYPRESS by npm
    - Open the project folder from terminal.
    - $ npm install cypress --save-dev
        - $ npm install
    - $ npx cypress open
    - If the package.json is not created (new project), run:
        - $ npm init
    - Open the project using VSCode.

#Initial setup
    - All default settings or the ones you would like to change, you can get on: 
        - https://docs.cypress.io/guides/references/configuration.html#Options
    - For this project was setup: 
        - Disabled video record. (cypress.json).
        - Disabled screenshot on failure. (support/index.js).
        - BaseUrl. (cypress.json).

#Package Json
    - In this example, we are working with only one environment, so our baseUrl is always the same.
    But if you need to, you can create a running command by passing baseUrl:
        "cy.run:dev": "CYPRESS_baseUrl=https://dev.environment.com npm run cypress run" (Running in headless)

        "cy.open:dev": "CYPRESS_baseUrl=https://dev.environment.com npm run cypress open" (Opening the interface)

#Folders organization
    - Usually the folder "cypress/integration/examples" should be deleted, but I keep it in this project as usage examples of commands.