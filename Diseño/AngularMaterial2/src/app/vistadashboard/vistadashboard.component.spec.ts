import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadashboardComponent } from './vistadashboard.component';

describe('VistadashboardComponent', () => {
  let component: VistadashboardComponent;
  let fixture: ComponentFixture<VistadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistadashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
