
// Função para criar e adicionar a estrutura HTML dinamicamente
function criarInterface() {
    const body = document.body;

    // Container principal
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.backgroundColor = '#ffc0cb'; // Rosa claro
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.textAlign = 'center';

    // Título
    const titulo = document.createElement('h1');
    titulo.textContent = 'Olá, Bem-vinda!';
    titulo.style.fontSize = '3.5em';
    titulo.style.marginBottom = '10px';
    titulo.style.color = '#5d2a7b'; // Roxo suave

    // Texto de boas-vindas
    const texto = document.createElement('p');
    texto.textContent = 'Estamos tão felizes por você estar aqui. 🥰';
    texto.style.fontSize = '1.5em';
    texto.style.marginBottom = '20px';
    texto.style.color = '#5d2a7b'; // Roxo suave

    // Botão
    const botao = document.createElement('button');
    botao.textContent = 'Clique para interagir!';
    botao.style.backgroundColor = '#ff69b4'; // Rosa forte
    botao.style.color = 'white';
    botao.style.border = 'none';
    botao.style.padding = '20px 40px';
    botao.style.fontSize = '1.5em';
    botao.style.borderRadius = '25px';
    botao.style.cursor = 'pointer';
    botao.style.transition = 'background-color 0.3s';

    // Efeitos do botão (hover e active)
    botao.addEventListener('mouseenter', function() {
        botao.style.backgroundColor = '#ff1493'; // Rosa mais forte
    });

    botao.addEventListener('mouseleave', function() {
        botao.style.backgroundColor = '#ff69b4'; // Rosa forte
    });

    botao.addEventListener('mousedown', function() {
        botao.style.backgroundColor = '#ff82ab'; // Rosa claro no clique
    });

    botao.addEventListener('mouseup', function() {
        botao.style.backgroundColor = '#ff69b4'; // Rosa forte quando o clique termina
    });

    // Ação do botão
    botao.addEventListener('click', function() {
        alert('Você é incrível! 🌸💖');
        botao.textContent = 'Obrigada por clicar! 😊';
        botao.style.backgroundColor = '#ff82ab'; // Mudando a cor do botão
    });

    // Adicionando os elementos ao container
    container.appendChild(titulo);
    container.appendChild(texto);
    container.appendChild(botao);

    // Adicionando o container ao body
    body.appendChild(container);
}

// Função para criar laços e flores de tulipa rosa animadas
function criarElementosAnimados(event) {
    const body = document.body;

    // Criar um "laço" ou "flor de tulipa" rosa
    const tipo = Math.random() < 0.5 ? 'laco' : 'flor';
    const elemento = document.createElement('div');
    
    // Definir o estilo baseado no tipo
    if (tipo === 'flor') {
        elemento.innerHTML = '🌷'; // Emoj de tulipa rosa
        elemento.style.fontSize = `${Math.random() * 50 + 50}px`;  // Tamanho aleatório
    } else {
        elemento.innerHTML = '🎀'; // Emoj de laço
        elemento.style.fontSize = `${Math.random() * 50 + 50}px`;  // Tamanho aleatório
    }

    // Estilos iniciais
    elemento.style.position = 'absolute';
    elemento.style.top = `${event.clientY - 20}px`; // Posição onde o clique aconteceu
    elemento.style.left = `${event.clientX - 20}px`;
    elemento.style.transition = 'transform 2s ease-in-out, opacity 2s ease-out';
    elemento.style.opacity = 1;
    elemento.style.pointerEvents = 'none';

    // Definindo animações
    elemento.style.animation = `flutuar ${Math.random() * 2 + 3}s ease-in-out infinite, 
                               girar ${Math.random() * 2 + 3}s linear infinite`;
    elemento.style.fontSize = `${Math.random() * 50 + 50}px`; // Variando o tamanho

    // Criando a animação de flutuação e rotação
    body.appendChild(elemento);

    // Animação de deslocamento (subindo) e desaparecendo
    setTimeout(() => {
        elemento.style.transform = `translate(-50%, -50%) scale(2) rotate(${Math.random() * 360}deg)`;
        elemento.style.opacity = 0;
    }, 10);

    // Remover o elemento após a animação
    setTimeout(() => {
        body.removeChild(elemento);
    }, 2000); // 2 segundos (tempo da animação)
}

// Função para alterar o cursor
function alterarCursor(event) {
    const cursor = document.createElement('div');
    const tipo = Math.random() < 0.5 ? 'laco' : 'flor';
    cursor.style.position = 'absolute';
    cursor.style.top = `${event.clientY - 20}px`;
    cursor.style.left = `${event.clientX - 20}px`;

    // Definindo estilo do cursor
    if (tipo === 'flor') {
        cursor.innerHTML = '🌷';  // Tulipa rosa
        cursor.style.fontSize = '50px';
    } else {
        cursor.innerHTML = '🎀';  // Laço rosa
        cursor.style.fontSize = '50px';
    }

    cursor.style.transition = 'transform 0.1s ease';
    cursor.style.pointerEvents = 'none';

    document.body.appendChild(cursor);

    // Animação de follow the cursor
    setTimeout(() => {
        cursor.style.transform = `scale(0.5)`;
        cursor.style.opacity = 0;
    }, 500);

    setTimeout(() => {
        document.body.removeChild(cursor);
    }, 1000);
}

// Chama a função para criar a interface ao carregar a página
window.onload = criarInterface;

// Adiciona o evento de clique para gerar corações e laços na tela
document.body.addEventListener('click', criarElementosAnimados);

// Adiciona evento para o cursor "laco" ou "flor"
document.body.addEventListener('mousemove', alterarCursor);
