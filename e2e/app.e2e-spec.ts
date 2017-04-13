import { IconsPage } from './app.po';

describe('icons App', () => {
  let page: IconsPage;

  beforeEach(() => {
    page = new IconsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
