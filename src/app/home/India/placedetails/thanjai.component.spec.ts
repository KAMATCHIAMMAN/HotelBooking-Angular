import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanjaiComponent } from './thanjai.component';

describe('ThanjaiComponent', () => {
  let component: ThanjaiComponent;
  let fixture: ComponentFixture<ThanjaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanjaiComponent]
    });
    fixture = TestBed.createComponent(ThanjaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
