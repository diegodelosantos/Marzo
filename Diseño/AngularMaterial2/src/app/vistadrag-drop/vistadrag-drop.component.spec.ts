import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadragDropComponent } from './vistadrag-drop.component';

describe('VistadragDropComponent', () => {
  let component: VistadragDropComponent;
  let fixture: ComponentFixture<VistadragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistadragDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistadragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
