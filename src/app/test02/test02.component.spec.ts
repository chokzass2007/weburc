import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test02Component } from './test02.component';

describe('Test02Component', () => {
  let component: Test02Component;
  let fixture: ComponentFixture<Test02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
