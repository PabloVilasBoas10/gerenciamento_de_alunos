const listarAprovadosButton = document.querySelector('.listarAprovadosButton')

const reprovadoAprovado = document.querySelector('.reprovado-aprovado')

listarAprovadosButton.addEventListener("click", function () {
    reprovadoAprovado.innerHTML = "ALUNOS APROVADOS"

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Filtra o array para listar apenas alunos com média maior ou igual a 6
    const alunosAprovados = alunosNoLocalStorage.filter(aluno => {
        const nota1 = parseFloat(aluno.notas[0]) || 0;
        const nota2 = parseFloat(aluno.notas[1]) || 0;
        const nota3 = parseFloat(aluno.notas[2]) || 0;

        const media = (nota1 + nota2 + nota3) / 3;

        return media >= 6;
    });

    if (alunosAprovados.length > 0) {

        alunosAprovados.forEach(objeto => {
            const codigo = objeto.codigo;
            const nome = objeto.nome;
            const ativo = objeto.ativo;
            const elementoNome = document.createElement('p');
            elementoNome.innerHTML = `Nome: ${nome} / Código: ${codigo} / Ativo: ${ativo}`;
            reprovadoAprovado.appendChild(elementoNome);
        });


        console.log("Alunos aprovados:", alunosAprovados);
    } else {
        console.log("Nenhum aluno aprovado encontrado.");
    }
});


const listarAbaixoMediaButton = document.querySelector('.listarAbaixoMediaButton')

listarAbaixoMediaButton.addEventListener("click", function () {
    reprovadoAprovado.innerHTML = "ALUNOS REPROVADOS"

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Filtra o array para listar apenas alunos com média abaixo de 6
    const alunosAbaixoMedia = alunosNoLocalStorage.filter(aluno => {
        const nota1 = parseFloat(aluno.notas[0]) || 0;
        const nota2 = parseFloat(aluno.notas[1]) || 0;
        const nota3 = parseFloat(aluno.notas[2]) || 0;

        const media = (nota1 + nota2 + nota3) / 3;

        return media < 6;
    });

    if (alunosAbaixoMedia.length > 0) {

        alunosAbaixoMedia.forEach(objeto => {
            const codigo = objeto.codigo;
            const nome = objeto.nome;
            const ativo = objeto.ativo;
            const elementoNome = document.createElement('p');
            elementoNome.innerHTML = `Nome: ${nome} / Código: ${codigo} / Ativo: ${ativo}`;
            reprovadoAprovado.appendChild(elementoNome);
        });



        console.log("Alunos abaixo da média:", alunosAbaixoMedia);
    } else {
        console.log("Nenhum aluno abaixo da média encontrado.");
    }
});