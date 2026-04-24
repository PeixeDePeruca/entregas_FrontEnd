const input = document.querySelector('#inputItem');
const botao = document.querySelector('#botaoAdicionar');
const lista = document.querySelector('#listaItens');


function adicionarItem() {
    const valorInput = input.value;

    //validação para não adicionar itens NULL
    if (valorInput.trim() !== "") {
        
       
        const novoItem = document.createElement('li');
        novoItem.textContent = valorInput;

        //insere o li dentro da ul (lista)
        lista.appendChild(novoItem);

        


        input.value = "";
        input.focus();
    } else {
        alert("Digite algo para ser adicionado!");
    }
}


botao.addEventListener('click', adicionarItem);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarItem();
    }
});