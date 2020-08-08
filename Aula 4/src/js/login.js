var inputEmail = document.getElementById('email');
var inputSenha = document.getElementById('senha');
var btnEntrar = document.getElementById('btn-entrar');

btnEntrar.addEventListener('click', function(){
    
    let email  = inputEmail.value;
    let senha = inputSenha.value;

    if(!email || !senha){
        alert('Preencha todos os campos.');
        return;
    }

    if(email.toLowerCase() != "ingrid@admin" || senha != "123456"){
        alert('Email ou senha inválidos');
        return;
    }
    
    location.href = 'https://codepen.io/jcoulterdesign/pen/eJGoOx'
})