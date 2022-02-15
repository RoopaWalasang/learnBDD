//import { Given, When, Then } from 'cucumber';
import { Given, When, Then } from "@cucumber/cucumber";
import BorrowPage from '../pageobjects/borrow.page';
import commonPage from '../pageobjects/common.page';


Given(/^I am on the homeloan page $/, async () => {
     commonPage.openHomePage();
});

When(/^I enter application type $/, async () => {
    await BorrowPage.selectApplicationType();
});

When(/^I enter Number of dependents $/, async () => {
    await BorrowPage.selectNumberOfDependants();
});

When(/^I enter property you would like to buy $/, async () => {
    await BorrowPage.selectPropertyToBuy();
});

When(/^Enter your annual income $/, async () => {
    await BorrowPage.enterAnnualIncome();
});

When(/^ Enter your annual other income $/, async () => {
    await BorrowPage.enterOtherIncome();
});

When(/^Enter monthly expenses $/, async () => {
    await BorrowPage.enterMonthlyExpenses();
});

When(/^Enter current home loan monthly repayments $/, async () => {
    await BorrowPage.enterLoanRepayments();
});

When(/^ Enter other loan monthly repayments $/, async () => {
    await BorrowPage.enterOtherLoanRepayments();
});

When(/^Enter monthly commitments $/, async () => {
    await BorrowPage.enterOtherCommitments();
});

When(/^Enter Total credit card limits $/, async () => {
    await BorrowPage.enterCreditCardLimit();
});

When(/^click on Work out how much I could borrow button $/,async ()=> {
   await BorrowPage.clickOnBorrowButton();
});

Then(/^I should get borrowing estimate of <message> $/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^ Click on Start over button $/, async () => {
    await BorrowPage.clickOnStartOverButton();
});

Then(/^I should see all fields should be cleared$/, async () => {
    
});



 

