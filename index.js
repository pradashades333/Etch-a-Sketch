const container = document.getElementById("container");



let totalcubes = 256;

for (let i = 0; i < totalcubes; i++){
    const square = document.createElement("div");
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black"
    })
}

const clearButton = document.querySelector("#clear")

clearButton.addEventListener('click', function(){
    const allSquares = document.querySelectorAll('.square')

    allSquares.forEach(function(square){
        square.style.backgroundColor = "white"
    })
    
})


const sizeButton = document.getElementById("size")

sizeButton.addEventListener('click', function(){
    let size = parseInt(prompt("Enter the cube size"));

    container.innerHTML = '';

    
    let totalSquare = size * size;

    let squareSize = 960 / size;


    for (let i = 0; i < totalSquare; i++){
    const square = document.createElement("div");
    square.classList.add('square');
    container.appendChild(square);

    square.style.width  = squareSize + "px"
    square.style.height = squareSize + "px"

    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black"
    })
}

 
})

console.log(container)