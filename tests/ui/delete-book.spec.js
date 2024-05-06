const { test, expect } = require('@playwright/test');
import { API_CONSTANTS } from "../../helpers/api/api-constants";
import { BookStorePage } from "../../page-object/book-store-page";
import { LoginPage } from "../../page-object/login-page";
import { ProfilePage } from "../../page-object/profile-page";


test.describe('Delete book', (page, request) => {
  let bookStorePage;
  let loginPage;
  let profilePage;
  
  test.beforeEach(async ({page, request}) => {
    bookStorePage = new BookStorePage(page);
    loginPage = new LoginPage(page);
    profilePage = new ProfilePage(page);

    /* Add a book to collection via API*/
    // get tokenId,userId and save to env
    let response = await request.post(process.env.base_url+ API_CONSTANTS.LOGIN,{
      data:{
        "userName": process.env.userName,
        "password": process.env.password
      }
    })
    await response.json().then(data=>{
      process.env.tokenId = data.token;
      process.env.userId = data.userId;
    });

    let tokenId = process.env.tokenId;
    let userId = process.env.userId;
    let isbn = "9781449325862";

    //add a book to collection
    await request.post(process.env.base_url+ API_CONSTANTS.BOOKS,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+tokenId,
      },
      data:{
        "userId": userId,
        "collectionOfIsbns": [
          {
            "isbn": isbn
          }
        ]
      }
    });

    // Login with username & password from env
    await loginPage.goto();
    await loginPage.login(process.env.userName,process.env.Password);
    
    // Goto Profile Page
    await bookStorePage.goToProfilePage();
  }),

  test.afterEach(async () => {
    //
  }),

  test('Delete book successfully', async ({}) => {
    let bookName = "Git Pocket Guide";  
    //delete a book
    await profilePage.deleteBook(bookName);
    // Get a book from profile page
    let book = await profilePage.getBook(bookName);
    // Check if book disappeared
    expect(book).not.toEqual(bookName);
  })
});