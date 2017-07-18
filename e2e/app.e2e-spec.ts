import { WetPage } from './app.po';

describe('wet App', () => {
  let page: WetPage;

  beforeEach(() => {
    page = new WetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
