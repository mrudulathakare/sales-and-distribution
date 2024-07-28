import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByOrderComponent } from './sales-by-order.component';

describe('SalesByOrderComponent', () => {
  let component: SalesByOrderComponent;
  let fixture: ComponentFixture<SalesByOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
