const btnRemover = document.querySelector('.btn-remover')
const alunorRemovido = document.querySelector('.aluno-removido')


btnRemover.addEventListener('click', () => {
    const codigoParaRemover = document.querySelector(".remover").value;

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Filtra o array para remover o aluno com o código especificado
    const novoArrayAlunos = alunosNoLocalStorage.filter(aluno => aluno.codigo !== codigoParaRemover);

    const alunoRemovido = alunosNoLocalStorage.filter(aluno => aluno.codigo === codigoParaRemover);

    if (alunoRemovido) {
        alunorRemovido.innerText = `Aluno removido: \n Código do aluno removido: \n  ${codigoParaRemover}`
    }

    // Atualiza o localStorage com o novo array após a remoção
    localStorage.setItem('alunos', JSON.stringify(novoArrayAlunos));

    console.log(novoArrayAlunos); // Exibe o novo array de objetos no console após a remoção

})
