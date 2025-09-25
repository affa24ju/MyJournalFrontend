import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeText } from './welcome-text';

describe('WelcomeText', () => {
  let component: WelcomeText;
  let fixture: ComponentFixture<WelcomeText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
