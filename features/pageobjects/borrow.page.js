class BorrowPage {
    
    get application_type() {
        return $('//*[@id="application_type_single"]');
    }
    get input_NumberOfDependants() {
        return $('//*[@title="Number of dependants"]');
    }
    get select_PropertyToBuy() {
        return $('//input[@id="borrow_type_home"]');
    }
    get input_annualIncome() {
        return $('//input[@aria-labelledby="q2q1"]');
    }
    get input_otherIncome() {
        return $('//input[@aria-labelledby="q2q2"]');
    }
    get input_monthlyExpenses() {
        return $('//input[@id="expenses"]');
    }
    get input_loanRepayments() {
        return $('//input[@aria-labelledby="q3q2"]');
    }
    get input_otherRepayments() {
        return $('//input[@aria-labelledby="q3q3"]');
    }
    get input_otherCommitments() {
        return $('//input[@aria-labelledby="q3q4"]');
    }
    get input_creditCardLimits() {
        return $('//input[@id="credit"]');
    }
    get calculate_Btn() {
        return $('//button[@id="btnBorrowCalculater"]');
    }
    get borrowing_Amt() {
        return $('//span[@id="borrowResultTextAmount"]');
    }
    get StartOverButton() {
        return $('//*[@class="result__restart"]/button[@role ="button"]');
    }
   /* get msg_Dispalyed() {
        return $('button[type="submit"]');
    }*/
  
  /*  async openbrowser() {
        browser.url("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/")
   }*/
    
    async selectApplicationType(){
       await this.application_type.waitForExist({timeout:2000});
       await this.application_type.click();

    }

    async selectNumberOfDependants(){
        const selectBox = await $('//*[@title="Number of dependants"]');
	    console.log(await selectBox.getValue()); 
        await selectBox.selectByIndex(0);

    }

    async selectPropertyToBuy(){
        await this.application_type.waitForExist({timeout:2000});
        await this.selectPropertyToBuy.click();
    }
    async enterAnnualIncome(){
        await this.input_annualIncome.setValue("80000");
    }
    async enterOtherIncome(){
        await this.input_otherIncome.setValue("10000");
    }
    async enterMonthlyExpenses(){
        await this.input_monthlyExpenses.setValue("500");
    }
    async enterLoanRepayments(){
        await this.input_loanRepayments.setValue("0");
    }
    async enterOtherLoanRepayments(){
        await this.input_otherRepayments.setValue("100");
    }
    async enterOtherCommitments(){
        await this.input_otherCommitments.setValue("0");
    }
    async enterCreditCardLimit() {
       await this.enterCreditCardLimit.setValue("10000");
    }
    async clickOnBorrowButton(){
        await this.calculate_Btn.click();
    }

    async getBorrowingEstimate(){
        const borrowAmt = await $('//*[@title="Number of dependants"]');
        console.log(await borrowAmt.getValue());
        
    }
    async clickOnStartOverButton(){
        await this.StartOverButtonclick();
    }
    
}
export default new BorrowPage();
