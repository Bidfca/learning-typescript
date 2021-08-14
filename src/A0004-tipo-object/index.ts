const objetoA: {
  chaveA: string;
  readonly chaveB: string;
  [key: string]: unknown;
} = { chaveA: 'ValorA', chaveB: 'ValorB' };

objetoA.chaveA = 'Novo valor';
// objetoA.chaveB = 'Novo valor';
objetoA.chaveD = 'Nova chave';
