const form = document.getElementById("formCadastro")

form.addEventListener("submit" , function(event){
    event.preventDefault();

    const dados = {
        nominho: document.getElementById("Nominho").value,
        email: document.getElementById("Email").value,
        idade: document.getElementById("Idade").value,
    };

    console.log(dados)

})