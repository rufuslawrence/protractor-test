const Util = require('../util/utils');
const TestConfig = require('../test.config');

// const AdfSettingsPage = require('./settingsPage');

const LoginPageModified = function (){
    const loginURL = TestConfig.main.url;
    const txtUsername = element(by.css("input[id='username']"));
    const txtPassword = element(by.css("input[id='password']"));
    const usernameTooltip = element(by.css("span[data-automation-id='username-error']"));
    const passwordTooltip = element(by.css("span[data-automation-id='password-required']"));
    const loginTooltip = element(by.css("span[class='login-error-message']"));
    const signInButton = element(by.id('login-button'));
    
    this.goToLoginPage = function () {
        browser.driver.manage().window().maximize();
        browser.get(loginURL);
        browser.driver.sleep(2000);
        
    };
    this.checkLoginRedirects = function(){
        this.goToLoginPage();
        expect(browser.driver.getCurrentUrl()).toBe(TestConfig.main.url+TestConfig.main.login);
    };
    this.waitForElements = function (){
        const deferred = protractor.promise.defer();

        Util.waitUntilElementIsVisible(txtUsername).then(()=>{
            Util.waitUntilElementIsVisible(txtPassword).then(()=>{
                deferred.fulfill();
            },()=>{
                deferred.rejected();
            })
        });

        return deferred.promise;

    };

    /**
     * Fills the username input
     * @method enterUsername
     * @param {String} username
     */
    this.enterUsername = function (username){
        Util.waitUntilElementIsVisible(txtUsername);
        txtUsername.sendKeys('');
        txtUsername.clear();
        browser.driver.sleep(500);
        txtUsername.sendKeys(username);
    };

    this.clickSignInButton = function (){
        Util.waitUntilElementIsVisible(signInButton);
        signInButton.click();
    };

    /**
     * Fills the password input
     * @method enterPassword
     * @param {String} password
     */
    this.enterPassword = function (password){
        Util.waitUntilElementIsVisible(txtPassword);
        browser.driver.sleep(500);
        txtPassword.clear();
        txtPassword.sendKeys(password);
    };

    /**
     * clears username input
     * @method clearUsername
     * @param {String} username
     */
    this.clearUsername = function(){
        Util.waitUntilElementIsVisible(txtUsername);
        txtUsername.click().clear();
    };

    /**
     * clears password input
     * @method clearPassword
     * @param {String} password
     */
    this.clearPassword = function (){
        Util.waitUntilElementIsVisible(txtPassword);
        txtPassword.getAttribute('value').then(function (value){
            for (let i = value.length; i >= 0; i--) {
                txtPassword.sendKeys(protractor.Key.BACK_SPACE);
            }
        });
    };

    /**
     * checks username tooltips
     * @method checkUsernameTooltip
     * @param {String} message
     */
    this.checkUsernameTooltip = function (message){
        Util.waitUntilElementIsVisible(usernameTooltip);
    };

    /**
     * checks password tooltips
     * @method checkPasswordTooltip
     * @param {String} message
     */
    this.checkPasswordTooltip = function (message){
        Util.waitUntilElementIsVisible(passwordTooltip);
    };

    /**
     * checks login error tooltips
     * @method checkLoginError
     * @param {String} message
     */
    this.checkLoginError = function (message){
        Util.waitUntilElementIsVisible(loginTooltip);
        expect(loginTooltip.getText()).toEqual(message);
    };
    this.login = function (username, password) {
        this.waitForElements();
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickSignInButton();
    };
 
};
module.exports = LoginPageModified;