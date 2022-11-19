import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    Formulario:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:''

    });
  }
  get formularioReactivo(){
    return this.Formulario.controls;
}

botonEnviar(){
  console.log(this.Formulario.value)
}

}
