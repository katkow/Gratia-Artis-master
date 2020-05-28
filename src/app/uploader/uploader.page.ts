import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from './../services/user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface MyData {
  name: string;
  filepath: string;
  price: number;
}

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})

export class UploaderPage implements OnInit {
   // Upload Task 
   task: AngularFireUploadTask;
   // Progress in percentage
   percentage: Observable<number>;
   // Snapshot of uploading file
   snapshot: Observable<any>;
   // Uploaded File URL
   UploadedFileURL: Observable<string>;
   //Uploaded Image List
   images: Observable<MyData[]>;
   //File details  
  // fileName:string;
   fileSize:number;
   price: number;
   desc: string;
   //Status check 
   isUploading:boolean;
   isUploaded:boolean;

  // imageURL: string
  // busy: boolean = false
  // @ViewChild('fileButton') fileButton

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    private alertController: AlertController,
    private router: Router,
    private storage: AngularFireStorage, 
    private database: AngularFirestore) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('posts');
    this.images = this.imageCollection.valueChanges();
     }

  ngOnInit() {
  }

  // async createPost() {
  //   this.busy = true

  //   const image = this.imageURL
  //   const desc = this.desc

  //   this.afstore.doc(`users/${this.user.getUID()}`).update({
  //     posts: firestore.FieldValue.arrayUnion(image)
  //   })
    
  //   this.afstore.doc(`posts/${image}`).set({
  //     desc,
  //     author: this.user.getUsername(),
  //     likes: [] //maybe optional, favs view?
  //   })

  //   this.busy = false
  //   this.imageURL = ""
  //   this.desc = ""

  //   const alert = await this.alertController.create({
  //     header: 'Zakończono',
  //     message: 'Twoja praca została opublikowana',
  //     buttons: ['OK']
  //   })
  //   await alert.present()
  //   this.router.navigate(['/tabs/feed'])

  // };

  // uploadFile() {
  //   this.fileButton.nativeElement.click()
  // }

  // fileChanged(event) {
  //   this.busy = true

  //   const files = event.target.files
  //   //console.log(files)

  //   const data = new FormData()
  //   data.append('file',files[0])
  //   data.append('UPLOADCARE_STORE', '1')
  //   data.append('UPLOADCARE_PUB_KEY', '54bbbd963b93329e40e8')

  //   this.http.post('https://upload.uploadcare.com/base/', data).subscribe(event => {
  //     console.log(event)
  //     this.imageURL = event.json().file
  //     this.busy = false
  //   })
  // }

  uploadFile(event: FileList) {
    // The File object
    const file = event.item(0)
    // walidacja dla obrazów
    if (file.type.split('/')[0] !== 'image') { 
     console.error('Zły format pliku')
     return;
    }
    
    this.isUploading = true;
    this.isUploaded = false;
   // this.fileName = file.name;
    // The storage path
    const path = `${new Date().getTime()}_${file.name}`;
    //File reference
    const fileRef = this.storage.ref(path);
    // The main task
    this.task = this.storage.upload(path, file);
    // Get file progress percentage
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: this.desc,
            filepath: resp,
            price: this.price
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: MyData) { 
    //Create an ID for document
    const id = this.database.createId();
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

}
