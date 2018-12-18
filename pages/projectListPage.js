
/*
 * Copyright 2005-2018 Alfresco Software, Ltd. All rights reserved.
 *
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */

var Util = require('../util/utils');


const projectListPage = function () {

    var allprojectList = element.all(by.css('span[class="status"]'));
    var logout = element(by.cssContainingText("mat-icon", "menu"));

    var allcustomer = element(by.xpath("//div[@class='mat-select-value']/span/span[contains(text(),'All Customer')]"));
    var allhub = element(by.xpath("//div[@class='mat-select-value']/span/span[contains(text(),'All Hubs')]"));
    var newColumn = element(by.xpath("adf-document-list")[0]);
    var emptyElm = element.all(by.xpath("//adf-empty-list"));
    var newcount =  element(by.xpath("//span[contains(text(),'New')]/following-sibling::span"));
    var pendingcount =  element(by.xpath("//span[contains(text(),'Pending')]/following-sibling::span"));
    var assignedcount =  element(by.xpath("//span[contains(text(),'Assigned')]/following-sibling::span"));
    var inprogresscount =  element(by.xpath("//span[contains(text(),'In Progress')]/following-sibling::span"));
    var completedcount =  element(by.xpath("//span[contains(text(),'Completed')]/following-sibling::span"));
    var assignedrows =   element.all(by.xpath("//adf-document-list[@id='assigned-project-id']//div[@class='adf-datatable-row ng-star-inserted']"));
    var pendingrows =   element.all(by.xpath("//adf-document-list[@id='pending-project-id']//div[@class='adf-datatable-row ng-star-inserted']"));
    var newrows =   element.all(by.xpath("//adf-document-list[@id='new-project-id']//div[@class='adf-datatable-row ng-star-inserted']"));
    var completedrows =   element.all(by.xpath("//adf-document-list[@id='completed-project-id']//div[@class='adf-datatable-row ng-star-inserted']"));
    var inprogressrows =   element.all(by.xpath("//adf-document-list[@id='inprocess-project-id']//div[@class='adf-datatable-row ng-star-inserted']"));
    // var createProjectIcon =   element(by.xpath("//mat-icon[contains(text(),'add_circle')]"));  
    const createProjectIcon =   element(by.xpath("//mat-icon[contains(text(),'add_circle')]"));   
    const projectName = element(by.css("input[id='adf-folder-name-input']"));
    const customerName = element(by.xpath("//input[@placeholder='Customer Name']"));
    const adftableTeamLeadAssigment = element(by.xpath("//adf-datatable[@id='teamlead-assignment']"));
    
         
    this.getCountProject = function () {
        // Util.waitUntilElementIsVisible(allprojectList);
        browser.driver.sleep(10000);
        return allprojectList.count();
    };
    this.getAllProjectList = function () {
        // Util.waitUntilElementIsVisible(allprojectList);
        browser.driver.sleep(5000);
        return allprojectList;
    };

    this.clickProject = (projectNameInTable) => {
        const projectNamediv = element(by.xpath("//div[@filename='"+projectNameInTable+"']/div//b"));
        Util.waitUntilElementIsVisible(projectNamediv);
        browser.actions().mouseDown(projectNamediv).perform();
        // browser.executeScript("arguments[0].scrollIntoView();", projectNamediv.getWebElement());
        projectNamediv.click();
        // Util.waitUntilElementIsVisible(custName);
        // browser.driver.sleep(2000);
        // Util.waitUntilElementIsVisible(projectNamediv);
        // Util.waitUntilElementIsClickable(projectNamediv);
        // browser.actions().doubleClick(projectNamediv).perform();
        
        // projectNamediv.click();
        browser.driver.sleep(10000);
    };
    

    this.checkCreatedProjectInNew = (projectNameInTable) => {
        const projectNamediv = element(by.xpath("//adf-document-list[@id='new-project-id']//div[@filename='"+projectNameInTable+"']"));
        browser.actions().mouseDown(projectNamediv).perform();
        browser.driver.sleep(2000);
        Util.waitUntilElementIsVisible(projectNamediv);
    };
    this.checkProjectInPending = (projectNameInTable) => {
        const projectNamediv = element(by.xpath("//adf-document-list[@id='pending-project-id']//div[@filename='"+projectNameInTable+"']"));
        browser.actions().mouseDown(projectNamediv).perform();
        browser.driver.sleep(2000);
        Util.waitUntilElementIsVisible(projectNamediv);
    };
    

    this.clickAllCustomerFilter = function () {
        Util.waitUntilElementIsVisible(allcustomer);
        allcustomer.click();
    };
    this.clickAllCustomerFilter = function () {
        Util.waitUntilElementIsVisible(allcustomer);
        allcustomer.click();
        var custName = element(by.xpath("//span[contains(text(),'Belk')]"));
        browser.actions().mouseDown(custName).perform();
        // Util.waitUntilElementIsVisible(custName);
        browser.driver.sleep(2000);
        custName.click();
        browser.driver.sleep(5000);
        expect(emptyElm.count()).toBe(5);
        browser.driver.navigate().refresh()
        browser.driver.sleep(5000);
    };

    this.createProject = function (projectNameVar){
        
        Util.waitUntilElementIsVisible(createProjectIcon);
		createProjectIcon.click();
        
        Util.waitUntilElementIsVisible(projectName);
		projectName.sendKeys('');
        projectName.sendKeys(projectNameVar);
		Util.waitUntilElementIsVisible(customerName);
		customerName.click();
        this.selectCustomerValue();  // selects the AOE (Men)


        const dueDateIcon = element(by.xpath("//input[@placeholder=' Due Date']/parent::div/following-sibling::div"));
        Util.waitUntilElementIsVisible(dueDateIcon);
        dueDateIcon.click();
        const datePickerValue = element(by.cssContainingText('.mat-calendar-body-cell-content', '1'));
        Util.waitUntilElementIsVisible(datePickerValue);
        Util.waitUntilElementIsClickable(datePickerValue);
        datePickerValue.click();
        const create = element(by.xpath("//span[contains(text(),'Create')]"));  // create or cancel
        Util.waitUntilElementIsVisible(create);
        create.click();
        browser.driver.sleep(1000);
        Util.waitUntilElementIsVisible(adftableTeamLeadAssigment);
		
    };
	this.selectCustomerValue = () => {
        // "//span[@class='mat-option-text' and contains(text(),'AEO (Men)')]"
        const customerDropDownValue = element(by.xpath(   "//span[@class='mat-option-text' and contains(text(),'AEO (Men)')]"  ));
        // const customerDropDownValue = element(by.xpath(   "//span[@class='mat-option-text' and contains(text(),'"+name+"')]"  ));
        Util.waitUntilElementIsVisible(customerDropDownValue);
        Util.waitUntilElementIsClickable(customerDropDownValue);
        customerDropDownValue.click();
    };

    this.clickAllHubsFilter = function () {
        Util.waitUntilElementIsVisible(allhub);
        allhub.click();
        var custName = element(by.xpath("//span[contains(text(),'ShenZhen')]"));
        browser.actions().mouseDown(custName).perform();
        // Util.waitUntilElementIsVisible(custName);
        browser.driver.sleep(2000);
        custName.click();
        browser.driver.sleep(5000);
        expect(emptyElm.count()).toBe(5);
        browser.driver.navigate().refresh()
        browser.driver.sleep(5000);
    };

    this.assignedCount = function () {
        Util.waitUntilElementIsVisible(assignedcount);
        return assignedcount.getText();
    };

    this.getassignedRows = function () {
        return assignedrows.count();
    };

    this.checkassignedRowsCount = function () {
        Util.waitUntilElementIsVisible(assignedcount);
        this.getassignedRows().then(function (value) {
            expect(assignedcount.getText()).toBe( (value-1).toString());
        });
    };

    this.pendingCount = function () {
        Util.waitUntilElementIsVisible(pendingcount);
        return pendingcount.getText();
    };

    this.getpendingRows = function () {
        return pendingrows.count();
    };

    this.checkpendingRowsCount = function () {
        Util.waitUntilElementIsVisible(pendingcount);
        this.getpendingRows().then(function (value) {
            expect(pendingcount.getText()).toBe( (value-1).toString());
        });
    };

    this.newCount = function () {
        Util.waitUntilElementIsVisible(newcount);
        return newcount.getText();
    };

    this.getnewRows = function () {
        return newrows.count();
    };

    this.checknewRowsCount = function () {
        Util.waitUntilElementIsVisible(newcount);
        this.getnewRows().then(function (value) {
            expect(newcount.getText()).toBe( (value-1).toString());
        });
    };

    this.inprogressCount = function () {
        Util.waitUntilElementIsVisible(inprogresscount);
        return inprogresscount.getText();
    };

    this.getinprogressRows = function () {
        return inprogressrows.count();
    };

    this.checkinprogressRowsCount = function () {
        Util.waitUntilElementIsVisible(inprogresscount);
        this.getinprogressRows().then(function (value) {
            expect(inprogresscount.getText()).toBe( (value-1).toString());
        });
    };

    this.completedCount = function () {
        Util.waitUntilElementIsVisible(completedcount);
        return completedcount.getText();
    };

    this.getcompletedRows = function () {
        return completedrows.count();
    };

    this.checkcompletedRowsCount = function () {
        Util.waitUntilElementIsVisible(completedcount);
        this.getcompletedRows().then(function (value) {
            expect(completedcount.getText()).toBe( (value-1).toString());
        });
    };


    this.clickLogOutButton = function () {
        Util.waitUntilElementIsVisible(logout);
        logout.click();
        browser.driver.sleep(1000);
    };
};

module.exports = projectListPage;