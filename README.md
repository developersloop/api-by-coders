## Instalação
Para começar, o comando abaixo deve ser executado na raiz do projeto, após a clonagem do repositório:

```bash
yarn install
```
ou 

```bash
npm install
```

## Inicializar servidor

```bash
npm run dev
```

## Inicializando Api Mock

```bash
json-server --watch db.json
```

### Padrão de commit
Para garantir clareza e rastreabilidade das alterações feitas no projeto, seguimos as especificações descritas em `Commits convencionais`:
https://www.conventionalcommits.org/en/v1.0.0

Exemplos:
- `feat`: permitir que o objeto de configuração fornecido estenda outras configurações
- `chore!`: remover suporte para o Node 6
- `docs`: corrigir erros de ortografia em CHANGELOG

### Git Flow
Para simplificar o desenvolvimento e a colaboração no repositório, seguimos o fluxo de trabalho do git-flow:
https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

Principais branches:
- `main`
- `release/<version>`
- `develop`
- `feature/<developer>`

### Observacoes
Não há presença de banco de dados, então foi utilizado a solução abaixo, para mocar um comportamento de api. Os endpoints criados nessa api estao consumindo essa `api mocada.`

Solução para api mocada
- `https://www.npmjs.com/package/json-server`