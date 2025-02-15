
# Quiz Filósofos, Sociólogos e Cientistas

Este é um quiz interativo que apresenta perguntas inspiradas por grandes pensadores da história, incluindo filósofos, sociólogos, matemáticos e cientistas. Responda às perguntas e teste seus conhecimentos enquanto reflete sobre questões fundamentais da sociedade, ciência e existência humana.

## Funcionalidades

- **Perguntas Temáticas**: O quiz aborda temas relacionados a sociologia, filosofia, matemática, ciência e tecnologia.
- **Respostas Contextualizadas**: Cada resposta inclui uma explicação breve e instigante que conecta o pensamento do autor à realidade moderna.
- **Pontuação Dinâmica**: Ganhe ou perca pontos com base nas suas escolhas. No final, veja sua pontuação total!
- **Interface Simples**: Uma interface web intuitiva que carrega as perguntas e respostas dinamicamente.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `script.js`: Contém a lógica principal do quiz, incluindo a lista de pensadores, perguntas, opções de resposta e pontuação.
- `index.html`: A página HTML que exibe o quiz na web.
- `imagens/`: Pasta contendo as imagens dos pensadores utilizadas no quiz.

## Como Executar o Projeto

1. **Pré-requisitos**:
   - Um navegador moderno (Google Chrome, Firefox, etc.).
   - As imagens referenciadas no diretório `imagens/` devem estar disponíveis.

2. **Passos**:
   - Clone este repositório ou baixe os arquivos diretamente.
   - Abra o arquivo `index.html` em seu navegador.
   - O quiz começará automaticamente, apresentando a primeira pergunta.

3. **Jogabilidade**:
   - Leia a pergunta e clique em uma das três opções de resposta.
   - Após selecionar uma resposta, você verá uma explicação breve e sua pontuação será atualizada.
   - O quiz avançará automaticamente para a próxima pergunta após 2 segundos.
   - Ao final do quiz, sua pontuação total será exibida em um alerta.

## Exemplo de Pergunta

**Pensador**: Émile Durkheim  
**Pergunta**: Por que as pessoas não querem mais viver?  
**Opções**:
1. Solidão
2. Pressão social
3. Falta de propósito  

**Resposta para "Solidão"**:  
*"Solidão? É uma epidemia moderna."*

## Personalização

Se desejar adicionar novos pensadores ou modificar as perguntas existentes, basta editar o array `pensadores` no arquivo `script.js`. Cada entrada deve seguir este formato:

```javascript
{
    nome: "Nome do Pensador",
    foto: "caminho/para/imagem.png",
    pergunta: "Sua pergunta aqui?",
    opcoes: ["Opção 1", "Opção 2", "Opção 3"],
    respostas: [
        "Resposta para Opção 1",
        "Resposta para Opção 2",
        "Resposta para Opção 3"
    ],
    pontos: [10, 5, -5] // Pontuação associada a cada resposta
}
```

## Contribuições

Contribuições são bem-vindas! Se você quiser melhorar o projeto, adicionar novos pensadores ou corrigir bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.
