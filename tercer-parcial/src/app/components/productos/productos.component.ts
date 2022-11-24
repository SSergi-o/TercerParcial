import { Component, OnInit } from '@angular/core';
//import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Producto[] = [];
  constructor(private _productsService: ProductosService) {
    /*this.products = [{
      id:1,
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      price: 0,
      artist: 'Prueba',
      genero: 'Prueba',
      image: (''),
    }];*/

  }

  ngOnInit(): void {
    this.getRecords();
    /*this.productsService.getRecords().subscribe(products => {
      this.products = products;
    });*/
  }
  getRecords(){
    this._productsService.getRecords().subscribe(data => {
      //this.products = products;
      data.forEach((element:any) => {
          console.log(element.payload.doc.data());

          this.products.push({

            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })

      });

    });
  }
  deleteRecord(id: string){
    this._productsService.deleteRecord(id).then(() => {
      console.log('Producto eliminado');
    }).catch(error => {
      console.log(error);
    });
  }

}
