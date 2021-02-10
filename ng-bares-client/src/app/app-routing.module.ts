import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarEditComponent } from './bar-edit/bar-edit.component';
import {BarNewComponent} from './bar-new/bar-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'bars/:id/new', component: BarNewComponent},
    {path: 'bars/:barId', component: BarDetailComponent},
    {path: 'bars/:id/edit', component: BarEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
