import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { $ } from 'protractor';
import { UserService } from '../services/user.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  mainuser: AngularFirestoreDocument
  sub
  username: string
  profilePic: string
  busy: boolean = false
  password: string
  newpassword: string

  @ViewChild('fileBtn') fileBtn: {
    nativeElement: HTMLInputElement
  }

  constructor(
    private http: Http, 
    private afs: AngularFirestore,
    private router: Router,
    private alertController: AlertController,
    private user: UserService) { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
      this.username = event.username
      this.profilePic = event.profilePic
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  updateProfilePic() {
    this.fileBtn.nativeElement.click()
  }

  uploadPic(event) {
    const files = event.target.files

    const data = new FormData()
    data.append('file',files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '54bbbd963b93329e40e8')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event)
      const uuid = event.json().file
      this.mainuser.update({
        profilePic: uuid
      })
    })

  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create ({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async updateDetails() {
    this.busy = true

    if(!this.password) {
      this.busy = false
      return this.presentAlert('Błąd', 'Musisz podać hasło')
    }

    try {

    await this.user.reAuth(this.user.getUsername(), this.password)
    } catch(error) {
      this.busy = false
      return this.presentAlert('Błąd', 'Hasło nieprawidłowe')
    }
    if(this.newpassword) {
      await this.user.updatePassword(this.newpassword)
    }

    if(this.username !== this.user.getUsername()) {
      await this.user.updateEmail(this.username)
      this.mainuser.update({
        username: this.username
      })
    }

    this.password = ""
    this.newpassword = ""
    this.busy = false

    await this.presentAlert('Udało się!', 'Twój profil został zaktualizowany')

    this.router.navigate(['/tabs/feed'])
  }
}
