# Jogo do Número Secreto

Este é um projeto desenvolvido como parte do **Programa ONE - Oracle Next Education** em parceria com a **Alura**, no curso de **Lógica de Programação: explore funções e listas**.

O jogo do número secreto utiliza **JavaScript** para gerar um número aleatório e desafiar o jogador a adivinhar qual é o número secreto. Após cada palpite, o jogador recebe dicas se o número secreto é maior ou menor que o número inserido.

## Funcionalidades

- O número secreto é gerado aleatoriamente a cada rodada.
- O jogador tem que adivinhar o número secreto, que pode ser de 1 a 10.
- Após cada tentativa incorreta, o sistema informa se o número secreto é maior ou menor que o palpite.
- O jogo evita a repetição de números já sorteados.
- Ao acertar o número, o sistema informa em quantas tentativas o jogador descobriu o número secreto.

## Tecnologias Utilizadas

- **HTML5** para a estrutura do jogo.
- **CSS3** para estilização do layout.
- **JavaScript** para a lógica do jogo.

## Acesso ao Jogo

Você pode acessar e jogar o "Jogo do Número Secreto" diretamente clicando no link abaixo:

👉 [Jogar Jogo do Número Secreto](https://elisirons.github.io/jogoNumeroSecreto/)


## Testes Automatizados

Este projeto possui testes automatizados para verificar o funcionamento correto da aplicação. Os testes estão implementados tanto com **Selenium WebDriver** quanto com **Playwright**.

### Detalhes dos Testes

- Os testes simulam interações com o jogo, como inserir um número inválido e verificar se a mensagem de erro é exibida corretamente.

### Estrutura dos Testes

Os testes estão localizados na pasta `testes/` e consistem em dois arquivos:

- `jogoNumeroSecreto.spec.js`: Teste com **Selenium WebDriver**.
- `erroTest.js`: Teste com **Playwright**.

### Ferramentas Utilizadas

- **Mocha**: Framework de testes utilizado para organizar e executar os testes.
- **Selenium WebDriver**: Para automação dos testes funcionais com o navegador Chrome.
- **Playwright**: Para automação de testes com suporte a múltiplos navegadores.

### Como Executar os Testes

#### Requisitos

- Node.js instalado.
- Navegador Google Chrome (necessário para o Selenium WebDriver).

#### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/elisirons/jogoNumeroSecreto.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd jogoNumeroSecreto
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Execute os testes automatizados:

  Para rodar todos os testes de uma vez (Playwright e Selenium), utilize o comando:

```bash
npm test
```

### Como Executar Testes Específicos

Se você quiser rodar apenas os testes de **Playwright** ou **Selenium**, siga os comandos abaixo:

- Para rodar apenas os testes de **Playwright**:

  ```bash
  npm run test:playwright
  ```

- Para rodar apenas os testes de **Selenium WebDriver**:

  ```bash
  npm run test:selenium
  ```


