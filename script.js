const form = document.getElementById("form");
const numeroA = document.getElementById("password");
const numeroB = document.getElementById("password-confimation");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputPassword();
    checkInputPasswordConfimation();

})

function checkInputPassword(){
    const passwordValue = numeroA.value;

    if(passwordValue ===""){
    }else if(passwordValue.length < 5){
        alert("O numero A não pode ser maior que o B");
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputPasswordConfimation(){
    const passwordValue = numeroA.value;
    const confimationPasswordValue = numeroB.value;

    if(confimationPasswordValue ===""){
    }else if(confimationPasswordValue.length > 8){
        alert("Parabens, foi preenchido com sucesso");
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }


}