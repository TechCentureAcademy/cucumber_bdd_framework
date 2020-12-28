$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserSignUpTest.feature");
formatter.feature({
  "name": "New User - Sign Up - Test Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify User Able To Create A New Account in Application - First Time Run",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@Staging"
    }
  ]
});
formatter.step({
  "name": "I Select Chrome Browser To Launch \"\u003cURL\u003e\" For Test Execution",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click On Register Link in Home Page",
  "keyword": "When "
});
formatter.step({
  "name": "I Verify New User Account Page Loaded Successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "I Set Text \"\u003cFirstName\u003e\" in First Name Field; in Account Sign Up Page",
  "keyword": "When "
});
formatter.step({
  "name": "I Set Text \"\u003cLastName\u003e\" in Last Name Field; in Account Sign Up Page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "URL",
        "FirstName",
        "LastName"
      ]
    },
    {
      "cells": [
        "http://www.mapsynq.com/",
        "Test",
        "Centure"
      ]
    }
  ],
  "tags": [
    {
      "name": "@Staging"
    }
  ]
});
formatter.scenario({
  "name": "Verify User Able To Create A New Account in Application - First Time Run",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@Staging"
    },
    {
      "name": "@Staging"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Select Chrome Browser To Launch \"http://www.mapsynq.com/\" For Test Execution",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSignUpSteps.i_login_to_application_with_in_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click On Register Link in Home Page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSignUpSteps.i_ClickOn_UserRegister_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify New User Account Page Loaded Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignUpSteps.verify_UserAccountPageLoad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Set Text \"Test\" in First Name Field; in Account Sign Up Page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSignUpSteps.SetTextInFirstNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Set Text \"Centure\" in Last Name Field; in Account Sign Up Page",
  "keyword": "And "
});
formatter.match({
  "location": "UserSignUpSteps.SetTextInLastNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});