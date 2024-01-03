import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoViewComponent } from './projeto-view.component';

describe('ProjetoViewComponent', () => {
  let component: ProjetoViewComponent;
  let fixture: ComponentFixture<ProjetoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetoViewComponent]
    });
    fixture = TestBed.createComponent(ProjetoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
