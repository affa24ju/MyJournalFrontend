import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalHistory } from './journal-history';

describe('JournalHistory', () => {
  let component: JournalHistory;
  let fixture: ComponentFixture<JournalHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
