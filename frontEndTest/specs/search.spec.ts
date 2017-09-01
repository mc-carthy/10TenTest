var expect = require('chai').expect
import SearchPage from '../pages/search.page'

describe('Search Field testing', () => {

    const languagePairs = [
        {
            'primaryLanguage': 'English', 
            'secondaryLanguage': 'Deutsch'
        },
        {
            'primaryLanguage': 'English', 
            'secondaryLanguage': 'Italiano'
        }
    ];
        
    for (let languagePair of languagePairs) {
        it('should show "Test" on the search results page when searching for "Test", including languages ${languagePair}', () => {
            const searchTerm: string = "test";
            SearchPage.open();
            SearchPage.searchInput.setValue(searchTerm);
            SearchPage.langaugeOption.selectByVisibleText(languagePair.primaryLanguage);
            SearchPage.submit();
            const firstHeadingText = browser.getText('#firstHeading').toLowerCase();
            expect(searchTerm).to.equal(firstHeadingText, "Expected text to be: " + firstHeadingText);
            browser.click('//a[text()="' + languagePair.secondaryLanguage + '"]');
            browser.click('//a[text()="' + languagePair.primaryLanguage + '"]');
        });
    }
});