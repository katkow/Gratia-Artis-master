import { browser, by, element } from 'protractor';

export class FeedPage {
  navigateTo() {
    return browser.get('/tabs/feed');
  }

  getCartButton() {
    //return element(by.css('[(click)="openCart()"]'));
    return element(by.css('#cart')).isPresent();
  }

  waitUntilVisible() {
    element(by.css('ion-input[[(ngModel)]="username"] input')).toEqual('test');
    element(by.css('ion-input[[(ngModel)]="password"] input')).toEqual('test123');
    this.navigateTo();
  }

}
