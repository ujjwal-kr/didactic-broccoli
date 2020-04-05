import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User1 } from '../models/User1';
import { User2 } from '../models/User2';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

userCollection1: AngularFirestoreCollection<User1>;
userCollection2: AngularFirestoreCollection<User2>;

isActive: boolean;
isVerified: boolean;


  constructor(private afs: AngularFirestore) { 
    this.userCollection1 = this.afs.collection('user1');
    this.userCollection2 = this.afs.collection('user2');

    this.isActive = false;
    this.isVerified = false;
  }

  verifyUser() {
    return this.isVerified = true;
  }

  activateUser(): boolean {
    if (this.isVerified) return this.isActive = true;
    else return this.isActive = false;
  }

  deactivateUser() {
    return this.isVerified = false;
  }

  checkUser1() {
    return this.userCollection1.valueChanges();
  }

  checkUser2() {
    return this.userCollection2.valueChanges();
  }
}