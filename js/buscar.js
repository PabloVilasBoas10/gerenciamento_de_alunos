const btnBuscar = document.querySelector('.btn-buscar')
const infoAluno = document.querySelector('.info-aluno')


btnBuscar.addEventListener("click", function () {
    const codigoParaBuscar = document.querySelector(".buscar").value;

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Função para buscar aluno pelo código
    function buscarAlunoPorCodigo(codigo) {
        return alunosNoLocalStorage.find(aluno => aluno.codigo === codigo);
    }

    const alunoEncontrado = buscarAlunoPorCodigo(codigoParaBuscar);

    if (alunoEncontrado) {
        console.log("Aluno encontrado:", alunoEncontrado);
        infoAluno.innerText = `Aluno cadastrado: \n Código: ${alunoEncontrado.codigo} \n Nome: ${alunoEncontrado.nome} \n Sobrenome: ${alunoEncontrado.sobrenome} \n Email: ${alunoEncontrado.email}\n Notas: ${alunoEncontrado.notas}, \n Ativo: ${alunoEncontrado.ativo}`
    } else {
        infoAluno.innerText = "Aluno não encontrado."
        console.log("Aluno não encontrado.");
    }
});