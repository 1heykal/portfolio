import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { combineLatest } from 'rxjs';
import { MainComponent } from './components/main/main.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, children: [
    { path: '', component: MainComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


