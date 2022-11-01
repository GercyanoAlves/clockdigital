function msn(){
    var nome = prompt("Digite seu nome: ");

    var hoje = new Date();
    var agora = hoje.getHours();
    var msg;
    if(agora >= 18){
        msg = "Boa noite \n" + nome;
    }else if(agora >= 12){
        msg = "Boa tarde" + nome;
    }else if (agora >= 0){
        msg = "Bom dia" + nome;
    }else{
        msg = "Bem-Vindo"
    }
    alert(msg);
}