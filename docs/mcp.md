# Servidor MCP do Geo-Explorer

O Geo-Explorer possui um servidor MCP local que expõe as funcionalidades principais do projeto como ferramentas para agentes compatíveis com o Model Context Protocol.

## Requisitos

- Node.js 20 ou superior
- Dependências instaladas com `npm install`

## Executando o servidor

```bash
npm run mcp
```

O servidor usa transporte `stdio`, indicado para integrações locais em que o cliente inicia o processo MCP e se comunica pela entrada e saída padrão.

## Ferramentas disponíveis

### consultar_trilha

Recebe uma tecnologia e retorna a trilha correspondente.

Exemplo de entrada:

```json
{
  "tecnologia": "javascript"
}
```

### gerar_desafio

Recebe tecnologia e nível e retorna um desafio de programação.

```json
{
  "tecnologia": "python",
  "nivel": "iniciante"
}
```

### gerar_certificado

Gera um certificado fictício para uma trilha concluída.

```json
{
  "tecnologia": "javascript",
  "nome": "Carolina Cardinale"
}
```

### listar_tecnologias

Não exige parâmetros e retorna todas as tecnologias cadastradas.

## Observação de segurança

O servidor não precisa de senhas, tokens ou chaves de API para funcionar. Informações privadas não devem ser incluídas no repositório.
