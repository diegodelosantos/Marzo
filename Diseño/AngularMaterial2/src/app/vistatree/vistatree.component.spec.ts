import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistatreeComponent } from './vistatree.component';

describe('VistatreeComponent', () => {
  let component: VistatreeComponent;
  let fixture: ComponentFixture<VistatreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistatreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistatreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
