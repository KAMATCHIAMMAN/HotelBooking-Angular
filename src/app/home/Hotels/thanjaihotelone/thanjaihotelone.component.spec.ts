import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanjaihoteloneComponent } from './thanjaihotelone.component';

describe('ThanjaihoteloneComponent', () => {
  let component: ThanjaihoteloneComponent;
  let fixture: ComponentFixture<ThanjaihoteloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanjaihoteloneComponent]
    });
    fixture = TestBed.createComponent(ThanjaihoteloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
