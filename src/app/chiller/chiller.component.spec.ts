import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillerComponent } from './chiller.component';

describe('ChillerComponent', () => {
  let component: ChillerComponent;
  let fixture: ComponentFixture<ChillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChillerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
