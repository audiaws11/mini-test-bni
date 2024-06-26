# Mobile Functional Test

## Setup

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Ensure Appium server is running**:
    - You can start the Appium server by running:
        ```sh
        appium
        ```
    - Make sure the Appium server is running and accessible.

4. **Configure the mobile device or emulator**:
    - Ensure that your mobile device or emulator is properly set up and connected.
    - For an Android device, enable Developer Options and USB Debugging.
    - For an emulator, make sure it is started and running.

5. **Run the tests**:
    ```sh
    npx wdio run wdio.conf.js
    ```

## Test Description

This test suite automates the login functionality on `https://the-internet.herokuapp.com/login` using WebdriverIO. It includes tests for valid and invalid login scenarios.

### Test Scenarios

1. **Login with valid credentials**:
    - Enters a valid username and password.
    - Verifies that the login is successful and a success message is displayed.

2. **Login with invalid credentials**:
    - Enters an invalid username and password.
    - Verifies that the login fails and an error message is displayed.

### Directory Structure

