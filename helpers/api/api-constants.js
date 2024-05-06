export const API_CONSTANTS = {
    URL : "https://demoqa.com",
    LOGIN:"/Account/v1/Login",
    GENERATE_TOKEN:"/Account/v1/GenerateToken",
    CURRENT_USER:"/Account/v1/User",
    SPECIFIC_USER: (userId) => `/Account/v1/User/${userId}`,
    BOOKS:"/BookStore/v1/Books",
    BOOK:"/BookStore/v1/Book",
    REPLACE_BOOK: (isbn) => `/BookStore/v1/Books/${isbn}`,
    USERNAME:"khanhvu",
    PASSWORD:"123456aA!"
}
