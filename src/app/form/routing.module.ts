import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicComponent },
      { path: 'dinamic', component: DinamicComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class RoutingModule { }
