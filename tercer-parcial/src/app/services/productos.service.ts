import { Injectable } from '@angular/core';
import { Firestore, addDoc} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
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
}
