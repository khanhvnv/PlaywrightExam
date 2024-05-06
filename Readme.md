Name
[Playwright course] Basic code JS with playwright

Description
Learn to work with various web element(s) locating strategies, perform actions on web elements, group, and sequence tests as well as generate the test reports for your test cases
Understand the Page Object Model (POM) design pattern which will further help trainees optimize the execution of your automation scripts

Installation
Install the necessary tools below:
    "@playwright/test": "^1.43.1",
    "@types/node": "^20.12.7"
	"dotenv": "^16.4.5",

Tools: Visual Studio Code

Support
Nguyen Anh Tien (tiennguyena1@nashtechglobal.com)

Contributing
khanh.vunguyenvan@nashtechglobal.com

Project status
Development is keep going. 

Structure
	helper\api:
		api-constants.js: urls are used for api request urls
	hooks:
		global-setup.js	: setup config env
	page-object:
		book-store-page.js	: methods relating to books
		confirmation-page.js: methods for confirmation dialog
		login-page.js		: methods for login 
		profile-page.js		: methods in profile page
	tests\ui:
		delete-book.spec.js	: test cases for deleting books
		login.spec.js		: test cases for login
		search-book.spec.js	: test cases for search book	
	.env:
		declare global variables (username, password, tokenid, userid ...)