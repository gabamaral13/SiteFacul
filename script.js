document.addEventListener('DOMContentLoaded', () => {
    // Função que gera uma cor hexadecimal aleatória
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Função que muda a cor de fundo do body
    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    // Define um intervalo para a função ser executada a cada 100 milissegundos (0.1 segundo)
    // Esse valor pode ser alterado para piscar mais rápido ou mais devagar
    setInterval(changeBackgroundColor, 100);
});