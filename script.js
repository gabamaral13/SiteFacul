document.addEventListener('DOMContentLoaded', () => {
    // --- Funções para o fundo piscante ---
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    setInterval(changeBackgroundColor, 200);

    // --- Lógica para a imagem flutuante ---
    const floatingImage = document.getElementById('floatingImage');

    let posX = 0;
    let posY = 0;
    let directionX = 1;
    let directionY = 1;
    const speed = 3;

    function animateFloatingImage() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const imageWidth = floatingImage.offsetWidth;
        const imageHeight = floatingImage.offsetHeight;

        // Atualiza a posição X
        posX += directionX * speed;
        if (posX + imageWidth > screenWidth || posX < 0) {
            directionX *= -1;
            posX = Math.max(0, Math.min(posX, screenWidth - imageWidth));
        }

        // Atualiza a posição Y
        posY += directionY * speed;
        if (posY + imageHeight > screenHeight || posY < 0) {
            directionY *= -1;
            posY = Math.max(0, Math.min(posY, screenHeight - imageHeight));
        }

        floatingImage.style.left = posX + 'px';
        floatingImage.style.top = posY + 'px';

        requestAnimationFrame(animateFloatingImage);
    }

    setTimeout(() => {
        posX = Math.random() * (window.innerWidth - floatingImage.offsetWidth);
        posY = Math.random() * (window.innerHeight - floatingImage.offsetHeight);
        floatingImage.style.left = posX + 'px';
        floatingImage.style.top = posY + 'px';

        // Inicia o loop de animação
        animateFloatingImage();
    }, 100); // Pequeno atraso para garantir que a imagem já tenha sido carregada
});
