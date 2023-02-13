import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';



@NgModule({
  declarations: [
    BasicComponent,
    DinamicComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoutingModule,
  ]
})
export class ReactiveFormModule { }
