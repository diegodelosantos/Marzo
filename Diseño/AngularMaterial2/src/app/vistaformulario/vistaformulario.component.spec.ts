import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaformularioComponent } from './vistaformulario.component';

describe('VistaformularioComponent', () => {
  let component: VistaformularioComponent;
  let fixture: ComponentFixture<VistaformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaformularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
