import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent {
  myForm: FormGroup = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(5)]],
    price: [, [Validators.required, Validators.minLength(0)]],

  });


  constructor(private fb: FormBuilder) {}


  guardar() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
