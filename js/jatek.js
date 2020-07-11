let board = [['.', '.', '.', '.', '.', '.', '.', '!', '.', '!', '.', '.', '.', '.', '.', '.', '.'],
['.', '!', '!', '.', '!', '!', '.', '!', '.', '!', '.', '!', '.', '!', '.', '!', '.'],
['.', '.', '.', '.', '!', '.', '.', '.', '.', '!', '.', '.', '.', '!', '.', '!', '.'],
['.', '!', '!', '!', '!', '!', '.', '!', '.', '!', '.', '!', '!', '!', '.', '.', '.'],
['.', '.', '.', '!', '.', '.', '!', '.', '.', '.', '.', '.', '.', '!', '!', '!', '.'],
['.', '!', '.', '!', '.', '!', '.', '!', '.', '!', '!', '!', '.', '!', '.', '!', '.'],
['.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.'],
['!', '!', '!', '!', '!', '!', '.', '!', '!', '!', '.', '!', '.', '!', '!', '!', '!'],
['.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.'],
['!', '!', '!', '!', '.', '!', '.', '!', '!', '!', '.', '!', '!', '!', '!', '!', '!'],
['.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.'],
['.', '!', '.', '!', '.', '!', '!', '!', '.', '!', '.', '!', '.', '!', '.', '!', '.'],
['.', '!', '!', '!', '.', '.', '.', '.', '.', '.', '!', '.', '.', '!', '.', '.', '.'],
['.', '.', '.', '!', '!', '!', '.', '!', '.', '!', '.', '!', '!', '!', '!', '!', '.'],
['.', '!', '.', '!', '.', '.', '.', '!', '.', '.', '.', '.', '!', '.', '.', '.', '.'],
['.', '!', '.', '!', '.', '!', '.', '!', '.', '!', '.', '!', '!', '.', '!', '!', '.'],
['.', '.', '.', '.', '.', '.', '.', '!', '.', '!', '.', '.', '.', '.', '.', '.', '.']];

let letters = [['*', 30, 1,],
['A', 8, 1],
['Á', 6, 1],
['B', 2, 1],
['C', 2, 1],
['D', 3, 1],
['E', 11, 1],
['É', 4, 1],
['F', 2, 1],
['G', 4, 1],
['H', 2, 1],
['I', 5, 1],
['Í', 1, 1],
['J', 1, 1],
['K', 5, 1],
['L', 9, 1],
['M', 3, 1],
['N', 5, 1],
['O', 6, 1],
['Ó', 2, 1],
['Ö', 2, 1],
['Ő', 2, 1],
['P', 2, 1],
['R', 7, 1],
['S', 10, 1],
['T', 10, 1],
['U', 2, 1],
['Ú', 1, 1],
['Ü', 1, 1],
['Ű', 1, 1],
['V', 2, 1],
['Y', 2, 1],
['Z', 7, 1]];

let racksize = 12;

function createTd(fieldtype, parent, id) {
    let td = document.createElement("td");
    td.setAttribute("id", id);
    switch (fieldtype) {
        case '.':
            td.setAttribute("class", "normal-field");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            break;
        case '-':
            td.setAttribute("class", "rack-field");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            break;
        case '!':
            td.setAttribute("class", "wall-field");
            break;
    }
    parent.appendChild(td);
}

function drawBoard() {
    fieldtable = document.querySelector("#board");
    for (let i = 0; i < board.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < board[i].length; ++j) {
            let id = "fieldtable-" + i.toString() + "-" + j.toString();
            createTd(board[i][j], tr, id);
        }
        fieldtable.appendChild(tr);
    }
}

function drawRack() {
    rackfieldtable = document.querySelector("#rack");
    let tr = document.createElement("tr");
    for (let i = 0; i < racksize; i++) {
        let id = "rackfieldtable-" + i.toString() + "-0";
        createTd('-', tr, id);
    }
    rackfieldtable.appendChild(tr);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}

function loadRack(sack) {
    let rack = [];
    let rackfields = document.querySelectorAll(".rack-field");
    let jokeronrack = false;
    let lettercount = 0;
    while (lettercount < racksize) {
        let randletter = sack[getRndInteger(0, sack.length)];
        if (randletter[0] == '*') {
            if (jokeronrack) {
                continue;
            } else jokeronrack = true;
        }
        rack.push(randletter);
        let letterbutton = document.createElement("input");
        let id= "lbutton"+lettercount.toString();
        letterbutton.setAttribute("id",id);
        letterbutton.setAttribute("class","letter-button");
        letterbutton.setAttribute("type","text");
        let value= randletter[0];
        letterbutton.setAttribute("value",value)
        letterbutton.setAttribute("dragable",true);
        letterbutton.setAttribute("ondragstart","drag(event)");
        letterbutton.setAttribute("disabled",true);
        rackfields[lettercount].appendChild(letterbutton)
        lettercount++;
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function startGame() {
    var div = document.createElement('div');
    if ('draggable' in div || ('ondragstart' in div && 'ondrop' in div))
        console.log("Drag and Drop API is supported!");
    let sack = [];
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i][1]; j++) {
            sack.push([letters[i][0], letters[i][2]]);
        }
    }
    drawBoard();
    drawRack();
    loadRack(sack);
}

startGame();