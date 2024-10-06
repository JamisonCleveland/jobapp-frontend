import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugFormStatusComponent } from './form-debug.component';

describe('FormDebugComponent', () => {
  let component: DebugFormStatusComponent;
  let fixture: ComponentFixture<DebugFormStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugFormStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugFormStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
