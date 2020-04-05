import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
chatCollection: AngularFirestoreCollection<Chat>
  
  constructor(private afs: AngularFirestore) { 
    this.chatCollection = this.afs.collection('chats');
  }

  getChats() {
    return this.afs.collection('chats', ref => ref.orderBy('date')).valueChanges();
  }

  postChat(chat: Chat) {
    this.chatCollection.add(chat);
  }
}
