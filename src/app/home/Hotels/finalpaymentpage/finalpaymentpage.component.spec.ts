import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpaymentpageComponent } from './finalpaymentpage.component';

describe('FinalpaymentpageComponent', () => {
  let component: FinalpaymentpageComponent;
  let fixture: ComponentFixture<FinalpaymentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalpaymentpageComponent]
    });
    fixture = TestBed.createComponent(FinalpaymentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
