import { browser, element, by } from 'protractor/built';

export class ActiveProkCliPage {
  sync() {
    return browser.waitForAngular()
  }

  get(path: string): any {
    return browser.get(path);
  }

  find(elem: string): any {
    return element(by.id(elem))
  }

  match(elem: string): any {
    return element(by.css(elem)).getText()
  }
}
