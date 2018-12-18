var Page = require('astrolabe').Page;
var Util = require('../util/utils');

module.exports = Page.create({
   
   getAllProjectList: {
      get: function() {
         return element.all(by.css('span[class="status"]'));
         
      }
   },

   getCountProject: {
      value: function() {
        //  Util.waitUntilElementIsVisible(this.getAllProjectList);
         return this.getAllProjectList.count();
      }
   },

   clickLogOutButton: {
      value: function() {
        const logout = element(by.cssContainingText("mat-icon", "menu"));
        Util.waitUntilElementIsVisible(logout);
        logout.click();
      }
   }
});