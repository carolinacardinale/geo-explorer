const trilhas = require('../data/trilhas.json');

function normalizarTexto(valor = '') {
  return String(valor).trim().toLowerCase();
}

function obterTrilha(tecnologia) {
  const chave = normalizarTexto(tecnologia);
  return trilhas[chave] || null;
}

function listarTecnologias() {
  return Object.entries(trilhas).map(([chave, trilha]) => ({
    chave,
    nome: trilha.nome
  }));
}

module.exports = {
  normalizarTexto,
  obterTrilha,
  listarTecnologias
};
