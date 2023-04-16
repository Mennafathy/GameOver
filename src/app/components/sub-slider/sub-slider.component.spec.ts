import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSliderComponent } from './sub-slider.component';

describe('SubSliderComponent', () => {
  let component: SubSliderComponent;
  let fixture: ComponentFixture<SubSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
