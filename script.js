var dadosArmazenados = []; // Cria um array vazio

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

    console.log("Seus dados de acesso são\n" + "Email:" +
        dados.email +
        "\nSenha: " + dados.senha +
        "\nTelefone: " + dados.telefone +
        "\nNacionalidade: " + dados.nacionalidade);

    // Exibe os dados na tela
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
      
          // Adiciona a lista de dados ao elemento HTML
          dadosExibidos.appendChild(listaDados);
        }

      }
      
      exibirDados();
}
