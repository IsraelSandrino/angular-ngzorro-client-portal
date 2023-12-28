import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoViewComponent } from './contrato-view.component';

describe('ContratoViewComponent', () => {
  let component: ContratoViewComponent;
  let fixture: ComponentFixture<ContratoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratoViewComponent]
    });
    fixture = TestBed.createComponent(ContratoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
