// Cria um array vazio ou recupera do localStorage se existir
var dadosArmazenados = JSON.parse(localStorage.getItem('dados')) || [];

function enviarDados(event) {
    event.preventDefault(); // Impede que o formulário seja enviado

    // Captura os valores dos campos do formulário
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var telefone = document.getElementById("telefone").value;
    var nacionalidade = document.getElementById("nacionalidade").value;

    // Armazena os valores em um objeto
    var dados = {
        email: email,
        senha: senha,
        telefone: telefone,
        nacionalidade: nacionalidade
    };

    // Adiciona o objeto de dados ao array
    dadosArmazenados.push(dados);

    // Armazena o array atualizado no localStorage
    localStorage.setItem('dados', JSON.stringify(dadosArmazenados));

    console.log("Seus dados de acesso são\n" + "Email:" +
        dados.email +
        "\nSenha: " + dados.senha +
        "\nTelefone: " + dados.telefone +
        "\nNacionalidade: " + dados.nacionalidade);

    // Exibe os dados na tela
    exibirDados();
}

function exibirDados() {
    var dadosExibidos = document.getElementById("dados-exibidos");

    // Limpa os dados anteriores exibidos
    dadosExibidos.innerHTML = "";

    // Percorre o array de dados e exibe cada objeto
    for (var i = 0; i < dadosArmazenados.length; i++) {
        var dados = dadosArmazenados[i];

        // Cria um elemento de lista <ul> para cada conjunto de dados
        var listaDados = document.createElement("ul");

        // Cria um elemento <li> para cada campo de dados
        var emailItem = document.createElement("li");
        emailItem.textContent = "E-mail: " + dados.email;
        listaDados.appendChild(emailItem);

        var senhaItem = document.createElement("li");
        senhaItem.textContent = "Senha: " + dados.senha;
        listaDados.appendChild(senhaItem);

        var telefoneItem = document.createElement("li");
        telefoneItem.textContent = "Telefone: " + dados.telefone;
        listaDados.appendChild(telefoneItem);

        var nacionalidadeItem = document.createElement("li");
        nacionalidadeItem.textContent = "Nacionalidade: " + dados.nacionalidade;
        listaDados.appendChild(nacionalidadeItem);

        // Adiciona um botão para remover este conjunto de dados
        var removerBotao = document.createElement("button");
        removerBotao.textContent = "Remover";
        removerBotao.dataset.index = i; // Armazena o índice no dataset para identificar qual conjunto de dados remover
        removerBotao.addEventListener("click", removerDados);
        listaDados.appendChild(removerBotao);

        // Adiciona a lista de dados ao elemento HTML
        dadosExibidos.appendChild(listaDados);
    }
}

function removerDados(event) {
    var index = event.target.dataset.index;

    // Remove o conjunto de dados do array
    dadosArmazenados.splice(index, 1);

    // Atualiza o localStorage
    localStorage.setItem('dados', JSON.stringify(dadosArmazenados));

    // Exibe os dados atualizados na tela
    exibirDados();
}

// Chama exibirDados quando a página é carregada para mostrar os dados salvos
window.onload = exibirDados;
