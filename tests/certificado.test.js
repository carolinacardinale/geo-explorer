const { gerarCertificado } = require('../src/certificado');

describe('gerarCertificado', () => {
  test('gera certificado com nome e trilha', () => {
    const resultado = gerarCertificado('javascript', 'Carolina Cardinale');

    expect(resultado).toContain('Carolina Cardinale');
    expect(resultado).toContain('JavaScript');
    expect(resultado).toContain('CERTIFICADO GEO-EXPLORER');
  });

  test('exige nome da pessoa', () => {
    expect(() => gerarCertificado('javascript', '')).toThrow('Informe o nome');
  });
});
