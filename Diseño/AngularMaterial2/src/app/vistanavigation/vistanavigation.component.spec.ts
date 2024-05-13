import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistanavigationComponent } from './vistanavigation.component';

describe('VistanavigationComponent', () => {
  let component: VistanavigationComponent;
  let fixture: ComponentFixture<VistanavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistanavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistanavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
