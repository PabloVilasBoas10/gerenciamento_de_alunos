const calcularMedia = document.querySelector('.btn-media')
const divMedia = document.querySelector('.div-media')

calcularMedia.addEventListener("click", function () {
    const codigoDoAluno = document.querySelector(".media").value;

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Função para buscar aluno pelo código
    function buscarAlunoPorCodigo(codigo) {
        return alunosNoLocalStorage.find(aluno => aluno.codigo === codigo);
    }

    const alunoEncontrado = buscarAlunoPorCodigo(codigoDoAluno);

    if (alunoEncontrado) {
        const nota1 = parseFloat(alunoEncontrado.notas[0]) || 0;
        const nota2 = parseFloat(alunoEncontrado.notas[1]) || 0;
        const nota3 = parseFloat(alunoEncontrado.notas[2]) || 0;

        const media = (nota1 + nota2 + nota3) / 3;

        console.log("Média do aluno", alunoEncontrado.nome, alunoEncontrado.sobrenome, ":", media.toFixed(2));

        divMedia.innerText = `Média: \n Nome: ${alunoEncontrado.nome} \n Código: ${alunoEncontrado.codigo} \n Média: ${media.toFixed(2)}`
    } else {
        console.log("Aluno não encontrado.");
    }

});

