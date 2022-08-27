# Triangle Calculator API Test

## Technologies
* JavaScript
* Mocha
* Chai JS
* SuperTest HTTP Library

## Setup project locally

Install dependencies - All the plugins and versions are defined in the package.json file along with .babelrc, .mocharc.yaml files
* "npm install"
* "npm i --save-dev supertest mocha chai @babel/cli  @babel/core @babel/node @babel/register @babel/preset-env"
* "npm i @babel/plugin-transform-runtime"
* "npm install --save-dev mochawesome"

Test Execution
- To run the test locally with mochawesome report - "npm run test-html"
- To run the test on Jenkins with Junit report - "npm run test-junit"

## Data

* Test Data can be found in ../testdata folder in JSON format
* All the response messages and status messages are defined in ../exepectedvalues folder in JSON format

## Test scripts

* Test scripts are build using supertest api testing framework with chai assertion
* Test scripts can be found in ../test folder

## Report

* mochawesome report can be found in mochawesome-report folder
* Junit test report defnied in xml format in test-result.xml file

## Encounted Issues and Bugs

1. GET/version endpoint return status code **400** response for some API calls
2. Given POST endpoint used to verify the type of the triangle by the 3 sides, which expect only to retrieve data with 200 status code instead of creating resource (triangle on the server side - **201 status code**). For isosceles triangle, identification request creates the resource on the server side instead of retrieving the type of the triangle
3. Response type of the GET/version endpoint changed based on the return text and status code
4. Status code 418 - I'm a teapot is not an informative error message in client side

Console log


Report

Jenkins build console log
