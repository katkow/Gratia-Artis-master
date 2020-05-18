import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public isSearchbarOpened = false;
  constructor(public menu: MenuController) {}

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('custom');
  }
  

}






