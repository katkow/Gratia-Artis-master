import { HomePage } from './page-objects/home.po';

describe('HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
   // page = new HomePage();
  });

  it('should display a welcome', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Dzień dobry!');
  });
});