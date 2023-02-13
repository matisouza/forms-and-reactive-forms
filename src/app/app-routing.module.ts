import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren:() => import('./reactive-form/reactive-form.module').then(m=> m.ReactiveFormModule),
  },
  {
    path: 'no-reactive',
    loadChildren:() => import('./form/form.module').then(m=> m.FormModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
