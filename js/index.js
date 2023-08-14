const cadastrarButton = document.querySelector(".cadastrar");

cadastrarButton.addEventListener("click", () => {
    const codigo = document.querySelector(".codigo").value;
    const nome = document.querySelector(".nome").value.trim(); // Remove espaços extras
    const sobrenome = document.querySelector(".sobrenome").value;
    const email = document.querySelector(".email").value;
    const nota1 = Number(document.querySelector(".nota1").value);
    const nota2 = Number(document.querySelector(".nota2").value);
    const nota3 = Number(document.querySelector(".nota3").value);
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
            div.innerText = 'Já existe um aluno com o mesmo código, nome ou email'
            alert("Já existe um aluno com o mesmo código, nome ou email.");
        } else {
            alunosNoLocalStorage.push(aluno);
            localStorage.setItem('alunos', JSON.stringify(alunosNoLocalStorage));
            div.innerText = `Aluno cadastrado.`
            console.log("Aluno cadastrado:", aluno);
            alert("Aluno cadastrado com sucesso.");
        }
    } else {
        div.innerText = "Por favor, preencha todos os campos, incluindo as 3 notas."

        alert("Por favor, preencha todos os campos, incluindo as 3 notas.");
    }

    if (!nota1 || !nota2 || !nota3 || !codigo) {
        div.innerText = "Todas as NOTAS / CÓDIGO devem ser um NÚMERO!"
        console.log('As notas tem que ser numero!')
    }

});

