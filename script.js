var painelResultado = document.getElementById("resultado");
painelResultado.style.display = "none";

var quiz = document.getElementById("index");

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
    q: "2- O que melhor corresponde ao uso alça de preenchimento automático",
    a: [
      { text: "É usada apenas para selecionar células", isCorrect:  false },
      { text: "Só é possivel utilizar em tabelas sem formatação", isCorrect: false },
      { text: "É usado para copiar formatações e qualquer informação contida na célula", isCorrect: true },
      { text: "Células mescladas não podem ser utilizadas nessa ferramenta", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "3- Qual a formula para utilização da função SOMA",
    a: [
      { text: "SOMA", isCorrect: false },
      { text: "=SOMA", isCorrect: false },
      { text: "=SOMA()", isCorrect: true },
      { text: "SOMA()", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "4- O que é necessario para executar a função SOMA a partir da sentença a seguir: =SOMA(",
    a: [
      { text: "Fechar o parentese e clicar enter", isCorrect: false },
      { text: "Selecionar os endereços, fechar o parentese e clicar enter", isCorrect: true },
      { text: "Inserir o sinal: +", isCorrect: false },
      { text: "Não fazer nada", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "5- O que são células?",
    a: [
      { text: "Espaços disponiveis na area de trabalho não mutaveis", isCorrect: false },
      { text: "Correspondem ao espaço para inserção de formulas, formatações e informações", isCorrect: true },
      { text: "São endereços que podem ser utilizados apenas para formulas", isCorrect: false },
      { text: "São partes fixas das colunas em que inserimos textos e não podemos alterá-los", isCorrect: false },
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
