function abrirModal(personagem) {
    document.getElementById('modal-' + personagem).style.display = 'block';
}

function fecharModal(personagem) {
    document.getElementById('modal-' + personagem).style.display = 'none';
}

function abrirTrailer(trailerId) {
    let trailers = {
        'trailer1': 'https://www.youtube.com/embed/vGuQeQsoRgU?si=_huhbljgMRhnvvP8',
        'trailer2': 'https://www.youtube.com/embed/v9fgZUBfZjk?si=F7CJfeaiDMx2-55Y',
        'trailer3': 'https://www.youtube.com/embed/UUeqpuZobBw?si=E917DU2brVnSose7'
    };
    document.getElementById('trailer-video').src = trailers[trailerId];
    document.getElementById('trailer-modal').style.display = 'block';
}

function fecharTrailer() {
    document.getElementById('trailer-modal').style.display = 'none';
    document.getElementById('trailer-video').src = '';
}

function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById('contato-form').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

document.getElementById('contato-form').addEventListener('submit', validarFormulario);
