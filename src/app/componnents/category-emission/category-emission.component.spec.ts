import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEmissionComponent } from './category-emission.component';

describe('CategoryEmissionComponent', () => {
  let component: CategoryEmissionComponent;
  let fixture: ComponentFixture<CategoryEmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryEmissionComponent]
    });
    fixture = TestBed.createComponent(CategoryEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
