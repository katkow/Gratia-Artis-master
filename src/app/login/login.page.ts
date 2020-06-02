import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private alertController: AlertController, public afAuth: AngularFireAuth, public menu: MenuController, public user: UserService, public router: Router) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      //sth to think about
      const res = await this.afAuth.signInWithEmailAndPassword(username + '@gmail.com', password)
      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.router.navigate(['/tabs'])
      }

    } catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found") {
        console.log("Użytkownik nie istnieje")
        const alert = await this.alertController.create({
          message: "Użytkownik nie istnieje", 
            buttons: [
                 {
                text: 'OK',
                handler: () => {
                  console.log('Confirm Ok');
                }
              }],
              cssClass: 'alert'
            });  
            
        await alert.present();
      }
    }
  }

  openCart() {
    this.menu.open('cart');
  }
}
