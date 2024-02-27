import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { combineLatest } from 'rxjs';
import { FightersComponent } from './components/fighters/fighters.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { EngineerComponent } from './components/engineer/engineer.component';
import { WriterComponent } from './components/writer/writer.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'engineer', component: EngineerComponent},
    {path: 'writer', component: WriterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


