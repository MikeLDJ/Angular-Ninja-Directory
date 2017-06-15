import { AngularNinjaDirectoryPage } from './app.po';

describe('angular-ninja-directory App', () => {
  let page: AngularNinjaDirectoryPage;

  beforeEach(() => {
    page = new AngularNinjaDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
