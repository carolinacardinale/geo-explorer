const { obterTrilha } = require('./utils');

function gerarTrilha(tecnologia) {
  const trilha = obterTrilha(tecnologia);

  if (!trilha) {
    throw new Error(`Tecnologia não encontrada: ${tecnologia}`);
  }

  const modulos = trilha.modulos
    .map((modulo, indice) => `${indice + 1}. ${modulo}`)
    .join('\n');

  return [
    `Trilha: ${trilha.nome}`,
    '',
    `Nível sugerido: ${trilha.nivel}`,
    `Carga horária fictícia: ${trilha.cargaHoraria} horas`,
    '',
    'Módulos:',
    modulos
  ].join('\n');
}

module.exports = { gerarTrilha };
