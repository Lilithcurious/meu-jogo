// script.js

// Lista de pensadores (filósofos, sociólogos, matemáticos e outros)
const pensadores = [// Sociologia
    {
        nome: "Émile Durkheim",
        foto: "imagens/durkheim.png",
        pergunta: "Por que as pessoas não querem mais viver?",
        opcoes: ["Solidão", "Pressão social", "Falta de propósito"],
        respostas: [
            "Solidão? É uma epidemia moderna.",
            "Pressão social? Redes sociais ajudam muito nisso.",
            "Falta de propósito? Talvez seja a crise existencial."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Max Weber",
        foto: "imagens/weber.png",
        pergunta: "O que é burocracia?",
        opcoes: ["Eficiência", "Alienação", "Controle"],
        respostas: [
            "Eficiência? Nem sempre.",
            "Alienação? Parece que sim.",
            "Controle? Certamente."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Karl Marx",
        foto: "imagens/marx.png",
        pergunta: "O capitalismo é sustentável?",
        opcoes: ["Sim", "Não", "Depende"],
        respostas: [
            "Claro, até o próximo colapso econômico.",
            "Talvez o comunismo seja a resposta... ou não.",
            "Depende de quem está contando a história."
        ],
        pontos: [-5, 10, 5]
    },
    {
        nome: "Talcott Parsons",
        foto: "imagens/parsons.png",
        pergunta: "O que mantém a sociedade unida?",
        opcoes: ["Valores compartilhados", "Coerção", "Interesses individuais"],
        respostas: [
            "Valores compartilhados? Eles estão desaparecendo rapidamente.",
            "Coerção? Parece que sim, especialmente no trabalho.",
            "Interesses individuais? Capitalismo em ação!"
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Pierre Bourdieu",
        foto: "imagens/bourdieu.png",
        pergunta: "O que é capital cultural?",
        opcoes: ["Conhecimento", "Dinheiro", "Relações"],
        respostas: [
            "Conhecimento? É poder, mas nem sempre reconhecido.",
            "Dinheiro? Não confunda com capital financeiro.",
            "Relações? Networking é tudo hoje em dia."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Erving Goffman",
        foto: "imagens/goffman.png",
        pergunta: "O que é a vida social?",
        opcoes: ["Teatro", "Competição", "Colaboração"],
        respostas: [
            "Teatro? Todos têm suas máscaras sociais.",
            "Competição? Parece que sim, especialmente no LinkedIn.",
            "Colaboração? Seria bom se fosse mais frequente."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Jürgen Habermas",
        foto: "imagens/habermas.png",
        pergunta: "O que é a esfera pública?",
        opcoes: ["Espaço de diálogo", "Propaganda", "Controle político"],
        respostas: [
            "Espaço de diálogo? Ideal, mas raramente alcançado.",
            "Propaganda? Muitas vezes parece mais marketing.",
            "Controle político? Parece que sim, especialmente nas redes sociais."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Anthony Giddens",
        foto: "imagens/giddens.png",
        pergunta: "O que é globalização?",
        opcoes: ["Integração", "Exploração", "Desigualdade"],
        respostas: [
            "Integração? Culturalmente, sim, mas economicamente, nem tanto.",
            "Exploração? Países pobres pagam o preço.",
            "Desigualdade? Globalização amplifica as diferenças."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Manuel Castells",
        foto: "imagens/castells.png",
        pergunta: "O que é sociedade em rede?",
        opcoes: ["Conexão", "Exclusão", "Controle"],
        respostas: [
            "Conexão? Sim, mas também isolamento.",
            "Exclusão? Aqueles sem internet ficam de fora.",
            "Controle? Big Tech domina tudo."
        ],
        pontos: [10, -5, 5]
    },
    // Filosofia
    {
        nome: "Sócrates",
        foto: "imagens/socrates.png",
        pergunta: "O que é mais importante: sabedoria ou riqueza?",
        opcoes: ["Sabedoria", "Riqueza", "Ambos"],
        respostas: [
            "No mundo atual, a sabedoria é tão valorizada quanto um like no Instagram.",
            "Dinheiro compra felicidade? Só se for na forma de likes.",
            "Você quer ter tudo? Boa sorte com isso!"
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Platão",
        foto: "imagens/platao.png",
        pergunta: "Qual é a verdadeira justiça?",
        opcoes: ["Justiça social", "Leis escritas", "Justiça divina"],
        respostas: [
            "Hoje em dia, justiça social é mais falada do que praticada.",
            "As leis escritas nem sempre são seguidas... olá, corrupção!",
            "Justiça divina? Talvez no próximo episódio."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Aristóteles",
        foto: "imagens/aristoteles.png",
        pergunta: "O que define uma vida boa?",
        opcoes: ["Virtude", "Prazer", "Sucesso"],
        respostas: [
            "Virtude? Parece algo de outro século.",
            "Prazer? Bem-vindo ao mundo das redes sociais.",
            "Sucesso? Desde quando isso traz felicidade?"
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "René Descartes",
        foto: "imagens/descartes.png",
        pergunta: "Como podemos ter certeza de algo?",
        opcoes: ["Pensando", "Sentindo", "Acreditando"],
        respostas: [
            "Pensando? Isso ainda funciona no mundo da pós-verdade?",
            "Sentindo? As emoções podem ser enganosas.",
            "Acreditando? Bem, isso depende da sua fonte de notícias."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Immanuel Kant",
        foto: "imagens/kant.png",
        pergunta: "O que é moralmente correto?",
        opcoes: ["Seguir regras", "Seguir o coração", "Depende da situação"],
        respostas: [
            "Regras? Elas nem sempre são justas.",
            "Coração? Ele pode te levar ao caos.",
            "Depende da situação? Bem-vindo ao relativismo moderno."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Friedrich Nietzsche",
        foto: "imagens/nietzsche.png",
        pergunta: "Deus está morto. O que isso significa?",
        opcoes: ["Liberdade total", "Caos moral", "Nada mudou"],
        respostas: [
            "Liberdade total? Ou apenas mais responsabilidade?",
            "Caos moral? Já estamos vivendo isso.",
            "Nada mudou? Talvez só os rituais."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Jean-Paul Sartre",
        foto: "imagens/sartre.png",
        pergunta: "O que é liberdade?",
        opcoes: ["Escolha", "Responsabilidade", "Ilusão"],
        respostas: [
            "Escolha? Mas quantas opções reais temos?",
            "Responsabilidade? Sim, mas quem quer isso?",
            "Ilusão? Talvez seja apenas um sonho capitalista."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Simone de Beauvoir",
        foto: "imagens/beauvoir.png",
        pergunta: "Por que as mulheres são subjugadas?",
        opcoes: ["Patriarcado", "Educação", "Biologia"],
        respostas: [
            "Patriarcado? Ainda é forte como sempre.",
            "Educação? Ela molda mentes desde cedo.",
            "Biologia? Essa desculpa já era."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Michel Foucault",
        foto: "imagens/foucault.png",
        pergunta: "O poder está em todos os lugares?",
        opcoes: ["Sim", "Não", "Depende"],
        respostas: [
            "Sim? Até nas redes sociais.",
            "Não? Então por que nos sentimos vigiados?",
            "Depende? Bem, depende de quem controla a narrativa."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Hannah Arendt",
        foto: "imagens/arendt.png",
        pergunta: "O que é o mal banal?",
        opcoes: ["Ignorância", "Obediência cega", "Falta de empatia"],
        respostas: [
            "Ignorância? Ela é uma escolha hoje em dia.",
            "Obediência cega? Como seguir ordens sem questionar.",
            "Falta de empatia? Parece familiar?"
        ],
        pontos: [10, 5, -5]
    },
    // Matemática
    {
        nome: "Pitágoras",
        foto: "imagens/pitagoras.png",
        pergunta: "O que é harmonia?",
        opcoes: ["Proporção", "Equilíbrio", "Ordem"],
        respostas: [
            "Proporção? Tudo na vida é matemática.",
            "Equilíbrio? Difícil de encontrar hoje em dia.",
            "Ordem? O caos parece dominar."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Euclides",
        foto: "imagens/euclides.png",
        pergunta: "O que é geometria?",
        opcoes: ["Formas", "Espaço", "Medidas"],
        respostas: [
            "Formas? Tudo ao nosso redor tem uma.",
            "Espaço? Infinito e incompreensível.",
            "Medidas? Sem elas, estaríamos perdidos."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Isaac Newton",
        foto: "imagens/newton.png",
        pergunta: "O que é gravidade?",
        opcoes: ["Força", "Atração", "Mistério"],
        respostas: [
            "Força? Mantém nossos pés no chão.",
            "Atração? Como amor, mas invisível.",
            "Mistério? Ainda não entendemos tudo."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Leonhard Euler",
        foto: "imagens/euler.png",
        pergunta: "O que é matemática pura?",
        opcoes: ["Beleza", "Complexidade", "Abstração"],
        respostas: [
            "Beleza? Sim, para quem entende.",
            "Complexidade? Às vezes parece inútil.",
            "Abstração? Longe da realidade cotidiana."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Carl Friedrich Gauss",
        foto: "imagens/gauss.png",
        pergunta: "O que é estatística?",
        opcoes: ["Verdade", "Mentira", "Interpretação"],
        respostas: [
            "Verdade? Depende de quem analisa.",
            "Mentira? Números podem enganar.",
            "Interpretação? Tudo depende do contexto."
        ],
        pontos: [10, -5, 5]
    },
    {
        nome: "Bernhard Riemann",
        foto: "imagens/riemann.png",
        pergunta: "O que é espaço curvo?",
        opcoes: ["Geometria", "Física", "Filosofia"],
        respostas: [
            "Geometria? Uma nova maneira de ver o mundo.",
            "Física? Einstein usou isso.",
            "Filosofia? Para entender o universo."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Henri Poincaré",
        foto: "imagens/poincare.png",
        pergunta: "O que é caos?",
        opcoes: ["Desordem", "Complexidade", "Previsibilidade"],
        respostas: [
            "Desordem? Parece o mundo atual.",
            "Complexidade? Sistemas dinâmicos são assim.",
            "Previsibilidade? Quase impossível."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Emmy Noether",
        foto: "imagens/noeter.png",
        pergunta: "O que é simetria?",
        opcoes: ["Beleza", "Conservação", "Equilíbrio"],
        respostas: [
            "Beleza? Sim, na natureza e na matemática.",
            "Conservação? Energia e momento são exemplos.",
            "Equilíbrio? Fundamental para a física."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Alan Turing",
        foto: "imagens/turing.png",
        pergunta: "O que é inteligência artificial?",
        opcoes: ["Máquinas pensantes", "Algoritmos", "Futuro"],
        respostas: [
            "Máquinas pensantes? Ainda estamos longe disso.",
            "Algoritmos? Controlam nossas vidas.",
            "Futuro? Promissor, mas assustador."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Andrew Wiles",
        foto: "imagens/wiles.png",
        pergunta: "O que é persistência?",
        opcoes: ["Esforço", "Paciência", "Inspiração"],
        respostas: [
            "Esforço? Levou anos para provar o Último Teorema de Fermat.",
            "Paciência? Sim, muita dela.",
            "Inspiração? Um lampejo pode mudar tudo."
        ],
        pontos: [10, 5, -5]
    },

    // Ciência e Tecnologia
    {
        nome: "Albert Einstein",
        foto: "imagens/einstein.png",
        pergunta: "O que é relatividade?",
        opcoes: ["Tempo", "Espaço", "Velocidade"],
        respostas: [
            "Tempo? Relativo, depende de onde você está.",
            "Espaço? Curvo, graças à gravidade.",
            "Velocidade? A luz é o limite."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Charles Darwin",
        foto: "imagens/darwin.png",
        pergunta: "O que é evolução?",
        opcoes: ["Adaptação", "Seleção natural", "Mutação"],
        respostas: [
            "Adaptação? Sobrevivência dos mais aptos.",
            "Seleção natural? A natureza decide.",
            "Mutação? Mudanças aleatórias são fundamentais."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Stephen Hawking",
        foto: "imagens/hawking.png",
        pergunta: "O que é um buraco negro?",
        opcoes: ["Gravidade extrema", "Mistério", "Portal"],
        respostas: [
            "Gravidade extrema? Nem a luz escapa.",
            "Mistério? Ainda há muito a descobrir.",
            "Portal? Talvez para outra dimensão."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Richard Feynman",
        foto: "imagens/feynman.png",
        pergunta: "O que é física quântica?",
        opcoes: ["Partículas", "Probabilidades", "Magia"],
        respostas: [
            "Partículas? Estranhas e imprevisíveis.",
            "Probabilidades? Nada é certo.",
            "Magia? Parece mesmo mágica às vezes."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Carl Sagan",
        foto: "imagens/Sagan.png",
        pergunta: "Estamos sozinhos no universo?",
        opcoes: ["Sim", "Não", "Talvez"],
        respostas: [
            "Sim? Triste pensar nisso.",
            "Não? Esperamos por contato.",
            "Talvez? O universo é vasto e misterioso."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Jane Goodall",
        foto: "imagens/goodall.png",
        pergunta: "O que é conservação?",
        opcoes: ["Proteção", "Respeito", "Sacrifício"],
        respostas: [
            "Proteção? Natureza precisa de ajuda.",
            "Respeito? Devemos aos animais.",
            "Sacrifício? Custa caro, mas vale a pena."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Niels Bohr",
        foto: "imagens/bohr.png",
        pergunta: "O que é dualidade?",
        opcoes: ["Onda", "Partícula", "Ambos"],
        respostas: [
            "Onda? Luz se comporta assim.",
            "Partícula? Também se comporta assim.",
            "Ambos? Dualidade é o cerne da mecânica quântica."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Rosalind Franklin",
        foto: "imagens/franklin.png",
        pergunta: "O que é DNA?",
        opcoes: ["Código", "Hereditariedade", "Vida"],
        respostas: [
            "Código? Instruções para construir seres vivos.",
            "Hereditariedade? Passado genético.",
            "Vida? Base de tudo vivo."
        ],
        pontos: [10, 5, -5]
    },
    {
        nome: "Ada Lovelace",
        foto: "imagens/lovelace.png",
        pergunta: "Os computadores podem pensar?",
        opcoes: ["Sim", "Não", "Depende da programação"],
        respostas: [
            "Se pudessem, já teriam pedido melhores condições de trabalho.",
            "Não, mas eles certamente podem calcular melhor que nós.",
            "Depende da programação... e do café dos desenvolvedores."
        ],
        pontos: [-5, 5, 10]
    },
    {
        nome: "Elon Musk",
        foto: "imagens/musk.png",
        pergunta: "O que é o futuro?",
        opcoes: ["Espaço", "IA", "Sustentabilidade"],
        respostas: [
            "Espaço? Marte é o próximo destino.",
            "IA? Pode salvar ou destruir a humanidade.",
            "Sustentabilidade? Precisamos dela para sobreviver."
        ],
        pontos: [10, 5, -5]
    }
];

let indiceAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const pensador = pensadores[indiceAtual];
    document.getElementById("pensador-foto").src = pensador.foto;
    document.getElementById("pensador-nome").textContent = pensador.nome; // Adiciona o nome do pensador
    document.getElementById("pergunta").textContent = pensador.pergunta;
    document.getElementById("opcao1").textContent = pensador.opcoes[0];
    document.getElementById("opcao2").textContent = pensador.opcoes[1];
    document.getElementById("opcao3").textContent = pensador.opcoes[2];
}

function mostrarResposta(indiceOpcao) {
    const pensador = pensadores[indiceAtual];
    document.getElementById("resposta").textContent = pensador.respostas[indiceOpcao];
    pontuacao += pensador.pontos[indiceOpcao];
    document.getElementById("pontos").textContent = pontuacao;

    // Avança para a próxima pergunta
    indiceAtual++;
    if (indiceAtual < pensadores.length) {
        setTimeout(carregarPergunta, 2000); // Aguarda 2 segundos antes de carregar a próxima pergunta
    } else {
        alert("Fim do jogo! Sua pontuação final é: " + pontuacao);
    }
}

document.getElementById("opcao1").addEventListener("click", () => mostrarResposta(0));
document.getElementById("opcao2").addEventListener("click", () => mostrarResposta(1));
document.getElementById("opcao3").addEventListener("click", () => mostrarResposta(2));

// Inicia o jogo
carregarPergunta();
