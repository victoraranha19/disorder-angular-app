// export interface IUsuario {
//   id: number;
//   nome: string;
//   email: string;
//   usuario: string;
//   senha: string;
//   ativo: boolean;
// }
export interface IUsuario {
  id: number;
  usuario: string;
  nome_completo: string;
}

export interface ICarteira {
  nome: string;
  contaCorrente: number;
  contaPoupanca: number;
  limiteTotalCredito: number;
  contaInvestimento: number;
}
