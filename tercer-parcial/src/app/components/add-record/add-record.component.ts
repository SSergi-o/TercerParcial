import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  public formulario : FormGroup;
  id: string | null;
  titulo = 'Agregar Disco';
  constructor(
    private productoService: ProductosService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      artist: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      duracion: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
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
    this.esEditar();
  }
  /*async onSubmit() {
    const price = this.formulario.value.price;
    console.log(this.formulario.value);
    const response =  await this.productoService.addProduct(this.formulario.value);
    console.log(response);
    console.log(price);
  }*/

  submitRecord(){
    if(this.id === null){
      this.agregarDisco();
    }else{
      this.editarDisco(this.id);
    }

  }
  agregarDisco(){
    const product: any = {

      name: this.formulario.value.name,
      artist: this.formulario.value.artist,
      genero: this.formulario.value.genero,
      duracion: this.formulario.value.duracion,
      price: this.formulario.value.price,
      description: this.formulario.value.description,
      fechaCreacion : new Date(),
      fechaModificacion : new Date()
    }
    this.productoService.addRecord(product).then
    (() => {
      console.log('Producto agregado');
      this.formulario.reset();
    }
    ).catch(error => {
      console.log(error);
    }
    );
  }
  esEditar(){

    this.titulo = 'Editar Disco';
    if(this.id !== null){

      this.productoService.getRecord(this.id).subscribe(data => {
        console.log(data);
        //console.log(data.payload.data()['name']);
        this.formulario.setValue({
          name: data.payload.data()['name'],
          artist: data.payload.data()['artist'],
          genero: data.payload.data()['genero'],
          duracion: data.payload.data()['duracion'],
          price: data.payload.data()['price'],
          description: data.payload.data()['description'],
        });
    })

  }


}
  editarDisco(id: string){
    const product: any = {

      name: this.formulario.value.name,
      artist: this.formulario.value.artist,
      genero: this.formulario.value.genero,
      duracion: this.formulario.value.duracion,
      price: this.formulario.value.price,
      description: this.formulario.value.description,
      fechaCreacion : new Date(),
      fechaModificacion : new Date()
    }
    this.productoService.updateRecord(id, product).then(() => {
      console.log('Producto editado');
      this.router.navigate(['/panel-admin']);
    }
    ).catch(error => {
      console.log(error);
    });

}
}
