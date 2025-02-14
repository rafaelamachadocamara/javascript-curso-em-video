var nome = 'Rafaela'

function carregar() {
    nomeAparecendo.innerHTML = `Desenvolvido por: ${nome}`;
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'assets/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'assets/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#515154'
    }
}


