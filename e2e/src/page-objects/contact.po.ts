import { browser, by, element } from 'protractor';

export class ContactPage {
  navigateTo() {
    return browser.get('/contact');
  }

  getItemText() {
    return element(by.css('ion-item ion-label')).getText();
  }

  async typeInTheSubcjet() {
    await element(by.css('ion-input[placeholder="Podaj temat wiadomości"] input')).sendKeys("wiadomość"); 
  }
  
}
