import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  productos!: Producto[];
  constructor(private productsService: ProductosService) {
    this.productos = [{
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
      this.productos = products;
    });
  }

}
