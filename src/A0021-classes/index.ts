class Empresa {
  public readonly nome: string = 'Luiz'; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/001-11');
const colaborador1 = new Colaborador('Bianca', 'Caetano');
const colaborador2 = new Colaborador('Gabriel', 'Saraiva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);

console.log(empresa1);
