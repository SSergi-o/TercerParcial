import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  public formulario : FormGroup;
  constructor(
    private productoService: ProductosService
  ) {
    this.formulario = new FormGroup({
      id : new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      artist: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      duracion: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required,Validators.pattern('^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$')]),
      description: new FormControl('', [Validators.required]),
    });
    // this.formulario = this.formBuilder.group({
    //   id : ['', [Validators.required]],
    //   titulo: ['', [Validators.required]],
    //   artista: ['', [Validators.required]],
    //   genero: ['', [Validators.required]],
    //   duracion: ['', [Validators.required]],
    //   precio: ['', [Validators.required]],
    //   description: ['', [Validators.required]],
    // });
  }
  ngOnInit(): void {
  }
  async onSubmit() {
    const price = this.formulario.value.price;
    console.log(this.formulario.value);
    const response =  await this.productoService.addProduct(this.formulario.value);
    console.log(response);
    console.log(price);
  }

}
