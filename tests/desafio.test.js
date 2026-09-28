const { gerarDesafio } = require('../src/desafio');

describe('gerarDesafio', () => {
  test('gera um desafio válido', () => {
    const resultado = gerarDesafio('python', 'iniciante');

    expect(resultado).toContain('Desafio Python - iniciante');
  });

  test('gera erro para nível indisponível', () => {
    expect(() => gerarDesafio('python', 'avancado')).toThrow('Nível não disponível');
  });
});
