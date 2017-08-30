
class Search_Page {

    public get searchInput()  { return browser.element('#searchInput') }
    public get langaugeOption() { return browser.element('#searchLanguage') }
    public get form()      { return browser.element('#search-form') }

    public open(): void {
        browser.url('/')
    }
    public submit(): void {
        this.form.submitForm()
    }

}
const SearchPage = new Search_Page()
export default SearchPage