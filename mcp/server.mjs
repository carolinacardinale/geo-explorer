import { createRequire } from 'node:module';
import { McpServer } from '@modelcontextprotocol/server';
import { serveStdio } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';

const require = createRequire(import.meta.url);
const { gerarTrilha } = require('../src/trilha');
const { gerarDesafio } = require('../src/desafio');
const { gerarCertificado } = require('../src/certificado');
const { listarTecnologias } = require('../src/utils');

function resultadoTexto(texto) {
  return {
    content: [{ type: 'text', text: texto }]
  };
}

function resultadoErro(erro) {
  return {
    content: [{ type: 'text', text: `Erro: ${erro.message}` }],
    isError: true
  };
}

function criarServidor() {
  const server = new McpServer({
    name: 'geo-explorer',
    version: '1.0.0'
  });

  server.registerTool(
    'consultar_trilha',
    {
      description: 'Apresenta a trilha de aprendizagem de uma tecnologia cadastrada no Geo-Explorer.',
      inputSchema: z.object({
        tecnologia: z.string().describe('Chave da tecnologia, por exemplo: javascript, python, html-css ou react')
      })
    },
    async ({ tecnologia }) => {
      try {
        return resultadoTexto(gerarTrilha(tecnologia));
      } catch (erro) {
        return resultadoErro(erro);
      }
    }
  );

  server.registerTool(
    'gerar_desafio',
    {
      description: 'Gera um desafio de programação de acordo com a tecnologia e o nível informados.',
      inputSchema: z.object({
        tecnologia: z.string().describe('Tecnologia cadastrada no Geo-Explorer'),
        nivel: z.enum(['iniciante', 'intermediario']).describe('Nível do desafio')
      })
    },
    async ({ tecnologia, nivel }) => {
      try {
        return resultadoTexto(gerarDesafio(tecnologia, nivel));
      } catch (erro) {
        return resultadoErro(erro);
      }
    }
  );

  server.registerTool(
    'gerar_certificado',
    {
      description: 'Gera um certificado fictício para uma trilha concluída.',
      inputSchema: z.object({
        tecnologia: z.string().describe('Tecnologia da trilha concluída'),
        nome: z.string().min(1).describe('Nome que aparecerá no certificado')
      })
    },
    async ({ tecnologia, nome }) => {
      try {
        return resultadoTexto(gerarCertificado(tecnologia, nome));
      } catch (erro) {
        return resultadoErro(erro);
      }
    }
  );

  server.registerTool(
    'listar_tecnologias',
    {
      description: 'Lista as tecnologias disponíveis na base fictícia do Geo-Explorer.'
    },
    async () => {
      const texto = listarTecnologias()
        .map((item) => `- ${item.nome} (${item.chave})`)
        .join('\n');

      return resultadoTexto(`Tecnologias disponíveis:\n\n${texto}`);
    }
  );

  return server;
}

void serveStdio(criarServidor);
console.error('Geo-Explorer MCP server em execução via stdio.');
