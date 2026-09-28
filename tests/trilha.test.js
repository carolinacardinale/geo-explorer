const { gerarTrilha } = require('../src/trilha');

describe('gerarTrilha', () => {
  test('gera uma trilha válida para JavaScript', () => {
    const resultado = gerarTrilha('javascript');

    expect(resultado).toContain('Trilha: JavaScript');
    expect(resultado).toContain('Módulos:');
    expect(resultado).toContain('Funções');
  });

  test('gera erro para tecnologia inexistente', () => {
    expect(() => gerarTrilha('cobol')).toThrow('Tecnologia não encontrada');
  });
});
