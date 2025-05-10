export type Usuario = {
  nome: string;
  idade: number;
  genero: "Homem" | "Mulher";
  dataCadastro: string;
  horaCadastro: string;
  tempoAtivo: string;
  tipoUsuario: string;
  status: "Ativo" | "Inativo";
  email: string;
  cpf: string;
  rg: string;
  telefone: string;
  zap: boolean;
};