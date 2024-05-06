const { test, expect } = require('@playwright/test');
import { BookStorePage } from "../../page-object/book-store-page";
test.describe('Search Book', (page) => {
  let bookStorePage;

  test.beforeEach(async ({ page }) => {
    bookStorePage = new BookStorePage(page);
    await bookStorePage.goto();
  });

  test('Search book with multiple results', async ({ page }) => {
    let searchTerms = ["design","Design"];
    let searchTermCount = searchTerms.length;

    // loop on each search term
    for(let k=0;k<searchTermCount;k++){
      // search item
      await bookStorePage.search(searchTerms[k]);  
      const {searchResultList} = await bookStorePage.getSearchResults();
      // get the number of book matching with search term k
      let count = (await searchResultList.all()).length;
      let text;
      for (let i = 0; i < count; i++) {
        await searchResultList.nth(i).textContent().then((str)=>{
          // to lowercase the book name in result list to check with
          text = str.toLocaleLowerCase();
        });
        // verify search k with each of item in the result list
        expect(text).toEqual(expect.stringContaining(searchTerms[k].toLocaleLowerCase()));
      } 
    }
  });
});

