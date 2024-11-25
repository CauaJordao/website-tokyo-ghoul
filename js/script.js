
// Alternar entre o modo claro e escuro
function alternarTema() {
    // Alterna a classe "dark-mode" no body
    document.body.classList.toggle('dark-mode');

    // Adiciona ou remove a classe "dark-mode" nos links de navegação
    const links = document.querySelectorAll('header nav a');
    links.forEach(link => {
        link.classList.toggle('dark-mode');
    });

    // Adiciona ou remove a classe "dark-mode" nos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });

    // Adiciona ou remove a classe "dark-mode" nas personagens
    const personagens = document.querySelectorAll('.personagem');
    personagens.forEach(personagem => {
        personagem.classList.toggle('dark-mode');
    });

    // Adiciona ou remove a classe "dark-mode" nos episódios
    const episodios = document.querySelectorAll('.episodio');
    episodios.forEach(episodio => {
        episodio.classList.toggle('dark-mode');
    });

    // Salvar a preferência no armazenamento local
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
}

// Carregar o tema preferido do armazenamento local
window.onload = function () {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
        
        // Aplica o tema escuro aos links de navegação
        const links = document.querySelectorAll('header nav a');
        links.forEach(link => link.classList.add('dark-mode'));

        // Aplica o tema escuro aos botões
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.classList.add('dark-mode'));

        // Aplica o tema escuro às personagens
        const personagens = document.querySelectorAll('.personagem');
        personagens.forEach(personagem => personagem.classList.add('dark-mode'));

        // Aplica o tema escuro aos episódios
        const episodios = document.querySelectorAll('.episodio');
        episodios.forEach(episodio => episodio.classList.add('dark-mode'));
    }
};

// Carregar o tema preferido do armazenamento local
window.onload = function () {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
    }
};


// Modais de personagens
function abrirModal(personagem) {
    document.getElementById('modal-' + personagem).style.display = 'block';
}

function fecharModal(personagem) {
    document.getElementById('modal-' + personagem).style.display = 'none';
}

// Modal de trailer
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

// Formulário de contato
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
