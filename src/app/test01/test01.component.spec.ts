import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test01Component } from './test01.component';

describe('Test01Component', () => {
  let component: Test01Component;
  let fixture: ComponentFixture<Test01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
