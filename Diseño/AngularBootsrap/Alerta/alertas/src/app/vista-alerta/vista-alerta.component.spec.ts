import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAlertaComponent } from './vista-alerta.component';

describe('VistaAlertaComponent', () => {
  let component: VistaAlertaComponent;
  let fixture: ComponentFixture<VistaAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaAlertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
