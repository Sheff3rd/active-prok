import { ActiveProkCliPage } from './app.po';

describe('active-prok-cli App', function() {
  let page: ActiveProkCliPage;

  beforeEach(() => {
    page = new ActiveProkCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
