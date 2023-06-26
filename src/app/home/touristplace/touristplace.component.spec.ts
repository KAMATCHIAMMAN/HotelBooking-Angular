import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristplaceComponent } from './touristplace.component';

describe('TouristplaceComponent', () => {
  let component: TouristplaceComponent;
  let fixture: ComponentFixture<TouristplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristplaceComponent]
    });
    fixture = TestBed.createComponent(TouristplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
