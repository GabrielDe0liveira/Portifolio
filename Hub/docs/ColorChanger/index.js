const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Pink', 'Orange', 'Brown', 'Gray', 'Black', 'White'];
const btn = document.getElementById('btn');
const h1 = document.querySelector('h1'); // Seleciona o elemento <h1>

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    const selectedColor = colors[randomColor];
    document.body.style.background = selectedColor;
    document.getElementById("color").innerHTML = selectedColor;

    // Verifica se a cor é preta e altera a cor do texto do <h1>
    if (selectedColor === 'Black') {
        h1.style.color = 'White';
        button.style.color = 'White'; // Altera a cor do botão também
    } else {
        h1.style.color = ''; // Reseta a cor para o padrão
    }
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length); // Gera um índice aleatório
}