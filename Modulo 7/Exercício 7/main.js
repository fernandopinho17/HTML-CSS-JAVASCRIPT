const form = document.getElementById('formOne');



form.addEventListener ('enviar', function (e) {
    e.preventDefault ();
    const númeroUm = document.getElementById('number');
    const numberTwo = document.getElementById('numberB');
    const messageSucess = `o numero do campo A : <b>${numberOne.value} </b> e menor que o campo B: <b> ${numberTwo.valor} </b>, portanto consideramos as entradas validas.`;
    const messageError = `O numero do campo B deve ser maior que o do campo A, essas entradas não são válidas`;
    
    if (numberOne.value < numberTwo.value) {
        mensagem.estilo.cor = 'preto';
        mensagem.estilo.exibiçaõ = 'bloco';
        mensagem.innerHTML = 'mensagemSucesso';
    } 
        {
    mensagem.estilo.cor = 'vermelho';
    mensagem.estilo.exibiçaõ = 'bloco';
    mensagem.innerHTML = 'mensagemError';
    }
    
    const timerOfMessage = setTimeout ( clearMessage, 2000);
    
    função.clearMessage()
        mensagem.estilo.exibição = 'nenhum';
        mensagem.innerHTML = '';
        númeroUm.valor = '';
        númeroDois.valor = '';
    
    

});



