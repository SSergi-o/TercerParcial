import { Component, OnInit } from '@angular/core';
//import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {MatCardModule} from '@angular/material/card';

import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Producto[];
  constructor(private productsService: ProductosService) {
    this.products = [{
      id:1,
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      price: 0,
      artist: 'Prueba',
      genero: 'Prueba',
      image: (''),
    }];

  }

  ngOnInit(): void {
    this.productsService.getRecords().subscribe(products => {
      this.products = products;
    });
  }

}
