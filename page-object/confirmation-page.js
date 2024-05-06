export class ConfirmationPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.btnOK = this.page.locator('xpath=//div[@class="modal-content"]//button[contains(.,"OK")]');
        this.btnCancel = this.page.getByRole('button', { name: 'Cancel' });
    }
  
    async cancel() {
        this.btnCancel.click();
    }
    async confirm() {
        this.btnOK.click(); 
    }
}