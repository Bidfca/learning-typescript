const arrayNumeros: Array<number> = [1, 2, 3];

const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 20,
  nome: 'Bianca',
};

function soma(x: number, y: number): number {
  return x + y;
}

const subtracao: (x: number, y: number) => number = (x, y) => x - y;
