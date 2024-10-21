const boxContainer = document.getElementById('box-container');
const text = document.getElementById('text');
const button = document.getElementById('button');
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Grey', 'Purple', 'Orange', 'Pink', 'Brown',]

button.addEventListener('click', function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    boxContainer.style.backgroundColor = randomColor;
    text.innerText = randomColor;
})