import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { firestore } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postID: string
  post
  postReference: AngularFirestoreDocument
  sub
  UploadedFileURL: Observable<string>;
  heartType: string = "heart-outline" 
  //default - puste serce

  constructor(
    private route: ActivatedRoute, 
    private afs: AngularFirestore,
    private user: UserService,
    private router: Router,
    private storage: AngularFireStorage, ) { 
    
  }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.postReference = this.afs.doc(`posts/${this.postID}`)
    this.sub = this.postReference.valueChanges().subscribe(val => {
      this.post = val
      //this.heartType = val.likes.includes(this.user.getUID()) ? 'heart' : 'heart-outline'
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  uploadedFile(event: FileList) {
    const file = event.item(0)
    const path = `${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    this.UploadedFileURL = fileRef.getDownloadURL();
  }


  toggleHeart() {

    if(this.heartType == 'heart-outline') {
      this.postReference.update({
       // likes: firestore.FieldValue.arrayUnion(this.user.getUID())
      })
    } else {
      this.postReference.update({
        //likes: firestore.FieldValue.arrayRemove(this.user.getUID())
      })
    }
  }

  removePost() {
    this.postReference.delete();
    this.router.navigate(['/tabs/profile'])
  } 

}
