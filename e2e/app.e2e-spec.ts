import { SpaFrameworkPage } from './app.po';

describe('spa-framework App', () => {
  let page: SpaFrameworkPage;

  beforeEach(() => {
    page = new SpaFrameworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
