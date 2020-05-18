import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'
import * as firebase from 'firebase/app';

interface user {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: user

    constructor(private afAuth: AngularFireAuth){

    }

    setUser(user: user) {
        this.user = user
    }

    getUsername(): string {
        return this.user.username
    }
    // naprawic
    async reAuth(username: string, password: string) {
    return (await this.afAuth.currentUser).reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@gmail.com', password))

    }

    async updatePassword(newpassword: string) {
        return (await this.afAuth.currentUser).updatePassword(newpassword)
    }

    async updateEmail(newemail: string) {
        return (await this.afAuth.currentUser).updateEmail(newemail + '@gmail.com')
    }

    async isAuthenticated() {
        if(this.user) return true

        const user = await this.afAuth.authState.pipe(first()).toPromise()

        if(user) {
            this.setUser({
                username: user.email.split('@')[0],
                uid: user.uid
            })
            return true
        }
        return false
    }

    getUID(): string {
        return this.user.uid   
    }
} 