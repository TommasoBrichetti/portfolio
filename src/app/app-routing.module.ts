import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenzeComponent } from './competenze/competenze.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'',
    component: HeaderComponent
  },
  {
    path:'competenze',
    component: CompetenzeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
