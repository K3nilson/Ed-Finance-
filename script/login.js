let isCadastro = false;
        
        function alternarCadastro() {
            isCadastro = !isCadastro;
            document.getElementById('form-title').innerText = isCadastro ? 'Cadastro' : 'Login';
            document.querySelector('.toggle').innerText = isCadastro ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se';
        }
        
        function processar() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
            
            if (isCadastro) {
                if (username in usuarios) {
                    alert("Usuário já cadastrado!");
                } else {
                    usuarios[username] = password;
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                    alert("Cadastro realizado com sucesso!");
                    alternarCadastro();
                }
            } else {
                if (usuarios[username] === password) {
                    localStorage.setItem("username", username);
                    window.location.href = "index.html";
                } else {
                    alert("Usuário ou senha incorretos!");
                }
            }
        }