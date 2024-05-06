class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.btnLogin = this.page.getByRole('button', { name: 'Login' });
      this.mnProfile = this.page.getByRole('span',{name:'Profile'});
      this.mnLogin = this.page.getByRole('span',{name:'Login'});
    }
  
    async goto() {
      await this.page.goto('./books');
    }

    async goToProfilePage(){
        this.mnProfile.click();
    }
    
    async goToLoginPage(){
        this.mnLogin.click();
    }
  }