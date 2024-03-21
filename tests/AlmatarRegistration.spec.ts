import { test } from '@playwright/test';

test.describe("create account test cases", ()=>{

    test('open Almatar link', async ({ page }) => {
        await page.goto('https://Almatar.com/');


        // Maximize the screen
        await page.setViewportSize({ width: 2000, height: 1200 });



 
         // Wait for the sign-up button to become visible
         await page.waitForSelector('button[class="fill-btn"]');
    
         // Click on Sign up button
        await page.click('button[class="fill-btn"]');


        // Wait for the form to become visible
        await page.waitForSelector('input[name="firstName"]');


        // Fill in registration form
  await page.fill('input[name="firstName"]', 'Aya');   //Fill first name
  await page.fill('input[name="lastName"]', 'Shoaib');   //fill last name
  await page.fill('input[name="emailOrphone"]', 'aya@gmail.com');   //fill email address
  await page.fill('input[class="phone-number-input ng-untouched ng-pristine ng-invalid"]', '556289622');   //fill mobile number
  await page.fill('input[name="password"]', 'password123');   //fill password



  // Click on the checkbox
  await page.click('span[class="checkmark"]');

  // Click on the submit button
  await page.click('button[class="float-right btn btn-success"]');

      
      });




});
