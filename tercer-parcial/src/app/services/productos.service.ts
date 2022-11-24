import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData,collection} from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


import { Router, RouterModule } from '@angular/router';
import {  deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(//private firestore: Firestore//
  private Firestore: AngularFirestore,private router:Router) { }

  addRecord(product: any): Promise<any> {
    return this.Firestore.collection('products').add(product);

  }
  getRecords(): Observable<any> {
    return this.Firestore.collection('products').snapshotChanges();
  }
  deleteRecord(id: string): Promise<any> {
    return this.Firestore.collection('products').doc(id).delete();
  }
  getRecord(id: string): Observable<any> {
    return this.Firestore.collection('products').doc(id).snapshotChanges();
  }
  updateRecord(id: string, data: any): Promise<any> {
    return this.Firestore.collection('products').doc(id).update(data);
  }


}
