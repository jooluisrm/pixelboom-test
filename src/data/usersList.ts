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

export const usuarios: Usuario[] = [
  {
    nome: "José Ricardo Gomes",
    idade: 51,
    genero: "Homem",
    dataCadastro: "22/03/2025",
    horaCadastro: "10:21am",
    tempoAtivo: "38m22s",
    tipoUsuario: "Usuário padrão",
    status: "Ativo",
    email: "jose.ricardo.gomes@email.com",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    telefone: "(11) 91234-5678",
    zap: true
  },
  {
    nome: "Helena Soares",
    idade: 46,
    genero: "Mulher",
    dataCadastro: "22/03/2025",
    horaCadastro: "10:21am",
    tempoAtivo: "38m22s",
    tipoUsuario: "Usuário padrão",
    status: "Inativo",
    email: "helena.soares@email.com",
    cpf: "234.567.890-11",
    rg: "23.456.789-0",
    telefone: "(21) 92345-6789",
    zap: false
  },
  {
    nome: "Débora Santana",
    idade: 24,
    genero: "Mulher",
    dataCadastro: "22/03/2025",
    horaCadastro: "10:21am",
    tempoAtivo: "38m22s",
    tipoUsuario: "Usuário padrão",
    status: "Inativo",
    email: "debora.santana@email.com",
    cpf: "345.678.901-22",
    rg: "34.567.890-1",
    telefone: "(31) 93456-7890",
    zap: true
  },
  {
    nome: "Lucas Rocha Silveira",
    idade: 31,
    genero: "Homem",
    dataCadastro: "22/03/2025",
    horaCadastro: "10:21am",
    tempoAtivo: "38m22s",
    tipoUsuario: "Usuário padrão",
    status: "Ativo",
    email: "lucas.rocha.silveira@email.com",
    cpf: "456.789.012-33",
    rg: "45.678.901-2",
    telefone: "(41) 94567-8901",
    zap: false
  },
  {
    nome: "Sérgio Arantes",
    idade: 36,
    genero: "Homem",
    dataCadastro: "22/03/2025",
    horaCadastro: "10:21am",
    tempoAtivo: "38m22s",
    tipoUsuario: "Usuário padrão",
    status: "Ativo",
    email: "sergio.arantes@email.com",
    cpf: "567.890.123-44",
    rg: "56.789.012-3",
    telefone: "(51) 95678-9012",
    zap: true
  },
  {
    nome: "Adriano Costa",
    idade: 38,
    genero: "Homem",
    dataCadastro: "22/03/2025",
    horaCadastro: "10:21am",
    tempoAtivo: "38m22s",
    tipoUsuario: "Usuário padrão",
    status: "Ativo",
    email: "adriano.costa@email.com",
    cpf: "678.901.234-55",
    rg: "67.890.123-4",
    telefone: "(61) 96789-0123",
    zap: false
  }
];
