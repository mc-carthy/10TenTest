var expect = require('chai').expect
import SearchPage from '../pages/search.page'

describe('Search Field testing', () => {
    it('should show "Test" on the search results page when searching for "Test"', () => {
        const searchTerm: string = "test";
        SearchPage.open();
        SearchPage.searchInput.setValue(searchTerm);
        SearchPage.langaugeOption.selectByVisibleText("English");
        SearchPage.submit();
        const firstHeadingText = browser.getText('#firstHeading').toLowerCase();
        expect(searchTerm).to.equal(firstHeadingText, "Expected text to be: " + firstHeadingText);
        browser.click('//a[text()="Deutsch"]');
        browser.click('//a[text()="English"]');
        // browser.end();    
    });
});