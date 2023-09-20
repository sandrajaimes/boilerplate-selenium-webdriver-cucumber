# Selenium WebDriver with Cucumber (Typescript)
This repository performs interface testing using the demoblaze web page as a resource. It can be useful as a base reference for creating tests with Selenium WebDriver and Cucumber.

## Environment Setup
Before starting to use this boilerplate, make sure to have the environment properly configured. Below are the necessary steps:

1. **Set up environment variables:** In the env.Example file, there is an example of the required variables.

## Project Structure
1. *Folder - /src/config:* Contains configuration files for Cucumber execution and HTML report generation.
2. Folder - /src/drivers: Contains configuration for various available browsers.
3. Folder - /src/features: Contains the execution and definition of different steps that make up the tests.
4. Folder - /src/pages: Contains resources available to interact with each page. These resources are used in the steps defined in Cucumber.

## Installation
To install the dependencies

```bash
cd boilerplate-selenium-webdriver-cucumber
npm install
```

## Running the Tests
1. **start:test:** Executes the tests, displaying a report in the terminal and generating a JSON format report.
```bash
npm run start:test
```

2. **start:test:report:** Executes the tests, generating and opening a report with the results.
```bash
npm run start:test:report
```

## Author
@sandrajaimes