// Função para inserir um novo cliente
function inserirCliente() {
    const formInserir = document.getElementById('form-inserir');
    const nome = formInserir.nome.value;
    const cpf = formInserir.cpf.value;
    const rg = formInserir.rg.value;
    const nomeRedeSocial = formInserir.nomeRedeSocial.value;
    const email = formInserir.email.value;
    const cidade = formInserir.cidade.value;

    const novoCliente = {
        id: gerarId(),
        nome: nome,
        cpf: cpf,
        rg: rg,
        nomeRedeSocial: nomeRedeSocial,
        email: email,
        cidade: cidade
    };

    adicionarCliente(novoCliente);
    salvarClientes();
    atualizarListaClientes(); // Atualiza a lista de clientes na página

    // Limpa o formulário
    formInserir.reset();

    // Pergunta se o usuário deseja cadastrar outro cliente
    if (confirm('Cliente inserido com sucesso! Deseja cadastrar outro cliente?')) {
        return true; // Retorna true se o usuário deseja cadastrar outro cliente
    } else {
        window.location.href = 'index.html'; // Redireciona para a página inicial
        return false; // Retorna false se o usuário não deseja cadastrar outro cliente
    }
}
