var painelResultado = document.getElementById("resultado");
painelResultado.style.display = "none";

var quiz = document.getElementById("quiz");

var acertos = 0;

var selecionado;

var id = 0;

const Questions = [
  {
    id: 0,
    q: "1-  O que determina que uma formula será usada no excel?",
    a: [
      { text: "Que seja usada dentro de uma célula", isCorrect: false },
      { text: "Que seja inserido o simbolo de igualdade antes da inserção da função", isCorrect: true },
      { text: "Que seja primeiro inserido o nome da função e os valores que serão usados", isCorrect: false },
      { text: "O excel detecta automaticamente quando uma função será usada", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "2- O que determina que o valor de retorno da verificação da CONDIÇÃO =SE() seja VERDADEIRA?",
    a: [
      { text: "Quando o mesmo não existe a condição FALSA", isCorrect:  false },
      { text: "Quando a última condição  é VERDADEIRA", isCorrect: false },
      { text: "Quando o parâmetro de entrada atende a CONDIÇÃO", isCorrect: true },
      { text: "Quando inserimos um valor até o retorno ser VERDADEIRO", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "3- Qual definição CORRESPONDE a função SE",
    a: [
      { text: "Esta função serve para realizar comparação de valores e não precisamos passar nenhum parâmetro dentro da fórmula", isCorrect: false },
      { text: "Para que o valor de retorno seja verdadeiro, basta que o último parâmetro seja verdadeiro", isCorrect: false },
      { text: "Esta função verifica as condições dentro da fórmula, caso nenhuma seja atendida, ela retorna o último parâmetro", isCorrect: true },
      { text: "Esta função verifica as condições e caso nenhuma seja atendida, ela não retorna nada", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "4- Qual a diferença da função =SE() e =SE(E()?",
    a: [
      { text: "Ambas precisam que todas as suas condições de verificação sejam verdadeiras para serem atendidas", isCorrect: false },
      { text: "A função SE verifica todas as condições enquanto a SE(E)) verifica uma condição, caso seja atendida ela retorna o parâmetro da condição", isCorrect: false },
      { text: "A função SE preocupa-se em atender uma condição enquanto a SE(E)) precisa atender todas para ser verdadeira", isCorrect: true },
      { text: "Ambas não precisam de um parâmetro que retorne FALSO", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "5- Qual o críterio utilizado pela FORMATAÇÃO CONDICIONAL para alterar as cores da célula?",
    a: [
      { text: "Que as células não tenham informações", isCorrect: false },
      { text: "Que as células tenham informações que identifiquem qual a formatação será atribuida", isCorrect: true },
      { text: "Que as células não tenham informações diferentes ", isCorrect: false },
      { text: "Nenhuma das alternativas", isCorrect: false },
    ],
  },
];

function percorrer() {
  var result = document.getElementsByClassName("result")[0];
  result.innerHTML = "";

  var question = document.getElementById("question");
  question.innerHTML = Questions[id].q;

  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  op1.innerHTML = Questions[id].a[0].text;
  op2.innerHTML = Questions[id].a[1].text;
  op3.innerHTML = Questions[id].a[2].text;
  op4.innerHTML = Questions[id].a[3].text;

  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  selecionado = "";
}

op1.addEventListener("click", () => {
  op1.style.backgroundColor = "lightgoldenrodyellow";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selecionado = op1.value;
  console.log(selecionado);
});

op2.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightgoldenrodyellow";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selecionado = op2.value;
  console.log(selecionado);
});

op3.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightgoldenrodyellow";
  op4.style.backgroundColor = "lightskyblue";
  selecionado = op3.value;
  console.log(selecionado);
});

op4.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightgoldenrodyellow";
  selecionado = op4.value;
  console.log(selecionado);
});

const next = document.getElementsByClassName("next")[0];

next.addEventListener("click", () => {
  if (id < Questions.length) {
    console.log(id);

    if (selecionado == "true") {
      acertos++;
      console.log(acertos);
    }

    selecionado = "false";
    id++;
    op1.style.backgroundColor = "grey";
    op2.style.backgroundColor = "grey";
    op3.style.backgroundColor = "grey";
    op4.style.backgroundColor = "grey";
    if (id != Questions.length) {
      percorrer();
    }
  } else {
    quiz.style.display = "none";
    painelResultado.style.display = "flex";
    document.getElementById(
      "text"
    ).innerHTML = `Você acertou ${acertos} questões!`;
  }
});

percorrer();
