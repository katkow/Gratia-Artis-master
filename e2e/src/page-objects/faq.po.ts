import { browser, by, element } from 'protractor';

export class FaqPage {
  navigateTo() {
    return browser.get('/faq');
  }

  getParagraphText() {
    return element(by.deepCss('ion-item ion-label')).getText();
  }

}
