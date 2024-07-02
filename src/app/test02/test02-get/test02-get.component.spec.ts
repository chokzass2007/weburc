import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test02GetComponent } from './test02-get.component';

describe('Test02GetComponent', () => {
  let component: Test02GetComponent;
  let fixture: ComponentFixture<Test02GetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test02GetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test02GetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
