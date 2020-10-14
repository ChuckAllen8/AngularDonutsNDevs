import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPersonComponent } from './famous-person.component';

describe('FamousPersonComponent', () => {
  let component: FamousPersonComponent;
  let fixture: ComponentFixture<FamousPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
