import { BasePage } from "./base-page";
export class LoginPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.userName = this.page.getByPlaceholder('UserName');
      this.passWord = this.page.getByPlaceholder('Password');
      this.btnLogin = this.page.getByRole('button', { name: 'Login' });
    }
  
    async goto() {
      await this.page.goto('./login/');
    }
  
    /**
     * @param {string} userName
     * @param {string} passWord
     */
    async fillUserInfo(userName,passWord) {
      await this.userName.fill(userName);
      await this.passWord.fill(passWord);
    }

    async login(userName,passWord) {
      await this.fillUserInfo(userName,passWord);
      await this.btnLogin.click();
    }

    async getLoggedInUser(userName){  
      return {loginLabel:  this.page.getByLabel(userName)};
    }
  }