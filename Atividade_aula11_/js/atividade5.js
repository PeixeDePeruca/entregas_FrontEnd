const input = document.getElementById("inputItem");
const botao = document.getElementById("botaoRemover");
const lista = document.getElementById("listaItens");


document.addEventListener("DOMContentLoaded", carregarTarefas);



botao.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const novaTarefa = {
        texto: input.value,
        id: Date.now()
    };

    adicionarNaTela(novaTarefa);
    salvarTarefa(novaTarefa);
    input.value = "";
});



function adicionarNaTela(tarefa) {
    const li = document.createElement("li");
    li.setAttribute("data-id", tarefa.id);
    
    li.innerHTML = `
        <span class="texto-tarefa">${tarefa.texto}</span>
        <button class="btn-check">Concluir</button>
        <button class="btn-remover">Remover</button>
    `;


    li.querySelector(".btn-check").addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("concluido");
    });


    li.querySelector(".btn-remover").addEventListener("click", (e) => {
        const id = e.target.parentElement.getAttribute("data-id");
        e.target.parentElement.remove();
        removerDoLocalStorage(id);
    });


    lista.appendChild(li);
}



function salvarTarefa(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem("lista") || "[]");
    tarefas.push(tarefa);
    localStorage.setItem("lista", JSON.stringify(tarefas));
}


function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem("lista") || "[]");
    tarefas.forEach(t => adicionarNaTela(t));
}


function removerDoLocalStorage(id) {
    let tarefas = JSON.parse(localStorage.getItem("lista") || "[]");
    tarefas = tarefas.filter(t => t.id != id);
    localStorage.setItem("lista", JSON.stringify(tarefas));
}