
/*
 * Copyright 2005-2018 Alfresco Software, Ltd. All rights reserved.
 *
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */

var Util = require('../util/utils');
var projectListPage = require('./projectListPage');


const projectDetailsPage = function () {

    const adftableTeamLeadAssigment = element(by.xpath("//adf-datatable[@id='teamlead-assignment']"));
    const clickCancelStyle = element(by.xpath("//button[@mattooltip='Cancel']"));
    const clickSaveStyle = element(by.xpath("//button[@mattooltip='Save']"));
    const customerStyle = element(by.xpath("//input[@placeholder='Customer Style#']"));
    const projectView = element(by.xpath("//button[@id='projectview']"));
    const threeddesigner = element(by.xpath("//input[@placeholder='3D Designer']"));
    
    
    
    this.clickprojectView = () => {
        Util.waitUntilElementIsVisible(projectView);
        projectView.click();
        browser.driver.sleep(2000);
        
        // projectListPage.getAllProjectList();

    };
    this.waitForProjectDetailsPage = () =>{
        browser.driver.sleep(2000);
        Util.waitUntilElementIsVisible(adftableTeamLeadAssigment);
    };
	this.clickCancelButton = () => {
        Util.waitUntilElementIsVisible(clickCancelStyle);
        clickCancelStyle.click();
        browser.driver.sleep(2000);
        
        // projectListPage.getAllProjectList();

    };
    this.clickSaveButton = () => {
        Util.waitUntilElementIsVisible(clickSaveStyle);
        clickSaveStyle.click();
        browser.driver.sleep(5000);
        // projectListPage.getAllProjectList();
    };

    this.enterCustomerStyle = (style) => {
        Util.waitUntilElementIsVisible(customerStyle);
        customerStyle.click();
        customerStyle.clear();
        customerStyle.sendKeys(style);
    };

    this.selectDesigner = (designer) => {
        Util.waitUntilElementIsVisible(threeddesigner);
        threeddesigner.click();

        const designerDropDownValue = element(by.xpath(   "//span[@class='mat-option-text' and contains(text(),'Anitha Kumari')]"  ));
        Util.waitUntilElementIsVisible(designerDropDownValue);
        Util.waitUntilElementIsClickable(designerDropDownValue);
        designerDropDownValue.click();
    };
    };


    this.clickLogOutButton = function () {
        Util.waitUntilElementIsVisible(logout);
        logout.click();
        browser.driver.sleep(1000);
    };
};

module.exports = projectDetailsPage;