const btnDesativar = document.querySelector('.btn-desativar')
const divDesativar = document.querySelector('.div-desativar')

btnDesativar.addEventListener("click", () => {
    const codigoDoAluno = document.querySelector(".desativar").value;

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Função para buscar aluno pelo código
    function buscarAlunoPorCodigo(codigo) {
        return alunosNoLocalStorage.find(aluno => aluno.codigo === codigo);
    }

    const alunoEncontrado = buscarAlunoPorCodigo(codigoDoAluno);

    if (alunoEncontrado) {
        alunoEncontrado.ativo = false; // Define o aluno como inativo
        localStorage.setItem('alunos', JSON.stringify(alunosNoLocalStorage)); // Atualiza o localStorage
        console.log("Aluno desativado:", alunoEncontrado);
        divDesativar.innerText = `Aluno desativao: \n Código: ${alunoEncontrado.codigo} \n Nome: ${alunoEncontrado.nome} \n Sobrenome: ${alunoEncontrado.sobrenome} \n Email: ${alunoEncontrado.email}\n Notas: ${alunoEncontrado.notas}, \n Ativo: ${alunoEncontrado.ativo}`
    } else {
        console.log("Aluno não encontrado.");
    }

});
