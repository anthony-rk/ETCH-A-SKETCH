// create an initial 16x16 grid when the page loads
let initialGridSize = 16;

// Script runs once DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event){
    createDivGrid(initialGridSize);

    document.getElementById("newGrid").addEventListener("click", refreshGrid);

    let gridElements = document.getElementsByClassName("grid");

    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener("mouseover", updateBackground);
    }
});

function createDivGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            var div = document.createElement("div");
            div.style.width = 960 / gridSize + "px";
            div.style.height = 960 / gridSize + "px";
            div.classList.add("grid");
            div.style.background = "red";

            document.getElementById("container").appendChild(div);
        }
    }
};

// function that prompts the user for new grid size
// the function then creates that new grid
function refreshGrid(){
    let newGridSize = prompt("How many boxes per side?");
    clearGrid();
    createDivGrid(newGridSize);

    let gridElements = document.getElementsByClassName("grid");

    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener("mouseover", updateBackground);
    }
};

function clearGrid(){
    removeElementsByClass('grid');
};  

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
};

function updateBackground(element) {
    this.style.background = "black";
}


