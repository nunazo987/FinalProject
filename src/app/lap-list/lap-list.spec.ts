import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapList } from './lap-list';

describe('LapList', () => {
  let component: LapList;
  let fixture: ComponentFixture<LapList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LapList],
    }).compileComponents();

    fixture = TestBed.createComponent(LapList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
