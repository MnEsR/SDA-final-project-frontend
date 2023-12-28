import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalActvityComponent } from './environmental-actvity.component';

describe('EnvironmentalActvityComponent', () => {
  let component: EnvironmentalActvityComponent;
  let fixture: ComponentFixture<EnvironmentalActvityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalActvityComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalActvityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
