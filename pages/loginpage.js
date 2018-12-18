var Page = require('astrolabe').Page;
var Util = require('../util/utils');
var TestConfig = require("../test.config");
module.exports = Page.create({
   url: {
        value: TestConfig.main.url+TestConfig.main.login
     },

   get: {
      value: function() {
         browser.get(this.url);
      }
   },
   navbar: {
      get: function() {
         return navbar;
      }
   },
   render: {
      value: function() {
         Util.waitForPage();
      }
   },
   txtUserName: {
      get: function() {
         return element(by.id('username'));
      }
   },
   txtPassword: {
      get: function() {
         return element(by.css("input[id='password']"));
      }
   },
   waitForElements: {
      value: function() {
         Util.waitUntilElementIsVisible(element(by.id('username')), 60000);
         Util.waitUntilElementIsVisible(element(by.css("input[id='password']")), 60000);
      }
   },
   clearUsername: {
      value: function() {
         Util.waitUntilElementIsVisible(element(by.id('username')));
         this.txtUserName.clear();
      }
   },
   clearPassword: {
      value: function() {
         Util.waitUntilElementIsVisible(element(by.css("input[id='password']")));
         this.txtPassword.clear();
      }
   },
   enterUsername: {
      value: function(name) {
         Util.waitUntilElementIsVisible(element(by.id('username')));
         this.txtUserName.sendKeys(name);
      }
   },
   enterPassword: {
      value: function(password) {
         Util.waitUntilElementIsVisible(element(by.css("input[id='password']")));
         this.txtPassword.clear();
         this.txtPassword.sendKeys(password);
      }
   },
   signInButton: {
      get: function() {
         return element(by.id('login-button'));
      }
   },
   login: {
      value: function(username, password) {
         this.waitForElements();
         this.enterUsername(username);
         this.enterPassword(password);
         this.clickSignInButton();
         Util.waitForPage();
      }
   },
   clickSignInButton: {
      value: function() {
         Util.waitUntilElementIsVisible(element(by.id('login-button')));
         this.signInButton.click();
      }
   },
   checkLoginError:{
    value: function(message) {
        Util.waitUntilElementIsVisible(this.loginTooltip);
        expect(this.loginTooltip.getText()).toEqual(message);
     }
   },

   loginTooltip:{
    get: function() {
        return element(by.css("span[class='login-error-message']"));
     }
   },
   waitUntilTheUserIsLogged: {
      value: function() {
         var userName = element(by.xpath("html/body/alfresco-app/div[2]/appsmanager-user-profile/div/div/span[1]"));
         Util.waitUntilElementIsVisible(userName);
      }
   },
   LoginFailure: {
      value: function() {
         Util.waitUntilElementIsVisible(element(by.className('error mdl-card__supporting-text')));
      }
   }
});