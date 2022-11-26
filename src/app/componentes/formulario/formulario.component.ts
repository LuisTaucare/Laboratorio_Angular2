import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    Formulario:any;
  constructor(private fb:FormBuilder, private serviceFormulario: 
    FormularioService) { }

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      campo1:['',[Validators.required]],
      campo2:[''],

    });
  }
  get formularioReactivo(){
    return this.Formulario.controls;
}

botonEnviar(){
  this.serviceFormulario.crear_datosFormulario(this.formularioReactivo.value).subscribe(
    (response:any)=>{
      if(response.registro){
        alert("datos guardados exitosamente");
        console.log(response)
      }else{
        alert("datos no registrados");
      }
    },
        error=>{
          alert("error al registrar");
    
    }
  )

}

};

