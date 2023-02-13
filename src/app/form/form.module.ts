import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    BasicComponent,
    DinamicComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
  ]
})
export class FormModule { }
