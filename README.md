# Laboratório de formulários

Interface em HTML, CSS e JavaScript para adicionar e visualizar registros temporários de e-mail, telefone e nacionalidade.

## O que o projeto faz

- Formulário com rótulos, validação nativa e limites de tamanho.
- Registros inseridos como texto, sem interpretar HTML digitado pelo usuário.
- Layout de duas colunas que se adapta ao celular e permite rolagem.
- Limpeza dos registros, aviso de estado e foco após cada ação.
- Nenhuma senha é solicitada, exibida ou registrada no console.

## Executar

Abra `index.html` em um navegador moderno. Não há instalação de dependências, build ou servidor obrigatório. Para desenvolvimento, também é possível servir a pasta com qualquer servidor estático, por exemplo `python -m http.server 8000` e acessar `http://localhost:8000`.

## Estrutura

- `index.html`: estrutura e conteúdo.
- `style.css`: apresentação.
- `script.js`: comportamento da página.

## Limites e cuidados

- Os dados existem apenas no DOM da página; recarregar remove os registros.
- Use informações fictícias. Não há backend, conta, banco de dados ou autenticação.
- A versão anterior solicitava e exibia senhas; essa coleta foi removida.

## Roteiro de verificação manual

1. Tente enviar um formulário vazio e um e-mail inválido.
2. Cadastre dois registros fictícios, inclusive texto com caracteres `<` e `>`.
3. Confira que os valores aparecem como texto e que o primeiro campo recebe foco.
4. Limpe a lista, teste novamente e recarregue a página.

Não há suíte de testes de navegador configurada no repositório. O roteiro acima deve ser executado antes de publicar alterações. Nenhum deploy é feito por estes arquivos.
