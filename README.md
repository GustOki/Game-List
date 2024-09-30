# Game List

Este é um projeto simples em React que exibe uma lista de jogos, com filtragem de jogos com base no ano de lançamento. O projeto também inclui um formulário de contato e uma mensagem inspiradora de algum jogo famoso.

Caso queira acessar o site ativo, acesse o link: https://game-list-sigma.vercel.app

## Funcionalidades

### 1. **Exibição de Games Favoritos**
   - A aplicação exibe uma lista de jogos que inclui título, imagem e ano de lançamento.
   - O usuário pode filtrar os jogos com base no ano de lançamento inserindo um valor no campo de filtro.

### 2. **Filtragem de Games**
   - O componente `Games` permite que o usuário filtre os jogos inserindo um ano específico.
   - Apenas jogos lançados até o ano fornecido serão exibidos.
   - Se nenhum jogo corresponder ao critério de filtro, uma mensagem "Nenhum game encontrado" será exibida.

### 3. **Mensagem do Dia**
   - Uma mensagem personalizada é exibida na seção de mensagem.
   - A cor do texto da mensagem pode ser personalizada dinamicamente via `props`.

### 4. **Formulário de Contato**
   - O formulário coleta o nome e o email do usuário.
   - Um botão de envio está presente, mas a funcionalidade completa de envio ainda não foi implementada.

### 5. **Saudação Personalizada**
   - A saudação exibida no cabeçalho é personalizada com o nome "gamer" ou o nome passado como `props`.

### 6. **Design Responsivo**
   - A aplicação foi construída com um design responsivo usando CSS, sendo facilmente adaptável para diferentes tamanhos de tela.

## Estrutura de Componentes

A aplicação foi dividida nos seguintes componentes:

1. **`App.js`**: O componente raiz que monta a estrutura principal da aplicação, incluindo o header, lista de games, mensagens, formulário de contato e footer.

2. **`Header.js`**: Componente que renderiza o cabeçalho da aplicação e uma saudação personalizada com base no nome passado como `prop`.

3. **`Saudacao.js`**: Componente que exibe uma saudação dinâmica. Se nenhum nome for fornecido, o nome padrão será "usuário".

4. **`Mensagem.js`**: Componente que exibe uma mensagem do dia com uma cor de texto customizável via `props`.

5. **`Games.js`**: Componente responsável por renderizar uma lista de jogos e permitir filtrá-los por ano de lançamento.

6. **`Game.js`**: Componente que representa um item da lista de jogos. Exibe a imagem, nome e ano de lançamento de um jogo.

7. **`Form.js`**: Componente que renderiza o formulário de contato, permitindo ao usuário inserir seu nome e email.

8. **`FormInput.js`**: Um subcomponente que encapsula os campos de entrada de texto e email.

9. **`Button.js`**: Componente que encapsula o botão de envio do formulário.

10. **`Footer.js`**: Componente que renderiza o rodapé da página.

## Como rodar o projeto na sua máquina

Siga as instruções abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js instalado. Caso não tenha, [instale aqui](https://nodejs.org/).

### Passos

1. Clone o repositório:
   ```
   bash git clone https://github.com/usuario/Game-List.git

2. Entre no diretório do projeto:
    ``` 
    cd Game-List

3. Instale as dependências:
    ```
    npm install

4. Inicie a aplicação:
    ```
    npm start

5. Inicialize seu navegador e acesse:
    http://localhost:3000

### ATENÇÃO!

Certifique-se de que você tenha o Node.js e o npm instalados em sua máquina para executar o projeto corretamente.