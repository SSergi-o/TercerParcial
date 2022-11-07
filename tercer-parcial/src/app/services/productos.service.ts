import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private firestore: Firestore) { }

  addProduct(product: Producto) {
    const recordRef = collection(this.firestore ,'products');
    return addDoc(recordRef, product);
  }
  getRecords():Observable<Producto[]> {
    const recordRef = collection(this.firestore ,'products');
    return collectionData(recordRef, {idField: 'titulo'}) as Observable<Producto[]>;
}
}
