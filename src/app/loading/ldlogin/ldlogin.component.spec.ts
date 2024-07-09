import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LDloginComponent } from './ldlogin.component';

describe('LDloginComponent', () => {
  let component: LDloginComponent;
  let fixture: ComponentFixture<LDloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LDloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LDloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
