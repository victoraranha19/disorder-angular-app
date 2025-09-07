import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { UsuariosService } from '../usuarios.service';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let router: jasmine.SpyObj<Router>;
  let usuariosSSpy: jasmine.SpyObj<UsuariosService>;

  const executeGuard: CanActivateFn = (...guardParameters) => TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);

    usuariosSSpy = jasmine.createSpyObj('UsuariosService', ['isUsuarioLogado']);
    usuariosSSpy.isUsuarioLogado.and.returnValue(true);

    TestBed.configureTestingModule({
      providers: [authGuard, { provide: Router, useValue: router }, { provide: UsuariosService, useValue: usuariosSSpy }],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
