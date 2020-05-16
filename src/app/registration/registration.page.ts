import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';

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
    public alertController: AlertController,
    public router: Router,
    public menu: MenuController,
    public afstore: AngularFirestore,
    public user: UserService
    ) { }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["Ok"]
    })

    await alert.present()
  }

  async register() {
    const { username, password, cpassword } = this
    if(password !== cpassword) {
      this.presentAlert("Błąd", "Hasła nie są zgodne!")
      return console.error("Hasła nie są zgodne")
    }
    try{
    const res = await this.afAuth.createUserWithEmailAndPassword(username + '@gmail.com', password)
    console.log(res)
    //this.presentAlert("Rejestracja przebiegła pomyślnie", "Witamy na stronie!")
    //this.router.navigate(['/tabs'])

      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })

    this.user.setUser({
      username,
      uid: res.user.uid
    })
    this.presentAlert('Gratulacje!', 'Rejestracja przebiegła pomyślnie')
    this.router.navigate(['/tabs'])


    } catch(error) {
      console.dir(error)
      this.presentAlert("Error", error.message)
    }
  }

  
  openCart() {
    this.menu.open('cart');
  }

}
