
function mostrarCalc(tipo) {
  const area = document.getElementById("calculadora");

  if (tipo === "idade") {
    area.innerHTML = `
      <div class="card">
        <h2>Aposentadoria por Idade</h2>
        <input type="number" id="idade" placeholder="Sua idade"><br><br>
        <button onclick="calcularIdade()">Calcular</button>
        <p id="resultado"></p>
      </div>
    `;
  }

  if (tipo === "tempo") {
    area.innerHTML = `
      <div class="card">
        <h2>Tempo de Contribuição</h2>
        <input type="number" id="anos" placeholder="Anos contribuídos"><br><br>
        <button onclick="calcularTempo()">Calcular</button>
        <p id="resultado"></p>
      </div>
    `;
  }

  if (tipo === "beneficio") {
    area.innerHTML = `
      <div class="card">
        <h2>Valor do Benefício</h2>
        <input type="number" id="salario" placeholder="Salário médio"><br><br>
        <button onclick="calcularBeneficio()">Calcular</button>
        <p id="resultado"></p>
      </div>
    `;
  }

  if (tipo === "juros") {
    area.innerHTML = `
      <div class="card">
        <h2>Juros Simples e Compostos</h2>

        <input type="number" id="capital" placeholder="Capital inicial"><br><br>
        <input type="number" id="taxa" placeholder="Taxa (%)"><br><br>
        <input type="number" id="tempo" placeholder="Tempo"><br><br>

        <button onclick="calcularJurosSimples()">Juros Simples</button>
        <button onclick="calcularJurosCompostos()">Juros Compostos</button>

        <p id="resultado"></p>
      </div>
    `;
  }

  if (tipo === "amortizacao") {
    area.innerHTML = `
      <div class="card">
        <h2>Calculadora de Amortização</h2>

        <label>Valor do Empréstimo:</label><br>
        <input type="number" id="valor" placeholder="Ex: 10000"><br><br>

        <label>Taxa de Juros (% ao mês):</label><br>
        <input type="number" id="juros" placeholder="Ex: 2"><br><br>

        <label>Parcelas:</label><br>
        <input type="number" id="parcelas" placeholder="Ex: 12"><br><br>

        <label>Tipo:</label><br>
        <select id="tipoAmortizacao">
          <option value="price">Price</option>
          <option value="sac">SAC</option>
        </select><br><br>

        <button onclick="calcularAmortizacao()">Calcular</button>

        <p id="resultado"></p>
      </div>
    `;
  }

  if (tipo === "pontos") {
    area.innerHTML = `
      <div class="card">
        <h2>Cálculo de Pontos (Aposentadoria)</h2>

        <select id="sexo">
          <option value="homem">Homem</option>
          <option value="mulher">Mulher</option>
        </select><br><br>

        <input type="number" id="idadePontos" placeholder="Sua idade"><br><br>
        <input type="number" id="tempoPontos" placeholder="Tempo de contribuição (anos)"><br><br>

        <button onclick="calcularPontos()">Calcular</button>

        <p id="resultado"></p>
      </div>
    `;
  }
}

function calcularIdade() {
  const idade = document.getElementById("idade").value;
  const res = document.getElementById("resultado");

  if (idade >= 65) {
    res.innerText = "Você já pode se aposentar!";
  } else {
    res.innerText = "Ainda não atingiu a idade mínima.";
  }
}

function calcularTempo() {
  const anos = document.getElementById("anos").value;
  const res = document.getElementById("resultado");

  if (anos >= 35) {
    res.innerText = "Tempo suficiente para aposentadoria!";
  } else {
    res.innerText = "Ainda falta tempo de contribuição.";
  }
}

function calcularBeneficio() {
  const salario = document.getElementById("salario").value;
  const res = document.getElementById("resultado");

  const beneficio = salario * 0.6;
  res.innerText = "Valor estimado: R$ " + beneficio.toFixed(2);
}

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msg = document.getElementById("loginMsg");

  if (user === "admin" && pass === "123") {
    msg.innerText = "Login realizado com sucesso!";
  } else {
    msg.innerText = "Usuário ou senha incorretos.";
  }
}

function calcularJurosSimples() {
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseFloat(document.getElementById("tempo").value);
  const res = document.getElementById("resultado");

  const juros = capital * taxa * tempo;
  const total = capital + juros;

  res.innerText = `Total: R$ ${total.toFixed(2)} (Juros: R$ ${juros.toFixed(2)})`;
}

function calcularJurosCompostos() {
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseFloat(document.getElementById("tempo").value);
  const res = document.getElementById("resultado");

  const total = capital * Math.pow((1 + taxa), tempo);
  const juros = total - capital;

  res.innerText = `Total: R$ ${total.toFixed(2)} (Juros: R$ ${juros.toFixed(2)})`;
}

function calcularAmortizacao() {
  const valor = parseFloat(document.getElementById("valor").value);
  const juros = parseFloat(document.getElementById("juros").value) / 100;
  const parcelas = parseInt(document.getElementById("parcelas").value);
  const tipo = document.getElementById("tipoAmortizacao").value;
  const res = document.getElementById("resultado");

  if (tipo === "price") {
    const parcela = valor * (juros * Math.pow(1 + juros, parcelas)) / (Math.pow(1 + juros, parcelas) - 1);
    res.innerText = "Parcela (Price): R$ " + parcela.toFixed(2);
  }

  if (tipo === "sac") {
    const amortizacao = valor / parcelas;
    let primeiraParcela = amortizacao + (valor * juros);
    res.innerText = "Primeira parcela (SAC): R$ " + primeiraParcela.toFixed(2);
  }
}

function calcularPontos() {
  const idade = Number(document.getElementById("idadePontos").value);
  const tempo = Number(document.getElementById("tempoPontos").value);
  const sexo = document.getElementById("sexo").value;
  const res = document.getElementById("resultado");

  const pontos = idade + tempo;

  let minimo;

  if (sexo === "homem") {
    minimo = 100;
  } else {
    minimo = 90;
  }

  if (pontos >= minimo) {
    res.innerText = `Você tem ${pontos} pontos. Já pode se aposentar!`;
  } else {
    const falta = minimo - pontos;
    res.innerText = `Você tem ${pontos} pontos. Faltam ${falta} pontos para se aposentar.`;
  }
}