import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapForm } from './lap-form';

describe('LapForm', () => {
  let component: LapForm;
  let fixture: ComponentFixture<LapForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LapForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LapForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
