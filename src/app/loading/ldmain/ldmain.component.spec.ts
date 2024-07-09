import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LDmainComponent } from './ldmain.component';

describe('LDmainComponent', () => {
  let component: LDmainComponent;
  let fixture: ComponentFixture<LDmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LDmainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LDmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
