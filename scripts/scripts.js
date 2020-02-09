// create an initial 16x16 grid when the page loads
let initialGridSize = 16;

// Script runs once DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) {
    createDivGrid(initialGridSize);

    document.getElementById("newGrid").addEventListener("click", refreshGrid);
    document.getElementById("resetGrid").addEventListener("click", resetGrid);
    
    // // these 2 below need to be fleshed out
    // document.getElementById("colorPickerButton").addEventListener("click", colorPickerButton);
    // document.getElementById("randomColors").addEventListener("click", randomColors);
    // // 2 above here are new

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
            initialBackgroundColor = "rgba(100, 100, 100, 0.1)";
            div.style.background = initialBackgroundColor;

            document.getElementById("container").appendChild(div);
        }
    }
};

// function that prompts the user for new grid size
// the function then creates that new grid
function refreshGrid() {
    let newGridSize = prompt("How many boxes per side?");
    initialGridSize = newGridSize;
    clearGrid();
    createDivGrid(newGridSize);

    let gridElements = document.getElementsByClassName("grid");

    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener("mouseover", updateBackground);
    }
};

function resetGrid() { 
    clearGrid();
    createDivGrid(initialGridSize);

    let gridElements = document.getElementsByClassName("grid");

    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener("mouseover", updateBackground);
    }
};

function clearGrid() {
    removeElementsByClass('grid');
};  

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
};

function updateBackground(element) {
    if (this.style.background == initialBackgroundColor) {
        var redAmt = Math.floor(Math.random() * 256);
        var greenAmt = Math.floor(Math.random() * 256);
        var blueAmt = Math.floor(Math.random() * 256);
        var alphaAmt = 0.9;
        var bgColor = "rgba(" + redAmt + "," + blueAmt + "," + greenAmt + "," + alphaAmt + ")";
    
        console.log(bgColor);
        this.style.background = bgColor;
   } else {
        this.style.opacity = 0.9;
        this.style.background = "black";
        console.log("hello");
   } 
};



