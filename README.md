# Multi Listas

O **Multi Listas** é uma aplicação web para criar e organizar múltiplas listas de compras de forma simples. Cada lista pode reunir diversos produtos, permitindo acompanhar os itens que já foram comprados e manter diferentes compras separadas.

O projeto foi desenvolvido para praticar conceitos de React, como componentização, gerenciamento de estado, rotas e persistência de dados no navegador.

## Funcionalidades

- Criar listas de compras personalizadas
- Adicionar e remover produtos
- Visualizar todas as listas cadastradas
- Acessar os detalhes de uma lista
- Marcar e desmarcar produtos como comprados
- Excluir listas completas
- Salvar os dados no `localStorage`

## Tecnologias utilizadas

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- UUID

## Como executar

Clone o repositório:

```bash
git clone https://github.com/donysvaquino/multi-listas.git
```

Entre na pasta do projeto e instale as dependências:

```bash
cd multi-listas
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no terminal.

## Armazenamento dos dados

As listas são armazenadas no `localStorage` do navegador. Isso permite que os dados continuem disponíveis após atualizar ou fechar a página, sem a necessidade de um servidor ou banco de dados.

> Como o armazenamento é local, as listas ficam disponíveis somente no navegador e dispositivo em que foram criadas.

## Status

Projeto em desenvolvimento.

## Autor

Desenvolvido por [Dony Silva](https://github.com/donysvaquino).
