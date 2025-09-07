import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let usuariosSSpy: jasmine.SpyObj<UsuariosService>;

  beforeEach(async () => {
    usuariosSSpy = jasmine.createSpyObj('UsuariosService', ['listar', 'logar']);
    usuariosSSpy.listar.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [{ provide: UsuariosService, useValue: usuariosSSpy }, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
