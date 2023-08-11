const cadastrarButton = document.querySelector(".cadastrar");

cadastrarButton.addEventListener("click", function () {
    const codigo = document.querySelector(".codigo").value;
    const nome = document.querySelector(".nome").value.trim(); // Remove espaços extras
    const sobrenome = document.querySelector(".sobrenome").value;
    const email = document.querySelector(".email").value;
    const nota1 = document.querySelector(".nota1").value;
    const nota2 = document.querySelector(".nota2").value;
    const nota3 = document.querySelector(".nota3").value;
    const ativo = true;
    const div = document.querySelector('.div')

    // Verifica se todos os campos estão preenchidos
    if (codigo && nome && sobrenome && email && nota1 && nota2 && nota3) {
        const aluno = {
            codigo,
            nome,
            sobrenome,
            email,
            notas: [nota1, nota2, nota3],
            ativo
        };

        // Recupera o array de objetos do localStorage
        const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

        // Verifica se já existe um aluno com o mesmo código, nome ou email
        const alunoExistente = alunosNoLocalStorage.some(alunoExistente => (
            alunoExistente.codigo === codigo ||
            alunoExistente.nome === nome ||
            alunoExistente.email === email
        ));

        if (alunoExistente) {
            alert("Já existe um aluno com o mesmo código, nome ou email.");
        } else {
            alunosNoLocalStorage.push(aluno);
            localStorage.setItem('alunos', JSON.stringify(alunosNoLocalStorage));
            div.innerText = `Aluno cadastrado: \n Nome: ${aluno.nome} \n Código: ${aluno.codigo} \n Email: ${aluno.email}`
            console.log("Aluno cadastrado:", aluno);
            alert("Aluno cadastrado com sucesso.");
        }
    } else {
        alert("Por favor, preencha todos os campos, incluindo as 3 notas.");
    }
});

