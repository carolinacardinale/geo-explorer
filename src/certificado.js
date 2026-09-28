const { obterTrilha } = require('./utils');

function gerarCertificado(tecnologia, nome) {
  const trilha = obterTrilha(tecnologia);

  if (!trilha) {
    throw new Error(`Tecnologia não encontrada: ${tecnologia}`);
  }

  if (!nome || !String(nome).trim()) {
    throw new Error('Informe o nome da pessoa para gerar o certificado.');
  }

  return [
    '=======================================',
    '',
    '        CERTIFICADO GEO-EXPLORER',
    '',
    'Certificamos que',
    '',
    String(nome).trim(),
    '',
    'concluiu a trilha',
    '',
    trilha.nome,
    '',
    `Carga horária fictícia: ${trilha.cargaHoraria} horas`,
    '',
    '======================================='
  ].join('\n');
}

module.exports = { gerarCertificado };
