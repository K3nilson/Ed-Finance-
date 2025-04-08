document.addEventListener("DOMContentLoaded", () => {
    const transacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");
    const lista = document.getElementById("transacoes");
    lista.innerHTML = "";

    transacoes.forEach(t => {
      const linha = `<tr class="${t.tipo === 'ganho' ? 'receita' : 'despesa'}">
        <td>AOA ${t.valor.toFixed(2)}</td>
        <td>${t.categoria}</td>
        <td>${t.desc}</td>
        <td>${t.data}</td>
        <td>${t.tipo === 'ganho' ? 'Receita' : 'Despesa'}</td>
      </tr>`;
      lista.innerHTML += linha;
    });
  });