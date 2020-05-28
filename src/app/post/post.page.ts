import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { firestore } from 'firebase/app';
import { Router } from '@angular/router';

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

  heartType: string = "heart-outline" 
  //default - puste serce

  constructor(
    private route: ActivatedRoute, 
    private afs: AngularFirestore,
    private user: UserService,
    private router: Router) { 
    
  }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.postReference = this.afs.doc(`posts/${this.postID}`)
    this.sub = this.postReference.valueChanges().subscribe(val => {
      this.post = val
      this.heartType = val.likes.includes(this.user.getUID()) ? 'heart' : 'heart-outline'
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }



  toggleHeart() {

    if(this.heartType == 'heart-outline') {
      this.postReference.update({
        likes: firestore.FieldValue.arrayUnion(this.user.getUID())
      })
    } else {
      this.postReference.update({
        likes: firestore.FieldValue.arrayRemove(this.user.getUID())
      })
    }
  }

  removePost() {
    this.postReference.delete();
    this.router.navigate(['/tabs/profile'])
  } 

}
