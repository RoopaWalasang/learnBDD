class commonPage {
    openHomePage() {
      browser.url("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");
      console.log("Navigating to Url 'https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");
    }
}
export default new commonPage();