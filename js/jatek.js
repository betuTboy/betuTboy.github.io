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

let sack = [];

let turn = 1;

let timelimit = 60;
let currenttime;
let timeout;

let fields = [];

let draggedletter;
let parentofdraggedletter;

let popup1;

function createTd(fieldtype, parent, id) {
    let td = document.createElement("td");
    td.setAttribute("id", id);
    switch (fieldtype) {
        case '.':
            td.setAttribute("class", "normal-field empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            break;
        case '-':
            td.setAttribute("class", "rack-field empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            break;
        case '!':
            td.setAttribute("class", "wall-field");
            break;
    }
    parent.appendChild(td);
    return td;
}

function drawBoard() {
    fieldtable = document.querySelector("#board");
    fieldtable.innerHTML = '';
    for (let i = 0; i < board.length; i++) {
        fields[i] = [];
        let tr = document.createElement("tr");
        for (let j = 0; j < board[i].length; ++j) {
            let id = "fieldtable-" + i.toString() + "-" + j.toString();
            td = createTd(board[i][j], tr, id);
            fields[i].push(td);
        }
        fieldtable.appendChild(tr);
    }
}

function drawRack() {
    rackfieldtable = document.querySelector("#rack");
    rackfieldtable.innerHTML = ''
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
    ev.dataTransfer.setData("application/x-moz-node", ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.id);
    draggedletter = ev.target;
    parentofdraggedletter = draggedletter.parentElement;
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("application/x-moz-node");
    var data = ev.dataTransfer.getData("text/plain");
    appendedletter = ev.target.appendChild(document.getElementById(data));
    ev.target.setAttribute("ondragover", "");
    if (ev.target.getAttribute("class") == "normal-field empty") {
        ev.target.setAttribute("class", "normal-field occupied");
    } else if (ev.target.getAttribute("class") == "rack-field empty") {
        ev.target.setAttribute("class", "rack-field occupied");
    }
    if (ev.target != parentofdraggedletter) {
        parentofdraggedletter.setAttribute("ondragover", "allowDrop(event)");
        if (parentofdraggedletter.getAttribute("class") == "normal-field occupied") {
            parentofdraggedletter.setAttribute("class", "normal-field empty");
        } else if (parentofdraggedletter.getAttribute("class") == "rack-field occupied") {
            parentofdraggedletter.setAttribute("class", "rack-field empty");
        }
    }
    if (appendedletter.className == "letter letter-on-rack joker") {
        if (ev.target.className == "normal-field occupied") {
            createPopup(ev.target);
        } else if (ev.target.className == "rack-field occupied") {
            appendedletter.value = '*';
        }
    }
}

function setStateOfLetters() {
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; ++j) {
            if (fields[i][j].hasChildNodes()) {
                fields[i][j].children[0].setAttribute("draggable", false);
                fields[i][j].children[0].setAttribute("class", "letter letter-on-board");
            }
        }
    }
}

function loadRack() {
    let rack = [];
    let rackfields = document.querySelectorAll(".rack-field");
    let jokeronrack = false;
    let lettercount = 0;
    displayTurn();
    while (lettercount < racksize) {
        let randletter = sack[getRndInteger(0, sack.length)];
        if (randletter[0] == '*') {
            if (jokeronrack) {
                continue;
            } else jokeronrack = true;
        }
        rack.push(randletter);
        let letteri = document.createElement("input");
        let id = "letter" + turn.toString() + "-" + lettercount.toString();
        letteri.setAttribute("id", id);
        letteri.setAttribute("type", "text");
        let value = randletter[0];
        if (value == '*') {
            letteri.setAttribute("class", "letter letter-on-rack joker")
        } else {
            letteri.setAttribute("class", "letter letter-on-rack");
        }
        letteri.setAttribute("value", value);
        /*letteri.innerHTML = randletter[0].toString();*/
        letteri.setAttribute("draggable", true);
        letteri.setAttribute("ondragstart", "drag(event)");
        letteri.setAttribute("readonly", "readonly");
        letteri.setAttribute("disabled", true);
        rackfields[lettercount].appendChild(letteri)
        rackfields[lettercount].setAttribute("ondragover", "");
        lettercount++;
    }
    turn++;
}

function displayTurn() {
    t = document.querySelector("#turn");
    t.setAttribute("value", turn);
}

