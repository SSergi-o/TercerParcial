import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  public form: FormGroup;

  constructor(private router:Router) {
  this.form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
});
  }
  login(){
    if(this.form.value.userName == 'admin' && this.form.value.password == 'admin'){
      alert('Bienvenido');
      this.router.navigate(['/panel-admin']);

    console.log(this.form.value);

  }
}
  ngOnInit(): void {
  }

}
