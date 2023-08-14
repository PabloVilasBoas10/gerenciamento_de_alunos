const listarAtivosButton = document.querySelector('.listarAtivosButton')
const alunoDesativado = document.querySelector('.aluno-desativado')
const btnMobile = document.querySelector('.btn-mobile')

btnMobile.addEventListener('click', () => {
    const ul = document.querySelector('nav ul')
    ul.classList.toggle('btn-ativo')
})

listarAtivosButton.addEventListener("click", function () {
    alunoDesativado.innerHTML = "ALUNOS ATIVOS"

    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Filtra o array para listar apenas alunos ativos
    const alunosAtivos = alunosNoLocalStorage.filter(aluno => aluno.ativo);

    if (alunosAtivos.length > 0) {

        alunosAtivos.forEach(objeto => {
            const codigo = objeto.codigo;
            const nome = objeto.nome;
            const ativo = objeto.ativo;
            const elementoNome = document.createElement('p');
            elementoNome.innerHTML = `Nome: ${nome} / Código: ${codigo} / Ativo: ${ativo}`;
            alunoDesativado.appendChild(elementoNome);
        });



    } else {
        console.log("Nenhum aluno ativo encontrado.");
    }
});

const listarDesativosButton = document.querySelector('.listarDesativosButton')

listarDesativosButton.addEventListener("click", function () {
    alunoDesativado.innerHTML = "ALUNOS DESATIVADOS"
    // Recupera o array de objetos do localStorage
    const alunosNoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];

    // Filtra o array para listar apenas alunos inativos
    const alunosInativos = alunosNoLocalStorage.filter(aluno => !aluno.ativo);

    if (alunosInativos.length > 0) {

        alunosInativos.forEach(objeto => {
            const codigo = objeto.codigo;
            const nome = objeto.nome;
            const ativo = objeto.ativo;
            const elementoNome = document.createElement('p');
            elementoNome.innerHTML = `Nome: ${nome} / Código: ${codigo} / Ativo: ${ativo}`;
            alunoDesativado.appendChild(elementoNome);
        });

        // console.log("Alunos inativos:", alunosInativos);
        // alunoDesativado.innerText = JSON.stringify(alunosInativos[0].nome, null, 2);

    } else {
        console.log("Nenhum aluno inativo encontrado.");
    }
});
