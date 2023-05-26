#Selenium WebDriver with Cucumber
This repository performs the execution of interface tests using the demoblaze web page as a resource. It can be useful as a base reference resource for creating tests with: selenium webdriver and cucumber.

##Environment settings
Before starting to use this boilerplate, it is necessary to make sure that you have set up the environment properly. Here are the necessary steps:
1. **Set environment variables:** An example of the required variables is found in the env.Example file.


##Project structure
1. **/src/config folder:** Contains the configuration files for running Cucumber and generating a report in HTML format.
2. **Folder /src/drivers:** Contains the configuration for the different available browsers.
3. **Folder /src/features:** Contains the execution and definition of the different steps (steps) that make up the tests.
4. **Folder /src/pages:** Contains the resources available to interact with each page. These resources are used in the steps defined in Cucumber.

## Execution scripts
1. **start:test:** Performs the test execution, displaying a report in the terminal and generating a report in JSON format.
2. **start:test:report:** Carry out the execution of the tests, generating and opening a report with the results.