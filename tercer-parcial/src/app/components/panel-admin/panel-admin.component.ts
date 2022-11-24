import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productsService: ProductosService) {
   /* this.productos = [{
      id:0,
      name: '',
      description: '',
      price: 0,
      artist: '',
      genero: '',
      image: (''),
    }];*/
  }

  ngOnInit(): void {
    /*this.productsService.getRecords().subscribe(products => {
      this.productos = products;
    });*/
    this.getRecords();
  }
  getRecords(){
    this.productsService.getRecords().subscribe(data => {
      //this.products = products;
      data.forEach((element:any) => {
          console.log(element.payload.doc.data());
          this.productos.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
      });

    });
  }

}
