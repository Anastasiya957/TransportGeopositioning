import { NavigatorProjectPage } from './app.po';

describe('navigator-project App', () => {
  let page: NavigatorProjectPage;

  beforeEach(() => {
    page = new NavigatorProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
