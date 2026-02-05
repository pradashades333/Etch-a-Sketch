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

console.log(container)