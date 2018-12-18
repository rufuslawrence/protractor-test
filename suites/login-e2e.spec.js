// var TestConfig = require('../test.config');
// var loginPage = require('../pages/loginpage');
// var landingPage = require('../pages/landingpage');

// var Util = require('../util/utils');

// describe('signInPage Testing', function() {
// 	const SETTINGS = {
// 		wrongEmail: Util.generateRandomEmail(),
// 		wrongPassword: Util.generateRandomString(),
// 		message: "You've entered an unknown username or password"
// 	};
// 	const PROJECT_TITLE = ["New","Pending","Assigned","In Progress","Completed"];
// 	it('1.Incorrect credential should show error dialog', function() {
// 		loginPage.get();
// 		loginPage.login(SETTINGS.wrongEmail, TestConfig.TeamLeader.adminPassword); //TestConfig.admin.adminEmail, SETTINGS.wrongPassword)
// 		loginPage.checkLoginError(SETTINGS.message);
// 		loginPage.clearUsername();
// 		loginPage.clearPassword();
// 	});

// 	describe('Landing Page with 2 Roles', function() {
// 		beforeEach(async() => {
// 			loginPage.get();
// 		});
// 		it('2.Login as 3D-Designer and displays his dashboard', function() {
// 			loginPage.login(TestConfig.threedDesginer.adminEmail, TestConfig.threedDesginer.adminPassword); //TestConfig.admin.adminEmail, SETTINGS.wrongPassword)
// 			expect(landingPage.getCountProject()).toEqual(3);

// 			var allProjectTitlte = landingPage.getAllProjectList;
// 			expect(allProjectTitlte.get(0).getText()).toEqual(PROJECT_TITLE[2]);
// 			expect(allProjectTitlte.get(1).getText()).toEqual(PROJECT_TITLE[3]);
// 			expect(allProjectTitlte.get(2).getText()).toEqual(PROJECT_TITLE[4]);

// 		});
		
// 		it('3.Login as TeamLeader and displays his dashboard', function() {
// 			loginPage.login(TestConfig.TeamLeader.adminEmail, TestConfig.TeamLeader.adminPassword); //TestConfig.admin.adminEmail, SETTINGS.wrongPassword)
// 			expect(landingPage.getCountProject()).toEqual(5);

// 			var allProjectTitlte = landingPage.getAllProjectList;
// 			expect(allProjectTitlte.get(0).getText()).toEqual(PROJECT_TITLE[0]);
// 			expect(allProjectTitlte.get(1).getText()).toEqual(PROJECT_TITLE[1]);
// 			expect(allProjectTitlte.get(2).getText()).toEqual(PROJECT_TITLE[2]);
// 			expect(allProjectTitlte.get(3).getText()).toEqual(PROJECT_TITLE[3]);
// 			expect(allProjectTitlte.get(4).getText()).toEqual(PROJECT_TITLE[4]);



// 		});
// 		afterEach(async () => {
// 			landingPage.clickLogOutButton();
// 		});
// 	});


// });