// Ação de eventos sobre o botão menu da tag nav (mobile).
openMenu.addEventListener('click', () => {
    menu.style.display = "flex";
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = "0";
        openMenu.style.display = 'none';
    }, 10);
});

// Ação de eventos sobre o botão X da tag nav (mobile).
closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';

    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
});

// Função para criar flocos de neve
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerText = '❄';

    // Posição inicial aleatória
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    // Animação de queda
    const fallDuration = Math.random() * 3 + 2; // Entre 2 e 5 segundos
    snowflake.animate(
        [
            { transform: 'translateY(0)' },
            { transform: 'translateY(100vh)' }
        ],
        {
            duration: fallDuration * 1000,
            easing: 'linear',
            fill: 'forwards'
        }
    );

    // Remover floco de neve após a animação
    setTimeout(() => {
        snowContainer.removeChild(snowflake);
    }, fallDuration * 1000);
}

// Criar flocos de neve a cada 200ms
setInterval(createSnowflake, 200);
