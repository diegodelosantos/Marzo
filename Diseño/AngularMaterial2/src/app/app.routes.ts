import { Routes } from '@angular/router';
import { VistaformularioComponent } from './vistaformulario/vistaformulario.component';
import { VistadashboardComponent } from './vistadashboard/vistadashboard.component';
import { VistadragDropComponent } from './vistadrag-drop/vistadrag-drop.component';
import { VistatableComponent } from './vistatable/vistatable.component';
import { VistatreeComponent } from './vistatree/vistatree.component';

export const routes: Routes = [    
    {
    path: "Form",
    component: VistaformularioComponent
    },
    {
    path: "Dashboard",
    component: VistadashboardComponent
    },
    {
    path: "Drag-drop",
    component: VistadragDropComponent
    },
    {
    path: "table",
    component: VistatableComponent
    },
    {
    path: "tree",
    component: VistatreeComponent
    }
];
