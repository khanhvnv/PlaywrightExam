import { hasUncaughtExceptionCaptureCallback } from "process";
import { ConfirmationPage } from "./confirmation-page";
export class ProfilePage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.txtSearch = this.page.getByPlaceholder('Type to search');
    }
  
    async goto() {
        await this.page.goto('./books');
    }

    async deleteBook(bookName) {
        //fill book name to search exact book
        await this.txtSearch.fill(bookName);
        //click on delete button of selected book
        await this.page.locator(`xpath=//a[contains(.,"${bookName}")]/../../../..//span[contains(@title,"Delete")]`).click();
        let confirmPage = new ConfirmationPage(this.page);
        //click ok button in confirm dialog
        await confirmPage.confirm(); 
    }
    async getBook(bookName){
        let locElement = "";
        let xpath = `xpath=//a[contains(.,"${bookName}")]`;
        try{
            const count = await this.page.locator(xpath).count();
            if (count > 0) {
                locElement = this.page.locator(xpath);
            }
        }
        catch (error){}
        
        return locElement;
    }
}