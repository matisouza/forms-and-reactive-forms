import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent{

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    email: '',
    password: ''
  }

  constructor() { }

  guardar() {
    // console.log( this.miFormulario );
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });

    
  }

}
