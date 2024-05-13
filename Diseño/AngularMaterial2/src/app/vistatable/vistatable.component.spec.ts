import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistatableComponent } from './vistatable.component';

describe('VistatableComponent', () => {
  let component: VistatableComponent;
  let fixture: ComponentFixture<VistatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
