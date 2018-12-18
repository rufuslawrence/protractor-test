// import LoginPageModified = require('../pages/loginPageModified');

// import LoginPageModified from '../pages/loginPageModified';
var TestConfig = require('../test.config');
var loginPageModified = require('../pages/loginPageModified');
var projectListPage = require('../pages/projectListPage');
var projectDetailsPage = require('../pages/projectDetailsPage');
var Util = require('../util/utils');

describe('Login',function ()  {
  const loginPage = new loginPageModified();
  const projectList = new projectListPage();
  const projectDetails = new projectDetailsPage();
  const PROJECT_TITLE = ["New","Pending","Assigned","In Progress","Completed"];
  
  beforeEach(() => {
  });

  // it('1.should redirect to DPD login page', function()  {
  //   loginPage.checkLoginRedirects();

  // });

  	describe('project list page', function() {
		beforeEach(async() => {
      loginPage.goToLoginPage();
      loginPage.login(TestConfig.TeamLeader.adminEmail, TestConfig.TeamLeader.adminPassword);
      
		});
		// it('2.Login as TeamLeade and check filter works', function() {
    //   expect(projectList.getCountProject()).toEqual(5);

    //   projectList.clickAllCustomerFilter();
    //   projectList.clickAllHubsFilter();

    // });
    it('3.Login as TeamLead and project list count', function() {
      
      // expect(projectList.getCountProject()).toEqual(5);
      // projectList.checkassignedRowsCount();
      // projectList.checkpendingRowsCount();
      // projectList.checkcompletedRowsCount();
      // projectList.checkinprogressRowsCount();
      // projectList.checknewRowsCount();
    });


    it('4. Project Status New, pending, approved ', function() {

      projectList.getAllProjectList();
      const newProjectName = "Automation_test_"+Util.generateRandomString();
      projectList.createProject(newProjectName);
      projectDetails.waitForProjectDetailsPage();
      projectList.checkCreatedProjectInNew(newProjectName);

      projectList.clickProject(newProjectName);
      projectDetails.waitForProjectDetailsPage();
      projectDetails.enterCustomerStyle("Test Style");
      projectDetails.clickSaveButton();
      projectDetails.clickprojectView();

      // pendin project
      
      projectList.checkProjectInPending(newProjectName);
      // projectList.clickProject("Automation_test_2129");
      // projectDetails.waitForProjectDetailsPage();
      
      
    });
    afterEach(async()=>{
      projectList.clickLogOutButton();
    });
  });
}); 
