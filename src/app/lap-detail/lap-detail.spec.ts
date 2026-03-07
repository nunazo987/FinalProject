import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapDetail } from './lap-detail';

describe('LapDetail', () => {
  let component: LapDetail;
  let fixture: ComponentFixture<LapDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LapDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(LapDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
