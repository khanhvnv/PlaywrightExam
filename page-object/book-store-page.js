import { ProfilePage } from "./profile-page";
export class BookStorePage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.txtSearch = this.page.getByPlaceholder('Type to search');
      this.mnProfile = this.page.locator('xpath=//span[contains(.,"Profile")]');
    }
  
    async goto() {
      await this.page.goto('./books');
    }
  
    async goToProfilePage(){
      await this.mnProfile.click();
    }
    async openBookDetail(bookName){
      await goToProfilePage();
      const profilePage = new ProfilePage();
      await profilePage.deleteBook(bookName);      
    }
  
    /**
     * @param {string} searchTerm
     */
    async search(searchTerm) {
      await this.txtSearch.fill(searchTerm);
      //await this.page.keyboard.press("Enter");
    }

    async getSearchResults(){  
      return {searchResultList:  this.page.locator('xpath=//a[contains(@href,"/books?book")]')};
    }
  }