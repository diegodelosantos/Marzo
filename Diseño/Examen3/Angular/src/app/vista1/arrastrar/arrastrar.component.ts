import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-arrastrar',
  templateUrl: './arrastrar.component.html',
  styleUrl: './arrastrar.component.scss',
  standalone: true,
  imports: [CdkDrag, CdkDropList]
})
export class ArrastrarComponent {
  despliegue = [
    'Servidor FTP',
    'Servidor DNS',
    'Servidor TOMCAT',
    'Servidor LDAP'
  ];

  disenio = [
    'Componentes',
    'Vistas',
    'Tipografias',
    'Variables'
  ];

  cliente = [
    'JS',
    'Angular',
    'Eventos',
    'Elementos padre e hijo'
  ];

  servidor = [
    'PHP',
    'Symfony',
    'Funciones',
    'Mysql'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
