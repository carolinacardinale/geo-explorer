const { obterTrilha, normalizarTexto } = require('./utils');

function gerarDesafio(tecnologia, nivel) {
  const trilha = obterTrilha(tecnologia);

  if (!trilha) {
    throw new Error(`Tecnologia não encontrada: ${tecnologia}`);
  }

  const nivelNormalizado = normalizarTexto(nivel);
  const desafios = trilha.desafios[nivelNormalizado];

  if (!desafios || desafios.length === 0) {
    throw new Error(`Nível não disponível para ${trilha.nome}: ${nivel}`);
  }

  const indice = Math.floor(Math.random() * desafios.length);
  const desafio = desafios[indice];

  return [
    `Desafio ${trilha.nome} - ${nivelNormalizado}`,
    '',
    desafio
  ].join('\n');
}

module.exports = { gerarDesafio };
