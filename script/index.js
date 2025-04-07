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
            } else {
                alert("Preencha todos os campos corretamente!");
            }
        }

        function carregarTransacoes() {
            const transacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");
            const lista = document.getElementById("transacoes");
            lista.innerHTML = "";
            let saldo = 0, receitas = 0, despesas = 0;
            transacoes.forEach(t => {
                saldo += t.tipo === "ganho" ? t.valor : -t.valor;
                if (t.tipo === "ganho") receitas += t.valor;
                else despesas += t.valor;
                const linha = `<tr class="${t.tipo === 'ganho' ? 'receita' : 'despesa'}">
                    <td>AOA ${t.valor.toFixed(2)}</td>
                    <td>${t.categoria}</td>
                    <td>${t.desc}</td>
                    <td>${t.data}</td>
                    <td>${t.tipo === 'ganho' ? 'Receita' : 'Despesa'}</td> <!-- Exibe se é Receita ou Despesa -->
                </tr>`;
                lista.innerHTML += linha;
            });
            document.getElementById("saldo").innerText = `AOA ${saldo.toFixed(2)}`;
            document.getElementById("totalReceitas").innerText = receitas.toFixed(2);
            document.getElementById("totalDespesas").innerText = despesas.toFixed(2);
        }

        function logout() {
    localStorage.removeItem("transacoes");
    window.location.href = "login.html"; // Redireciona para a página de login
}