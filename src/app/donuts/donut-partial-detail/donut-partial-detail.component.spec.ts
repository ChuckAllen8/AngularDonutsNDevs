import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutPartialDetailComponent } from './donut-partial-detail.component';

describe('DonutPartialDetailComponent', () => {
  let component: DonutPartialDetailComponent;
  let fixture: ComponentFixture<DonutPartialDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutPartialDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutPartialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
