$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.background({
  "name": "Open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User eneters correct username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_eneters_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario with parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User eneters correct username \"avc@xyz.com\" and password \"Abc@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_eneters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});