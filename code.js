const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var arraySize = 200;
var time = 1;
var arr = new Array(arraySize);
var j = 0;
var position = 0;
createRandomArray();

function createRandomArray() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (100 / arr.length) * i;
    }
    arr = shuffle(arr);
}

function shuffle(array) {
    var index = [];
    for (var i = 0; i < arr.length; i++) {
        index[i] = i;
    }
    var shuffledArray = [];
    var i = 0;
    while (index.length > 0) {
        var randomVariable = Math.floor(Math.random() * index.length);
        var nextIndex = index[randomVariable];
        index.splice(randomVariable, 1);
        shuffledArray[i] = arr[nextIndex];
        i++;
    }
    return shuffledArray;
}

selSort();

function selSort() {
    position = 0;
    var interval = setInterval(() => {
        var smallestIndex = position;
        for (j = position; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) smallestIndex = j;
            draw();
        }
        if (arr[smallestIndex] < arr[position]) {
            swap(smallestIndex, position);
        }
        if (position > arr.length) {
            clearInterval(interval)
        }
        draw();
        position++;
    }, time);
}

function swap(a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

draw();

function draw() {
    var blockWidth = canvas.width / arraySize;
    var blockHegithScale = canvas.height / 100;

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    for (let i = 0; i < arr.length; i++) {
        /* Colors */
        ctx.fillStyle = "white";
        if (i == position) ctx.fillStyle = "red";
        if (i == j) ctx.fillStyle = "green";
        var x = i * blockWidth;
        var y = (100 * blockHegithScale) - (arr[i] * blockHegithScale);
        var height = (arr[i] * blockHegithScale);
        var width = blockWidth;
        ctx.fillRect(x, y, width, height);
        
    }
}