const { gerarTrilha } = require('./trilha');
const { gerarDesafio } = require('./desafio');
const { gerarCertificado } = require('./certificado');
const { listarTecnologias } = require('./utils');

function mostrarAjuda() {
  return [
    'Geo-Explorer',
    '',
    'Comandos disponíveis:',
    '  node src/index.js trilha <tecnologia>',
    '  node src/index.js desafio <tecnologia> <nivel>',
    '  node src/index.js certificado <tecnologia> <nome>',
    '  node src/index.js tecnologias'
  ].join('\n');
}

function executar(argv = process.argv.slice(2)) {
  const [comando, ...args] = argv;

  switch (comando) {
    case 'trilha':
      return gerarTrilha(args[0]);

    case 'desafio':
      return gerarDesafio(args[0], args[1]);

    case 'certificado':
      return gerarCertificado(args[0], args.slice(1).join(' '));

    case 'tecnologias': {
      const tecnologias = listarTecnologias()
        .map((item) => `- ${item.nome} (${item.chave})`)
        .join('\n');
      return `Tecnologias disponíveis:\n\n${tecnologias}`;
    }

    default:
      return mostrarAjuda();
  }
}

if (require.main === module) {
  try {
    console.log(executar());
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
    process.exitCode = 1;
  }
}

module.exports = { executar, mostrarAjuda };
