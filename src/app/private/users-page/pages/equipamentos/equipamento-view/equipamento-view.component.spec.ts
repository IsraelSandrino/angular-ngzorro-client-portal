import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoViewComponent } from './equipamento-view.component';

describe('EquipamentoViewComponent', () => {
  let component: EquipamentoViewComponent;
  let fixture: ComponentFixture<EquipamentoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipamentoViewComponent]
    });
    fixture = TestBed.createComponent(EquipamentoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
