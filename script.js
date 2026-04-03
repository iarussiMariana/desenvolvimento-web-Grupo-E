
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