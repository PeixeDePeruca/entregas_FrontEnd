const input = document.querySelector('#inputItem');
const botaoAdicionar = document.querySelector('#botaoRemover');
const lista = document.querySelector('#listaItens');

function adicionarItem() {
    const valorInput = input.value.trim();

    if (valorInput !== "") {
        // 1. Criar o elemento <li>
        const novoItem = document.createElement('li');
        
        // 2. Definir o texto do item diretamente no li
        novoItem.textContent = valorInput;

        // 3. Criar o botão "Remover" individual
        const botaoRemoverIndividual = document.createElement('button');
        botaoRemoverIndividual.textContent = "Remover";
        botaoRemoverIndividual.style.marginLeft = "10px";

        // 4. Evento para remover o item quando o botão for clicado
        botaoRemoverIndividual.addEventListener('click', () => {
            lista.removeChild(novoItem);
        });

        // 5. Inserir o botão dentro do <li> e o <li> na <ul>
        novoItem.appendChild(botaoRemoverIndividual);
        lista.appendChild(novoItem);

        // 6. Limpar e focar o input
        input.value = "";
        input.focus();
    } else {
        alert("Digite algo para adicionar!");
    }
}

// Ouvintes de Eventos
botaoAdicionar.addEventListener('click', adicionarItem);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarItem();
    }
});