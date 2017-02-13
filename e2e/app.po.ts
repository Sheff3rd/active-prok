import { browser, element, by } from 'protractor/built';

export class ActiveProkCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root font')).getText();
  }
}
