import { browser, by, element } from 'protractor';

export class RegistrationPage {
  navigateTo() {
    return browser.get('/registration');
  }

  getParagraphText() {
    return element(by.css('ion-col h3')).getText();
  }
}
