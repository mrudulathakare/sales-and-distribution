import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3ProductsComponent } from './top-3-products.component';

describe('Top3ProductsComponent', () => {
  let component: Top3ProductsComponent;
  let fixture: ComponentFixture<Top3ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top3ProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top3ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
