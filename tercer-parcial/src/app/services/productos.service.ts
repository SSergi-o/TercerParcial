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
    return this.Firestore.collection('products',ref => ref.orderBy('name','asc')).snapshotChanges();
  }
  deleteRecord(id: string): Promise<any> {
    return this.Firestore.collection('products').doc(id).delete();
  }
  /*addProduct(product: Producto) {
    const recordRef = collection(this.Firestore ,'products');
    this.router.navigate(['/panel-admin']);
    return addDoc(recordRef, product);

  }*/
  /*getRecords():Observable<Producto[]> {
    const recordRef = collection(this.firestore ,'products');
    return collectionData(recordRef, {idField: 'titulo'}) as Observable<Producto[]>;
}
  deleteProduct(product: Producto) {

    const recordRef = doc(this.firestore ,`products/${product.name}`);
    //this.router.navigate(['/panel-admin']);
    return deleteDoc(recordRef);


  }*/


}