function emptyRack() {
    let rackfields = document.querySelectorAll(".rack-field");
    for (let i = 0; i < rackfields.length; i++) {
        let letteronrack = rackfields[i].getElementsByClassName("letter");
        if (letteronrack.length > 0) {
            rackfields[i].removeChild(letteronrack[0]);
        }
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function bindButtons() {
    let startbutton = document.querySelector("#start");
    startbutton.addEventListener("click", startGame);
    let shufflebutton = document.querySelector("#shuffle");
    shufflebutton.addEventListener("click", shuffle);
    let backbutton = document.querySelector("#back");
    backbutton.addEventListener("click", back);
    let donebutton = document.querySelector("#done");
    donebutton.addEventListener("click", getDirection);
}

function startGame() {
    turn = 1;
    displayTurn();
    drawBoard();
    drawRack();
    emptyRack();
    loadRack();
    clearInterval(timeout);
    resetTimer();
}

function back() {
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    let rackfields = document.querySelectorAll(".rack-field");
    for (let i = 0; i < lettersonrack.length; i++) {
        if (lettersonrack[i].parentElement.getAttribute("class") == "normal-field occupied") {
            lettersonrack[i].parentElement.setAttribute("class", "normal-field empty");
            lettersonrack[i].parentElement.setAttribute("ondragover", "allowDrop(event)");
        }
        for (let j = 0; j < racksize; j++) {
            if (!rackfields[j].hasChildNodes()) {
                rackfields[j].appendChild(lettersonrack[i]);
                if (lettersonrack[i].className == "letter letter-on-rack joker") {
                    lettersonrack[i].value = '*';
                }
                rackfields[j].setAttribute("class", "rack-field occupied");
                rackfields[j].setAttribute("ondragover", "");
            }
        }
    }
}

function shuffle() {
    let rackfields = document.querySelectorAll(".rack-field");
    let lettersonrack = [];
    back();
    for (let i = 0; i < rackfields.length; i++) {
        let letter = rackfields[i].getElementsByClassName("letter");
        lettersonrack.push(letter[0]);
        rackfields[i].removeChild(letter[0]);
    }
    let i = 0;
    while (lettersonrack.length > 0) {
        rand = getRndInteger(0, lettersonrack.length);
        rackfields[i].appendChild(lettersonrack[rand]);
        lettersonrack.splice(rand, 1);
        i++
    }
}

function lockOnUI() {
    let uibuttons = document.querySelectorAll(".UI-button");
    for (let i = 0; i < uibuttons.length; i++) {
        uibuttons[i].setAttribute("disabled", true);
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    console.log(lettersonrack);
    for (let j = 0; j < lettersonrack.length; j++) {
        lettersonrack[j].setAttribute("draggable", false);
    }
}

function lockOffUI() {
    let uibuttons = document.querySelectorAll(".UI-button");
    for (let i = 0; i < uibuttons.length; i++) {
        uibuttons[i].disabled = false;
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let j = 0; j < lettersonrack.length; j++) {
        lettersonrack[j].setAttribute("draggable", true);
    }
}

function getDirection() {
    setStateOfLetters();
    emptyRack();
    loadRack();
    clearInterval(timeout);
    resetTimer();
}

function validate() {

}

function createPopup(tfield) {
    lockOnUI();
    popup1 = document.createElement("div");
    popup1.setAttribute("class", "popup");
    tfield.appendChild(popup1);
    let form1 = document.createElement("form");
    form1.setAttribute("class", "popupcontent");
    popup1.appendChild(form1);
    let table1 = document.createElement("table");
    table1.setAttribute("id", "changejoker");
    form1.appendChild(table1);
    let k = 1;
    for (i = 0; i < letters.length / 7 + 1; i++) {
        let row1 = document.createElement("tr");
        table1.appendChild(row1);
        for (j = 0; j < 7 && k < letters.length; j++) {
            let td1 = document.createElement("td");
            row1.appendChild(td1);
            let input1 = document.createElement("input");
            td1.appendChild(input1);
            input1.setAttribute("type", "text");
            input1.setAttribute("class", "letter");
            input1.setAttribute("draggable", false);
            input1.setAttribute("readonly", "readonly");
            /* input1.setAttribute("disabled", false);*/
            /*input1.setAttribute("onclick", changeJoker);*/
            input1.addEventListener("click", changeJoker);
            input1.setAttribute("value", letters[k][0]);
            k++;
        }
    }
}

function changeJoker(ev) {
    tfield = popup1.parentElement;
    tfield.children[0].setAttribute("value", ev.target.value);
    popup1.remove();
    lockOffUI();
}

function timer() {
    timeout = setInterval(displayTime, 1000);
}

function displayTime() {
    let t = document.querySelector("#time");
    t.setAttribute("value", currenttime);
    if (currenttime == 0) {
        clearInterval(timeout);
        try {
            popup1.remove();
        } catch (err) { }
        back();
        emptyRack();
        loadRack();
        resetTimer();
    }
    currenttime -= 1;
}

function resetTimer() {
    let t = document.querySelector("#time");
    currenttime = timelimit;
    t.setAttribute("value", timelimit);
    timer();
}

function createSack() {
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i][1]; j++) {
            sack.push([letters[i][0], letters[i][2]]);
        }
    }
}

function initGame() {
    var div = document.createElement('div');
    if ('draggable' in div || ('ondragstart' in div && 'ondrop' in div))
        console.log("Drag and Drop API is supported!");
    bindButtons();
    createSack();
    drawBoard();
    drawRack();
}

initGame();