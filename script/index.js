document.addEventListener("DOMContentLoaded", carregarTransacoes);

function adicionarTransacao() {
  const desc = document.getElementById("desc").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;
  const data = document.getElementById("data").value;
  const tipo = document.getElementById("tipo").value;

  if (desc && !isNaN(valor) && data) {
    const transacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");
    transacoes.push({ desc, valor, categoria, data, tipo });
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
    carregarTransacoes();
    window.alert("Transação Adicionada Com Sucesso")
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}

function carregarTransacoes() {
  const transacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");
  let saldo = 0, receitas = 0, despesas = 0;
  transacoes.forEach(t => {
    saldo += t.tipo === "ganho" ? t.valor : -t.valor;
    if (t.tipo === "ganho") receitas += t.valor;
    else despesas += t.valor;
  });
  document.getElementById("saldo").innerText = `AOA ${saldo.toFixed(2)}`;
  document.getElementById("totalReceitas").innerText = receitas.toFixed(2);
  document.getElementById("totalDespesas").innerText = despesas.toFixed(2);
}

function logout() {
  localStorage.removeItem("transacoes");
  window.location.href = "login.html";
}