import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaViewComponent } from './fatura-view.component';

describe('FaturaViewComponent', () => {
  let component: FaturaViewComponent;
  let fixture: ComponentFixture<FaturaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaturaViewComponent]
    });
    fixture = TestBed.createComponent(FaturaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
