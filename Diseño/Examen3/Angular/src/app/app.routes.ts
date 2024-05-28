import { Routes } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';

export const routes: Routes = [
    {
        path: "Drag",
        component: Vista1Component
    },

    {
        path: "Formulario",
        component: Vista2Component
    }
];
