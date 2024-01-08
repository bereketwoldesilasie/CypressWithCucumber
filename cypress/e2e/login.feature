Feature: Login Feature 

    Users can login to the application using their email and password

    Scenario: Successful Login
        Given You are on the login page
        When I enter my user name "standard_user"
        And I enter my password "secret_sauce"
        And I click on the login button
        Then I should see the dashboard
    Scenario: Unsuccessful Login
        Given You are on the login page
        When I enter my user name "standard_user"
        And I enter my password "wrong_password"
        And I click on the login button
        Then I should see an error message "Epic sadface: Username and password do not match any user in this service" 