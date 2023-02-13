import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
})
export class DinamicComponent {
  myForm: FormGroup = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(5)]],
    price: [, [Validators.required, Validators.minLength(0)]],
    colors: this.fb.array([
      ['', [Validators.required]],
    ]),
    objetColor: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      id: ['', [Validators.required, Validators.minLength(5)]]

    }),
    arrColorsGroup: this.fb.array([
      this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        id: ['', [Validators.required, Validators.minLength(5)]]
      })
    ]),
  });

  newColors: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) { }

  get getColors() {
    return this.myForm.get('colors') as FormArray;
  }

  addColors() {
    this.getColors.push(this.fb.control(this.newColors.value, Validators.required))
    this.newColors.reset();
  }

  guardar() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
  guardar2() {
    // getRawValue te devuelve el formulario con todos los valores.
    console.log(this.myForm.getRawValue());
  }

  borrar(i: number) {
    this.getColors.removeAt(i);
  }


}
