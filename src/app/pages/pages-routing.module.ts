import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index9Component } from './index9/index9.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'DigiPro',
        pathMatch: 'full'
    },
    {
        path: 'DigiPro',
        component: Index9Component
    },  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
