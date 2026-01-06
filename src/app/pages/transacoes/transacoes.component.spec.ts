import { ComponentFixture, TestBed } from '@angular/core/testing';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { TransacoesComponent } from './transacoes.component';

registerLocaleData(localePt);
describe('TransacoesComponent', () => {
  let component: TransacoesComponent;
  let fixture: ComponentFixture<TransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransacoesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
