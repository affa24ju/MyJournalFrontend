import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBtn } from './register-btn';

describe('RegisterBtn', () => {
  let component: RegisterBtn;
  let fixture: ComponentFixture<RegisterBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
