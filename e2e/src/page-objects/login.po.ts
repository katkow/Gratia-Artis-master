import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.css('ion-col h3')).getText();
  }

  async enterLogin() {
    await element(by.css('ion-input[[(ngModel)]="username"] input')).sendKeys('test'); 
  }
  async enterPassword() {
    await element(by.css('ion-input[[(ngModel)]="password"] input')).sendKeys('test123'); 
  }

  clickSignIn() {
    return element(by.buttonText('Zaloguj'));
    
  }
  waitForError() {

  }

  getErrorMessage() {

  }

}
