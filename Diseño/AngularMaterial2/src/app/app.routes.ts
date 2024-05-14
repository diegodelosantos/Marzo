import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { FormComponent } from './form/form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { GlobalComponent } from './global/global.component';

export const routes: Routes = [    
    {
    path: "Form",
    component: FormComponent
    },
    {
    path: "Dashboard",
    component: DashboardComponent
    },
    {
    path: "Drag-drop",
    component: DragDropComponent
    },
    {
    path: "table",
    component: TableComponent
    },
    {
    path: "tree",
    component: TreeComponent
    },
    {
    path:"global",
    component: GlobalComponent
    }
];
