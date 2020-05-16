import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public menu: MenuController
    ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this
    if(password !== cpassword) {
      this.showAlert("Błąd", "Hasła nie są zgodne!")
      return console.error("Hasła nie są zgodne")
    }
    try{
    const res = await this.afAuth.createUserWithEmailAndPassword(username + '@gmail.com', password)
    console.log(res)
    this.showAlert("Rejestracja przebiegła pomyślnie", "Witamy na stronie!")
    this.router.navigate(['/tabs'])
    } catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present()
  }
  openCart() {
    this.menu.open('cart');
  }

}
