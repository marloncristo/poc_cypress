Projeto para verificar framework cypress para preenchimento de um formulário de cadastros, utilizando pageobjects

# criando projeto node
npm init --y

# instalando cypress
npm install cypress --save-dev

# criando script para executar teste no package.json
"cypress:open": "cypress open"

# executando test
npm run cypress open

# dependencia para upload de arquivos
npm install --save-dev cypress-file-upload

# notes
# pontos positivos

recarrega o teste quando salva o arquivo no code
relatório de erros
não precisei fazer browser.move para digitar nos campos
anexo funciona se instalar uma dependencia (npm install --save-dev cypress-file-upload)


# pontos negativos
falta de screenshot quando ocorre erro (possivel que criando um metodo resolva)
remoção de screenshot a cada test (possivel tratar via metodo)

# pendente implementar
- estratégia de css selector em select
- módulo com tratamento para massa de dados

-- arquivo cypress.json pode ser usado para tratar variaveis de ambiente como a base url
-- na pasta support podem ser criadas classes de helpers ou page objects
-- pasta integration ficam as specs

