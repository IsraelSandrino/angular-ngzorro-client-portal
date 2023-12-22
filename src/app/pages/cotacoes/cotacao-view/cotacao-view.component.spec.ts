import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoViewComponent } from './cotacao-view.component';

describe('CotacaoViewComponent', () => {
  let component: CotacaoViewComponent;
  let fixture: ComponentFixture<CotacaoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotacaoViewComponent]
    });
    fixture = TestBed.createComponent(CotacaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
