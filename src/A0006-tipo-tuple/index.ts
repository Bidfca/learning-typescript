const dadosCliente: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, ...string[]] = [
  1,
  'Luiz',
  'Otávio',
  'Miranda',
];
const dadosCliente3: readonly [number, string] = [1, 'Luiz'];
const array: ReadonlyArray<string> = ['Luiz', 'Otávio'];

dadosCliente.pop(); // Funciona!
// dadosCliente3.pop();
