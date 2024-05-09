import { Routes } from '@angular/router';
import { VistaAlertaComponent } from './vista-alerta/vista-alerta.component';
import { VistaTablaComponent } from './vista-tabla/vista-tabla.component';
import { VistaTarjetaComponent } from './vista-tarjeta/vista-tarjeta.component';

export const routes: Routes = [
    {
        path: "Alerta",
        component: VistaAlertaComponent
    },
    {
        path: "Tabla",
        component: VistaTablaComponent
    },
    {
        path: "Tarjeta",
        component: VistaTarjetaComponent
    }

];
