
const board_1 = [['!', '!', '3W', '!', '!', '!', '2W', '3L', '!', '20', '!', '3L', '2W', '!', '!', '!', '3W', '!', '!'],
['!', '2L', '.', '!', '3L', '.', '.', '.', '.', '.', '.', '.', '.', '.', '3L', '!', '.', '2L', '!'],
['3W', '.', '2L', '.', '.', '.', '.', '.', '.', '3L', '.', '.', '.', '.', '.', '.', '2L', '.', '3W'],
['!', '!', '.', '2W', '.', '.', '.', '2L', '.', '.', '.', '2L', '.', '.', '.', '2W', '.', '!', '!'],
['!', '3L', '.', '.', '2L', '.', '.', '.', '2W', '-20', '2W', '.', '.', '.', '2L', '.', '.', '3L', '!'],
['!', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '!'],
['2W', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '2W'],
['3L', '.', '.', '2L', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2L', '.', '.', '3L'],
['!', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '!'],
['20', '.', '3L', '.', '-20', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-20', '.', '3L', '.', '20'],
['!', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '!'],
['3L', '.', '.', '2L', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2L', '.', '.', '3L'],
['2W', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '2W'],
['!', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '2W', '.', '.', '.', '.', '.', '!'],
['!', '3L', '.', '.', '2L', '.', '.', '.', '2W', '-20', '2W', '.', '.', '.', '2L', '.', '.', '3L', '!'],
['!', '!', '.', '2W', '.', '.', '.', '2L', '.', '.', '.', '2L', '.', '.', '.', '2W', '.', '!', '!'],
['3W', '.', '2L', '.', '.', '.', '.', '.', '.', '3L', '.', '.', '.', '.', '.', '.', '2L', '.', '3W'],
['!', '2L', '.', '!', '3L', '.', '.', '.', '.', '.', '.', '.', '.', '.', '3L', '!', '.', '2L', '!'],
['!', '!', '3W', '!', '!', '!', '2W', '3L', '!', '20', '!', '3L', '2W', '!', '!', '!', '3W', '!', '!']];

const fieldsobj = { ".": 1, "2L": 1, "3L": 1, "2W": 1, "3W": 1, "20": 1, "-20": 1, "!": 0 };

const letters_hun = [['*', 10, 1],
['A', 8, 1],
['Á', 6, 1],
['B', 2, 2],
['C', 2, 4],
['CS', 1, 4],
['D', 3, 3],
['E', 11, 1],
['É', 4, 2],
['F', 2, 4],
['G', 4, 2],
['GY', 1, 4],
['H', 2, 3],
['I', 5, 1],
['Í', 1, 4],
['J', 1, 4],
['K', 5, 1],
['L', 9, 1],
['LY', 1, 4],
['M', 3, 1],
['N', 5, 1],
['NY', 1, 4],
['O', 6, 1],
['Ó', 2, 2],
['Ö', 2, 3],
['Ő', 2, 4],
['P', 2, 3],
['Q', 0, 4],
['R', 7, 1],
['S', 10, 1],
['SZ', 1, 4],
['T', 10, 1],
['TY', 1, 4],
['U', 2, 3],
['Ú', 1, 4],
['Ü', 1, 3],
['Ű', 1, 4],
['V', 2, 3],
['W', 0, 4],
['X', 0, 4],
['Y', 2, 4],
['Z', 7, 2],
['ZS', 1, 4]];

const letters_eng = [['*', 10, 1],
['A', 11, 1],
['B', 3, 2],
['C', 3, 4],
['D', 7, 2],
['E', 15, 1],
['F', 3, 4],
['G', 7, 2],
['H', 4, 3],
['I', 6, 1],
['J', 2, 4],
['K', 3, 4],
['L', 8, 1],
['M', 5, 1],
['N', 7, 1],
['O', 8, 1],
['P', 3, 3],
['Q', 1, 4],
['R', 10, 1],
['S', 8, 1],
['T', 6, 1],
['U', 5, 3],
['V', 3, 3],
['W', 3, 3],
['X', 2, 4],
['Y', 3, 4],
['Z', 1, 4]];


const startfieldx = 9;
const startfieldy = 9;
let firstmove = true;
let letters;
let language = 'hun';
let dictionary = [];
let partsofdictionary = {};

const racksize = 8;

let sack = [];
let slettersonrackoriginal;
let lettersinsack = 0;

let turns;

let timelimit = 120;
let currenttime = 0;
let timeout;
let progressbar;

let fields = [];
let aifields = [];
let rackfields = [];
let fieldsize = 29;
let rackfieldsize = 29;

let height;
let width;
let fontsizeletter;
let fontsizebutton;
let fontsizelabel;
let numberlabelsize;
let numberfontsize;

let draggedletter;
let parentofdraggedletter;

let popup1;
let resultsdiv;
let idleturns = 0;
const limitofidleturns = 3;

let score = 0;
let aiscore = 0;

let ingame = false;

let wordsingame = [];

let mode = "draganddrop";

let arrowposition = [];

let aivocabulary;
let aiusedletters;
let aistrength;
let selectedaimove = [];
let bestmove = [];

let rect;

let touchdevice;

function createTd(fieldtype, parent, id) {
    let td = document.createElement("td");
    td.setAttribute("id", id);
    switch (fieldtype) {
        case '.':
            td.setAttribute("class", "normal-field empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            break;
        case '-':
            td.setAttribute("class", "rack-field empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            break;
        case '!':
            td.setAttribute("class", "wall-field");
            break;
        case '2L':
            td.setAttribute("class", "normal-field bonus-field-2L empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            td.style.backgroundImage = "url('img/bonus-field-2l.svg')"
            break;
        case '3L':
            td.setAttribute("class", "normal-field bonus-field-3L empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            td.style.backgroundImage = "url('img/bonus-field-3l.svg')"
            break;
        case '2W':
            td.setAttribute("class", "normal-field bonus-field-2W empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            td.style.backgroundImage = "url('img/bonus-field-2w.svg')"
            break;
        case '3W':
            td.setAttribute("class", "normal-field bonus-field-3W empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            td.style.backgroundImage = "url('img/bonus-field-3w.svg')"
            break;
        case '20':
            td.setAttribute("class", "normal-field bonus-field-20 empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            td.style.backgroundImage = "url('img/bonus20.svg')"
            break;
        case '-20':
            td.setAttribute("class", "normal-field penalty-field-20 empty");
            td.setAttribute("ondrop", "drop(event)");
            td.setAttribute("ondragover", "allowDrop(event)");
            td.setAttribute("onclick", "changeMode(event)");
            td.addEventListener('dragenter', onDragEnter);
            td.addEventListener('dragleave', onDragLeave);
            td.style.backgroundImage = "url('img/penalty-20.svg')"
            break;
    }
    parent.appendChild(td);
    return td;
}

function drawBoard(board1) {
    let fieldtable = document.querySelector("#board");
    fieldtable.innerHTML = "";
    let fieldtype;
    for (let i = 0; i < board1.length; i++) {
        fields[i] = [];
        let tr = document.createElement("tr");
        for (let j = 0; j < board1[i].length; ++j) {
            let id = "fieldtable-" + i.toString() + "-" + j.toString();
            td = createTd(board1[i][j], tr, id);
            fields[i].push(td);
        }
        fieldtable.appendChild(tr);
    }
}

function drawRack() {
    rackfields = [];
    let rackfieldtable = document.querySelector("#rack");
    rackfieldtable.innerHTML = '';
    let tr = document.createElement("tr");
    for (let i = 0; i < racksize; i++) {
        let id = "rackfieldtable-" + i.toString() + "-0";
        td = createTd('-', tr, id);
        rackfields.push(td);
    }
    rackfieldtable.appendChild(tr);
}

// Mouse click  ------------------------------------------------------------------------------------

function changeMode(ev) {
    if (ev.target.nodeName != "TD" && ev.target.parentElement != arrowposition[0]) return;
    if (ev.target.classList.contains("normal-field") && ev.target.classList.contains("empty")) {
        if (!ev.target.hasChildNodes()) {
            mode = "mouseclick";
            removeElements(".numberofwords");
            tryToRemoveArrow();
            arrowposition = [ev.target, "right"];
        }
    }
    changeDirection();
}

function changeDirection() {
    if (!ingame) return;
    if (arrowposition[0].innerHTML == '' || arrowposition[1] == "down") {
        arrowposition[1] = "right";
        arrowposition[0].innerHTML = `<b id="arrow" class="arrow">&#8594</b>`;
        document.querySelector("#arrow").style.fontSize = fontsizeletter;
    } else {
        arrowposition[1] = "down";
        arrowposition[0].innerHTML = `<b id="arrow" class="arrow">&#8595</b>`;
        document.querySelector("#arrow").style.fontSize = fontsizeletter;
    }
}

function placeLetter(ev) {
    let parentofclickedletter = ev.target.parentElement;
    if (mode == "mouseclick" && arrowposition != []) {
        //if ((ev.target.className == "letter letter-on-rack" || ev.target.className == "letter letter-on-rack joker") && arrowposition != []) {
        if (ev.target.classList.contains("letter-on-rack") && arrowposition != []) {
            tryToRemoveArrow();
            arrowposition[0].appendChild(ev.target);
            document.activeElement.blur();
            arrowposition[0].setAttribute("ondragover", "");
            if (arrowposition[0].classList.contains("empty")) {
                arrowposition[0].classList.remove("empty");
                arrowposition[0].classList.add("occupied");
            }
            parentofclickedletter.setAttribute("ondragover", "allowDrop(event)");
            if (parentofclickedletter.classList.contains("occupied")) {
                parentofclickedletter.classList.remove("occupied");
                parentofclickedletter.classList.add("empty");
            }
            //if (ev.target.className == "letter letter-on-rack joker") {
            if (ev.target.classList.contains("joker") && ev.target.classList.contains("letter-on-rack")) {
                createPopup(ev.target.parentElement);
            }
            testNewWords();
            stepField();
        }
    }
}

function stepField() {
    let rindex;
    let cindex;
    let found = false;
    for (rindex = 0; rindex < fields.length; rindex++) {
        cindex = fields[rindex].indexOf(arrowposition[0]);
        if (cindex > -1) {
            found = true;
        }
        if (found) break;
    }
    if (arrowposition[1] == "right") {
        if (cindex == fields[0].length - 1) {
            arrowposition = [];
            return;
        }
        let k = 1;
        while (cindex + k < fields[0].length) {
            if (fields[rindex][cindex + k].classList.contains("normal-field") && fields[rindex][cindex + k].classList.contains("empty") &&
                !fields[rindex][cindex + k].hasChildNodes()) {
                arrowposition[0] = fields[rindex][cindex + k];
                arrowposition[0].innerHTML = `<b id="arrow" class="arrow">&#8594</b>`;
                document.querySelector("#arrow").style.fontSize = fontsizeletter;
                break;
            } else {
                if (fields[rindex][cindex + k].className == "wall-field") {
                    arrowposition = [];
                    break;
                } else {
                    k++;
                }
            }
        }
    }
    if (arrowposition[1] == "down") {
        if (rindex == fields.length - 1) {
            arrowposition = [];
            return;
        }
        let k = 1;
        while (rindex + k < fields.length) {
            if (fields[rindex + k][cindex].classList.contains("normal-field") && fields[rindex + k][cindex].classList.contains("empty") &&
                !fields[rindex + k][cindex].hasChildNodes()) {
                arrowposition[0] = fields[rindex + k][cindex];
                arrowposition[0].innerHTML = `<b id="arrow" class="arrow">&#8595</b>`;
                document.querySelector("#arrow").style.fontSize = fontsizeletter;
                break;
            } else {
                if (fields[rindex + k][cindex].className == "wall-field") {
                    arrowposition = [];
                    break;
                } else {
                    k++;
                }
            }
        }
    }
}

function tryToRemoveArrow() {
    let arrow = document.querySelector("#arrow");
    if (arrow) {
        arrow.remove();
    }
}

// Drag and Drop ------------------------------------------------------------------------------------

function allowDrop(ev) {
    ev.preventDefault();
}

function onDragLeave(ev) {
    if (ev.target.classList.contains("bonus-field-20")) {
        ev.target.style.backgroundImage = "url('img/bonus20.svg')"
    } else if (ev.target.classList.contains("penalty-field-20")) {
        ev.target.style.backgroundImage = "url('img/penalty-20.svg')"
    } else if (ev.target.classList.contains("bonus-field-2L")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-2l.svg')"
    } else if (ev.target.classList.contains("bonus-field-3L")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-3l.svg')"
    } else if (ev.target.classList.contains("bonus-field-2W")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-2w.svg')"
    } else if (ev.target.classList.contains("bonus-field-3W")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-3w.svg')"
    } else ev.target.style.background = '';
}

function onDragEnter(ev) {
    const target = ev.target;
    if (target) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
        target.style.backgroundImage = "";
        target.style.backgroundColor = "gray";
    }
}

function drag(ev) {
    tryToRemoveArrow();
    removeElements(".available-score");
    arrowposition = [];
    mode = "draganddrop";
    if (ev.target.classList.contains("letter-on-board")) return;
    ev.dataTransfer.setData("application/x-moz-node", ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.id);
    draggedletter = ev.target;
    parentofdraggedletter = draggedletter.parentElement;
    /*if ( parentofdraggedletter.classList.contains("bonus-field-20")) {
        parentofdraggedletter.style.backgroundImage = "url('img/bonus20.svg')"
    } else if (parentofdraggedletter.classList.contains("penalty-field-20")) {
        parentofdraggedletter.style.backgroundImage = "url('img/penalty-20.svg')"
    }*/
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("application/x-moz-node");
    var data = ev.dataTransfer.getData("text/plain");
    //if (ev.target.className == "letter letter-on-rack" || ev.target.className == "letter letter-on-rack joker") return;
    if (ev.target.classList.contains("letter-on-rack")) return;
    if (ev.target.hasChildNodes()) return;
    appendedletter = ev.target.appendChild(document.getElementById(data));
    ev.target.setAttribute("ondragover", "");
    /*if (ev.target.getAttribute("class") == "normal-field empty") {
        ev.target.setAttribute("class", "normal-field occupied");
    } else if (ev.target.getAttribute("class") == "rack-field empty") {
        ev.target.setAttribute("class", "rack-field occupied");
        appendedletter.style.color = "black";                          
    }*/
    if (ev.target.classList.contains("empty")) {
        ev.target.classList.remove("empty");
        ev.target.classList.add("occupied");
        if (ev.target.classList.contains("rack-field")) appendedletter.style.color = "black";
    }
    if (ev.target != parentofdraggedletter) {
        parentofdraggedletter.setAttribute("ondragover", "allowDrop(event)");
        /*if (parentofdraggedletter.getAttribute("class") == "normal-field occupied") {
            parentofdraggedletter.setAttribute("class", "normal-field empty");
        } else if (parentofdraggedletter.getAttribute("class") == "rack-field occupied") {
            parentofdraggedletter.setAttribute("class", "rack-field empty");
        }*/
        if (parentofdraggedletter.classList.contains("occupied")) {
            parentofdraggedletter.classList.remove("occupied");
            parentofdraggedletter.classList.add("empty");
        }
    }
    if (parentofdraggedletter.classList.contains("bonus-field-20")) {
        parentofdraggedletter.style.backgroundImage = "url('img/bonus20.svg')"
    } else if (parentofdraggedletter.classList.contains("penalty-field-20")) {
        parentofdraggedletter.style.backgroundImage = "url('img/penalty-20.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-2L")) {
        parentofdraggedletter.style.backgroundImage = "url('img/bonus-field-2l.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-3L")) {
        parentofdraggedletter.style.backgroundImage = "url('img/bonus-field-3l.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-2W")) {
        parentofdraggedletter.style.backgroundImage = "url('img/bonus-field-2w.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-3W")) {
        parentofdraggedletter.style.backgroundImage = "url('img/bonus-field-3w.svg')"
    } else parentofdraggedletter.style.background = "";
    if (ev.target.classList.contains("bonus-field-20")) {
        ev.target.style.backgroundImage = "url('img/bonus20.svg')"
    } else if (ev.target.classList.contains("penalty-field-20")) {
        ev.target.style.backgroundImage = "url('img/penalty-20.svg')"
    } else if (ev.target.classList.contains("bonus-field-2L")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-2l.svg')"
    } else if (ev.target.classList.contains("bonus-field-3L")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-3l.svg')"
    } else if (ev.target.classList.contains("bonus-field-2W")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-2w.svg')"
    } else if (ev.target.classList.contains("bonus-field-3W")) {
        ev.target.style.backgroundImage = "url('img/bonus-field-3w.svg')"
    } else ev.target.style.background = "";
    //ev.target.style.background = "";
    //if (appendedletter.className == "letter letter-on-rack joker") {
    if (appendedletter.classList.contains("joker")) {
        if (ev.target.classList.contains("normal-field")) {
            createPopup(ev.target);
            //} else if (ev.target.className == "rack-field occupied") {
        } else if (ev.target.classList.contains("rack-field") && ev.target.classList.contains("occupied")) {
            appendedletter.value = '*';
            setLetterRadius(appendedletter, 1);
        }
    }
    testNewWords();
}

//-----------------------------------------------------------------------------------------

function setStateOfLetters() {
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; ++j) {
            if (fields[i][j].hasChildNodes()) {
                fields[i][j].children[0].draggable = false;
                fields[i][j].children[0].disabled = true;
                fields[i][j].children[0].setAttribute("class", "letter letter-on-board old");
                fields[i][j].children[0].style.color = "black";
            }
        }
    }
}

function loadRack() {
    lockOnUI();
    //gamecontainer = document.querySelector("#game-container");
    //gamecontainer.style.cursor  = 'wait';
    let randomletters = drawLetters();
    for (let lettercount = 0; lettercount < randomletters.length; lettercount++) {
        for (let rackfield of rackfields) {
            if (rackfield.classList.contains("empty")) {
                //let value = randomletters[lettercount][0];
                let letteri = createLetter(lettercount, randomletters[lettercount]);
                rackfield.appendChild(letteri);
                rackfield.setAttribute("ondragover", "");
                rackfield.setAttribute("class", "rack-field occupied");
                break;
            }
        }
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    slettersonrackoriginal = [];
    for (let letter of lettersonrack) {
        slettersonrackoriginal.push(letter.value);
    }
    //aiMove();
    createAIFields();
    lockOffUI();
    //gamecontainer.style.cursor  = 'auto';
}

function createLetter(lettercount, randomletter) {
    let letteri = document.createElement("input");
    let id = "letter" + turns.toString() + "-" + lettercount.toString();
    letteri.setAttribute("id", id);
    /*letteri.style.backgroundImage = "url('img/letterbackground.svg')"*/
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        letteri.setAttribute("type", "text");
    } else {
        letteri.setAttribute("type", "button");
    }
    letteri.setAttribute("inputmode", "none");
    if (randomletter[0] == '*') {
        letteri.setAttribute("class", "letter letter-on-rack joker");
    } else letteri.setAttribute("class", "letter letter-on-rack");
    letteri.setAttribute("value", randomletter[0]);
    letteri.draggable = true;
    letteri.setAttribute("ondragstart", "drag(event)");
    letteri.setAttribute("onclick", "placeLetter(event)");
    letteri.setAttribute("onkeydown", "return false");
    letteri.readonly = true;
    letteri.style.fontSize = Math.floor((fieldsize - 2) * 0.7).toString() + "px";
    //letteri.setAttribute("border-radius", "20%");
    setLetterRadius(letteri, randomletter[1]);
    //console.log("randomletter", randomletter)

    /*let multiplier = randomMultiplier();
    if (multiplier == 2){
        letteri.classList.add("x2");
    }else if (multiplier == 3) letteri.classList.add("x3");*/
    return letteri;
}

function setLetterRadius(letteri, pointvalue) {
    switch (pointvalue) {
        case 1:
            letteri.style.borderRadius = "25% 0 0 0";
            break;
        case 2:
            letteri.style.borderRadius = "25% 25% 0 0";
            break;
        case 3:
            letteri.style.borderRadius = "25% 25% 25% 0";
            break;
        case 4:
            letteri.style.borderRadius = "25% 25% 25% 25%";
            break;
    }
}

function drawLetters() {
    if (lettersinsack == 0) return [];
    let j = 0;
    let rand;
    randomletters = [];
    let lettersonrackobj = {};
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let i = 0; i < lettersonrack.length; i++) {
        if (lettersonrack[i].value in lettersonrackobj) {
            lettersonrackobj[lettersonrack[i].value]++;
        } else lettersonrackobj[lettersonrack[i].value] = 1;
    }
    while (j < racksize && lettersinsack > 0) {
        //console.log("rackfield", rackfields[j].classList) 
        if (rackfields[j].classList.contains("empty")) {
            while (1) {
                rand = getRndInteger(0, sack.length);
                if (sack[rand][1] == "used") {
                    continue;
                } else {
                    //console.log("lettersonrackobj", lettersonrackobj)
                    if (lettersonrackobj[sack[rand][0]] == 2) {
                        let lettersinsackobj = differentLettersInSack();
                        if (Object.keys(lettersinsackobj).length > 5) {
                            //console.log("van már kettő belőle, és van még elég betű a zsákban", lettersinsackobj, Object.keys(lettersinsackobj).length)
                            continue;
                        } else {
                            //console.log("van már kettő belőle, de nincs már elég betű a zsákban", lettersinsackobj, Object.keys(lettersinsackobj).length)
                            break;
                        }
                    }
                    //console.log("nincs 2-nél több azonos betű")
                    if (sack[rand][0] in lettersonrackobj) {
                        lettersonrackobj[sack[rand][0]]++;
                    } else lettersonrackobj[sack[rand][0]] = 1;
                    break;
                }
            }
            randomletters.push(sack[rand]);
            sack[rand] = [sack[rand][0], "used"];
            lettersinsack--;
            //console.log("lettersinsack", lettersinsack)
            if (lettersinsack == 0) {
                console.log("elfogytak a betűk")
                break;
            }
        }
        j++;
    }
    //console.log("sack", sack)
    return randomletters;
}

function differentLettersInSack() {
    let lettersinsackobj = {};
    for (letter of sack) {
        if (letter[1] != "used") {
            if (letter[0] in lettersinsackobj) {
                lettersinsackobj[letter[0]]++;
            } else lettersinsackobj[letter[0]] = 1;
        }
    }
    return lettersinsackobj;
}

function displayTurn() {
    let t;
    t = document.querySelector("#turn");
    t.setAttribute("value", `${turns} / ${idleturns}`);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function bindButtons() {
    let searchbutton = document.querySelector("#search");
    searchbutton.addEventListener("click", displayWordSearch);
    let startbutton = document.querySelector("#start");
    startbutton.addEventListener("click", startGame);
    let pausebutton = document.querySelector("#pause");
    pausebutton.addEventListener("click", pause);
    let shufflebutton = document.querySelector("#shuffle");
    shufflebutton.addEventListener("click", shuffle);
    let backbutton = document.querySelector("#back");
    backbutton.addEventListener("click", back);
    let donebutton = document.querySelector("#done");
    donebutton.addEventListener("click", passOrValidate);
}

function startGame() {
    try {
        destroyPopup();
    } catch (err) { }
    if (ingame) {
        displayMessage("Figyelem!", "Valóban új játékot akarsz kezdeni?<br> Ebben az esetben a megkezdett<br> játékban eddig elért eredményed<br> elvész.",
            newGame, cancel, "game-div", "#board-rack");
    } else {
        newGame();
    }
}

function newGame() {
    try {
        destroyPopup();
    } catch (err) { }
    createSack();
    turns = 1;
    firstmove = true;
    idleturns = 0;
    ingame = true;
    wordsingame = [];
    arrowposition = [];
    displayTurn();
    score = 0;
    aiscore = 0;
    selectedaimove = [];
    displayScore([]);
    drawBoard(board_1);
    drawRack();
    adaptToChangedSize();
    loadRack();
    clearInterval(timeout);
    resetTimer(timelimit);
    localStorage.setItem('SavedGame_Betuteboly', JSON.stringify(false));
    lockOffUI();
}

function saveGame() {
    localStorage.setItem('SavedGame_Betuteboly', JSON.stringify(true));
    localStorage.setItem('Language', JSON.stringify(language));
    localStorage.setItem('AIVocabulary', JSON.stringify(aivocabulary));
    localStorage.setItem('AIUsedLetters', JSON.stringify(aiusedletters));
    localStorage.setItem('AIStrength', JSON.stringify(aistrength));
    localStorage.setItem('TimeLimit', JSON.stringify(timelimit));
    localStorage.setItem('FirstMove', JSON.stringify(firstmove));
    let fieldstosave = [];
    for (let i = 0; i < fields.length; i++) {
        let rowtosave = [];
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].className == "wall-field") {
                rowtosave.push("!");
            } else {
                if (fields[i][j].classList.contains("empty")) {
                    if (fields[i][j].classList.contains("bonus-field-2L")) {
                        rowtosave.push("2L");
                    } else if (fields[i][j].classList.contains("bonus-field-3L")) {
                        rowtosave.push("3L");
                    } else if (fields[i][j].classList.contains("bonus-field-2W")) {
                        rowtosave.push("2W");
                    } else if (fields[i][j].classList.contains("bonus-field-3W")) {
                        rowtosave.push("3W");
                    } else if (fields[i][j].classList.contains("bonus-field-20")) {
                        rowtosave.push("20");
                    } else if (fields[i][j].classList.contains("penalty-field-20")) {
                        rowtosave.push("-20");
                    } else rowtosave.push(".");
                } else rowtosave.push(fields[i][j].firstChild.value);
            }
        }
        fieldstosave.push(rowtosave);
    }
    localStorage.setItem('Board', JSON.stringify(fieldstosave));
    let rackfieldstosave = [];
    for (let i = 0; i < rackfields.length; i++) {
        try {
            rackfieldstosave.push(rackfields[i].firstChild.value);
        } catch (err) { }
    }
    localStorage.setItem('Rack', JSON.stringify(rackfieldstosave));
    localStorage.setItem('Sack', JSON.stringify(sack));
    localStorage.setItem('WordsInGame', JSON.stringify(wordsingame));
    localStorage.setItem('Turns', JSON.stringify(turns));
    localStorage.setItem('IdleTurns', JSON.stringify(idleturns));
    localStorage.setItem('Score', JSON.stringify(score));
    localStorage.setItem('AIScore', JSON.stringify(aiscore));
}

function loadGame() {
    let languages = localStorage.getItem('Language');
    language = JSON.parse(languages);
    selectLanguage(language);
    let aivocabularys = localStorage.getItem('AIVocabulary');
    aivocabulary = JSON.parse(aivocabularys);
    let aiusedletterss = localStorage.getItem('AIUsedLetters');
    aiusedletters = JSON.parse(aiusedletterss);
    let aistrengths = localStorage.getItem('AIStrength');
    aistrength = JSON.parse(aistrengths);
    let timelimits = localStorage.getItem('TimeLimit');
    timelimit = JSON.parse(timelimits);
    let firstmoves = localStorage.getItem('FirstMove');
    firstmove = JSON.parse(firstmoves);
    //console.log("firstmove", firstmove)
    createPartsOfDictionary();
    let turnss = localStorage.getItem('Turns');
    turns = JSON.parse(turnss);
    let idleturnss = localStorage.getItem('IdleTurns');
    idleturns = JSON.parse(idleturnss);
    displayTurn();
    let boardl = localStorage.getItem('Board');
    boardl1 = JSON.parse(boardl);
    //console.log("boardl1", boardl1)
    drawBoard(board_1);
    let lettercount = 0;
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[0].length; j++) {
            fieldtype = boardl1[i][j];
            //console.log("fieldtype", fieldtype)
            let fieldtypes = [".", "!", "2L", "3L", "2W", "3W", "20", "-20"];
            if (!(fieldtypes.includes(fieldtype))) {
                value = boardl1[i][j];
                letteri = restoreLetter(lettercount, value, "ontheboard");
                fields[i][j].appendChild(letteri);
                fields[i][j].setAttribute("ondragover", "");
                lettercount += 1;
                letteri.parentElement.setAttribute("class", "normal-field occupied");
                letteri.parentElement.setAttribute("ondrop", "drop(event)");
            }
        }
    }
    setStateOfLetters();
    let rackl = localStorage.getItem('Rack');
    rackl1 = JSON.parse(rackl);
    drawRack(rackl1);
    for (let lettercount = 0; lettercount < rackl1.length; lettercount++) {
        let value = rackl1[lettercount][0];
        letteri = restoreLetter(lettercount, value, "ontherack");
        rackfields[lettercount].appendChild(letteri);
        rackfields[lettercount].setAttribute("ondragover", "");
        rackfields[lettercount].setAttribute("class", "rack-field occupied");
    }
    let sackls = localStorage.getItem('Sack');
    sack = JSON.parse(sackls);
    console.log("mentettsack", sack)
    lettersinsack = 0;
    for (let letter of sack) {
        if (letter[1] != 'used') lettersinsack++;
        console.log("lettersinsack", lettersinsack)
    }
    let wordsingames = localStorage.getItem('WordsInGame');
    wordsingame = JSON.parse(wordsingames);
    let scores = localStorage.getItem('Score');
    score = JSON.parse(scores);
    let aiscores = localStorage.getItem('AIScore');
    aiscore = JSON.parse(aiscores);
    displayScore([]);
    ingame = true;
    clearInterval(timeout);
    resetTimer(timelimit);
    progressbar.max = timelimit;
    displayTime();
    createAIFields();
    //aiMove();
    lockOffUI();
}

function restoreLetter(lettercount, value, where) {
    let letteri = document.createElement("input");
    let trn;
    if (where == "ontherack") {
        trn = turns;
    } else {
        trn = turns - 1;
    }
    let id = "letter" + trn.toString() + "-" + lettercount.toString();
    letteri.setAttribute("id", id);
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        letteri.setAttribute("type", "text");
    } else {
        letteri.setAttribute("type", "button");
    }
    letteri.setAttribute("inputmode", "none");
    if (value == '*') {
        letteri.setAttribute("class", "letter letter-on-rack joker");
    } else {
        if (where == "ontherack") {
            letteri.setAttribute("class", "letter letter-on-rack");
        } else letteri.setAttribute("class", "letter letter-on-board old");
    }
    letteri.setAttribute("value", value);
    if (where == "ontherack") {
        letteri.draggable = true;
        letteri.setAttribute("ondragstart", "drag(event)");
        letteri.setAttribute("onclick", "placeLetter(event)");
    } else {
        letteri.draggable = true;
        letteri.setAttribute("ondragstart", "");
        letteri.setAttribute("onclick", "");
    }
    letteri.setAttribute("onkeydown", "return false");
    letteri.readonly = true;
    letteri.style.fontSize = Math.floor((fieldsize - 2) * 0.7).toString() + "px";
    //letteri.setAttribute("border-radius", "20%");
    for (letter of letters) {
        if (letter[0] == letteri.value) {
            l1points = letter[2];
            break;
        }
    }
    setLetterRadius(letteri, l1points);
    return letteri;
}

function cancel() {
    try {
        destroyPopup();
    } catch (err) { }
}

function pause() {
    hideBoard();
    clearInterval(timeout);
    displayMessage("Szünet", "Kattints a gombra a folytatáshoz!", continueGame, "", "game-div", "#board-rack");
}

function continueGame() {
    destroyPopup();
    showBoard();
    resetTimer(currenttime);
}

function hideBoard() {
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].hasChildNodes()) {
                fields[i][j].firstChild.style.display = "none";
            }
            let e = document.createElement("div");
            e.className = "blind";
            e.innerHTML = '?';
            e.style.fontSize = fontsizeletter;
            fields[i][j].appendChild(e);
        }
    }
    for (i = 0; i < rackfields.length; i++) {
        if (rackfields[i].hasChildNodes()) {
            rackfields[i].firstChild.style.display = "none";
        }
        let e = document.createElement("div");
        e.className = "blind";
        e.innerHTML = '?';
        e.style.fontSize = fontsizeletter;
        rackfields[i].appendChild(e);
    }
}

function showBoard() {
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[0].length; j++) {
            fields[i][j].lastChild.remove();
            if (fields[i][j].hasChildNodes()) {
                fields[i][j].firstChild.style.display = "block";
            }
        }
    }
    for (i = 0; i < rackfields.length; i++) {
        rackfields[i].lastChild.remove();
        if (rackfields[i].hasChildNodes()) {
            rackfields[i].firstChild.style.display = "block";
        }
    }
}

function back() {
    tryToRemoveArrow();
    removeElements(".available-score");
    arrowposition = [];
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let i = 0; i < lettersonrack.length; i++) {
        if (lettersonrack[i].parentElement.classList.contains("occupied")) {
            lettersonrack[i].parentElement.classList.remove("occupied");
            lettersonrack[i].parentElement.classList.add("empty");
            lettersonrack[i].parentElement.setAttribute("ondragover", "allowDrop(event)");
            //parentofdraggedletter = draggedletter.parentElement;
            if (lettersonrack[i].parentElement.classList.contains("bonus-field-20")) {
                lettersonrack[i].parentElement.style.backgroundImage = "url('img/bonus20.svg')"
            } else if (lettersonrack[i].parentElement.classList.contains("penalty-field-20"));
        }
        lettersonrack[i].style.color = "black";
        for (let j = 0; j < racksize; j++) {
            if (!rackfields[j].hasChildNodes()) {
                rackfields[j].appendChild(lettersonrack[i]);
                //if (lettersonrack[i].className == "letter letter-on-rack joker") {
                if (lettersonrack[i].classList.contains("letter-on-rack") && lettersonrack[i].classList.contains("joker")) {
                    lettersonrack[i].value = '*';
                    setLetterRadius(lettersonrack[i], 1);
                }
            }
            if (rackfields[j].hasChildNodes()) {
                rackfields[j].classList.remove("empty");
                rackfields[j].classList.add("occupied");
                rackfields[j].setAttribute("ondragover", "");
            }
        }
    }
}

function shuffle() {
    let lettersonrack = [];
    back();
    for (let i = 0; i < rackfields.length; i++) {
        let letter = rackfields[i].getElementsByClassName("letter");
        lettersonrack.push(letter[0]);
        rackfields[i].removeChild(letter[0]);
    }
    let i = 0;
    while (lettersonrack.length > 0) {
        let rand = getRndInteger(0, lettersonrack.length);
        rackfields[i].appendChild(lettersonrack[rand]);
        lettersonrack.splice(rand, 1);
        i++;
    }
}

function lockOnUI() {
    let uibuttons = document.querySelectorAll(".UI-button");
    for (let i = 0; i < uibuttons.length; i++) {
        uibuttons[i].disabled = true;
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let j = 0; j < lettersonrack.length; j++) {
        lettersonrack[j].draggable = false;
    }
}

function lockOffUI() {
    let uibuttons = document.querySelectorAll(".UI-button");
    for (let i = 0; i < uibuttons.length; i++) {
        uibuttons[i].disabled = false;
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let j = 0; j < lettersonrack.length; j++) {
        lettersonrack[j].draggable = true;
    }
}

function testNewWords() {
    removeElements(".available-score");
    /* arrow = document.querySelector("#arrow");
     if(arrow){
         fieldofarrow = arrow.parentElement;
         fieldofarrow.removeChild(arrow);
     }*/
    let lettersontheboard = collectNewLettersOnBoard();
    let direction = decideDirection(lettersontheboard);
    if (direction == "not in line") {
        for (let letter of lettersontheboard) {
            letter[0].style.color = "darkred";
        }
        return;
    }
    if (!continuous(lettersontheboard, direction) || direction == "not contiguous") {
        for (let letter of lettersontheboard) {
            letter[0].style.color = "darkred";
        }
        return;
    }
    let w = getAllString(lettersontheboard, direction);
    let words = w[0];
    let wordsl = w[1];
    if (words.length == 0) return;
    let notfound = checkDictionary(words);
    if (notfound.length > 0) {
        for (let letter of lettersontheboard) {
            letter[0].style.color = "darkred";
        }
        return;
    }
    for (let letter of lettersontheboard) {
        letter[0].style.color = "yellow";
    }
    turnscore = scoring(wordsl);
    let availablescore = document.createElement("div");
    console.log("wordsl", wordsl);
    let priword;
    for (wordl of wordsl) {
        let newl = 0;
        for (letter of wordl) {
            if (!letter.classList.contains("old")) {
                newl++;
            }
        }
        if (newl > 1) {
            priword = wordl;
            break;
        }
    }
    if (!priword) priword = wordsl[0];
    console.log("priword", priword)
    let rectfield = getElementPosition(priword[priword.length - 1]);
    priword[priword.length - 1].parentElement.appendChild(availablescore);
    availablescore.style.width = numberlabelsize.toString() + "px";
    availablescore.style.height = numberlabelsize.toString() + "px";
    availablescore.style.fontSize = numberfontsize.toString() + "px";
    availablescore.setAttribute("class", "available-score");
    availablescore.innerHTML = `${turnscore.toString()}`;
    if (direction == "across") {
        availablescore.style.left = (rectfield.right + 2).toString() + "px";
        availablescore.style.top = (rectfield.bottom + 2).toString() + "px";
    } else {
        availablescore.style.left = (rectfield.right + 2).toString() + "px";
        availablescore.style.top = (rectfield.bottom + 2).toString() + "px";
    }
    /*if(arrow){
      
        fieldofarrow.appendChild(arrow);
        console.log("fieldofarrow,arrow", fieldofarrow, arrow)
    }*/
}

function removeElements(classofelement) {
    let elementstoremove = document.querySelectorAll(classofelement);
    for (element of elementstoremove) element.remove();
}

function passOrValidate() {
    let lettersontheboard = collectNewLettersOnBoard();
    if (lettersontheboard.length == 0) {
        displayMessage("Figyelem!", "Biztos, hogy passzolsz ebben a fordulóban?", validateNewWords, cancel, "game-div", "#board-rack");
    }
    else {
        validateNewWords();
    }
}

function validateNewWords() {
    tryToRemoveArrow();
    removeElements(".available-score");
    arrowposition = [];
    let lettersontheboard = collectNewLettersOnBoard();
    if (lettersontheboard.length == 0) {
        pass1();
    } else {
        if (!fields[startfieldx][startfieldy].hasChildNodes()) {
            displayMessage("Szabálytalan!", "Az első szónak át kell haladni a tábla közepén.", destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        let direction = decideDirection(lettersontheboard);
        if (direction == "not in line") {
            displayMessage("Szabálytalan!", "A lerakott betűk nem esnek egy vonalba.", destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        if (!continuous(lettersontheboard, direction) || direction == "not contiguous") {
            displayMessage("Szabálytalan!", "A betűk nem folyamatosan vannak lerakva.", destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        let w = getAllString(lettersontheboard, direction);
        let words = w[0];
        let wordsl = w[1];
        //console.log("words, wordsl", words, wordsl);
        if (words[0] == "not connected") {
            displayMessage("Szabálytalan!", "Nem kapcsolódik a korábban táblára került szavakhoz.", destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        console.log("words", words)
        let notfound = checkDictionary(words);
        if (notfound.length > 0) {
            let nfjoined = notfound.join(', ');
            displayMessage("Szabálytalan!", `${nfjoined} nem található a szótárban`, destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        //displayMessage("Várakozás", "A számítógép is szót választ...", destroyPopup, "", "game-div", "#board-rack");
        //lockOnUI();
        aiMove();
        /*try {
            destroyPopup();
        } catch (err) { }*/
        //lockOffUI;
        let sc = displayScore(wordsl);
        let lobvalues = [];
        for (let letter of lettersontheboard) {
            lobvalues.push(letter[0].value);
        }
        //console.log("selectedaimove[0]", selectedaimove[0])
        let aiwords = [selectedaimove[0].join("")];
        for (secondaryword of selectedaimove[1]) {
            if (secondaryword[0]) aiwords.push(secondaryword[0].join(""));
        }
        wordsingame.push([slettersonrackoriginal, ["     "], words, [sc.toString()], ["     "], aiwords, [selectedaimove[6].toString()]]);
        setStateOfLetters();
        firstmove = false;
        idleturns = 0;
    }
    removeElements(".available-score");
    printBoard();
    if (!lettersinsack) {
        let numoflettersonrack = 0;
        for (let rackfield of rackfields) {
            if (rackfield.hasChildNodes()) numoflettersonrack++;
        }
        if (!numoflettersonrack) endOfGame();
    }
    if (ingame) {
        turns++;
        loadRack();
        displayTurn();
        clearInterval(timeout);
        resetTimer(timelimit);
    }
    return 0;
}

function printBoard() {
    for (let i = 0; i < fields.length; i++) {
        row = "";
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].hasChildNodes()) {
                if (fields[i][j].firstChild.value.length == 2) {
                    row += fields[i][j].firstChild.value;
                } else row += fields[i][j].firstChild.value + " ";
            } else {
                if (fields[i][j].classList.contains("wall-field")) {
                    row += "! ";
                } else if (fields[i][j].classList.contains("bonus-field-2L")) {
                    row += "2L";
                } else if (fields[i][j].classList.contains("bonus-field-3L")) {
                    row += "3L";
                } else if (fields[i][j].classList.contains("bonus-field-2W")) {
                    row += "2W";
                } else if (fields[i][j].classList.contains("bonus-field-3W")) {
                    row += "3W";
                } else if (fields[i][j].classList.contains("bonus-field-20")) {
                    row += "20";
                } else if (fields[i][j].classList.contains("penalty-field-20")) {
                    row += "2-";
                } else row += ". ";
            }
        }
        console.log(row);
    }
}

function createAIFields() {
    aifields = [];
    for (let i = 0; i < fields.length; i++) {
        let fieldsrow = [];
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].hasChildNodes()) {
                fieldsrow.push(fields[i][j].firstChild.value);
            } else fieldsrow.push(board_1[i][j]);
        }
        aifields.push(fieldsrow);
    }
    console.log("aifields", aifields)
}


function collectNewLettersOnBoard() {
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    let lettersontheboard = [];
    for (k = 0; k < lettersonrack.length; k++) {
        let found = false;
        for (rindex = 0; rindex < fields.length; rindex++) {
            let cindex = fields[rindex].indexOf(lettersonrack[k].parentElement);
            if (cindex > -1) {
                let lob = [lettersonrack[k], rindex, cindex];
                lettersontheboard.push(lob);
                found = true;
            }
            if (found) break;
        }
    }
    //console.log("collectlettersontheboard", lettersontheboard)
    return lettersontheboard;
}

function pass1() {
    idleturns += 1;
    displayTurn();
    if (idleturns == limitofidleturns) {
        clearInterval(timeout);
        endOfGame();
    } else {
        back();
        let sacktemp = [];
        for (i of sack) {
            sacktemp.push(i.slice());
        }
        //console.log("sackelőtte", sacktemp)
        backToSack();
        //console.log("sackutána", sack)
        selectedaimove = [];
        displayScore([]);
        loadRack();
        displayMessage("Figyelem!", "További " + (limitofidleturns - idleturns).toString() + " passz és a játék véget ér.", destroyPopup, "", "game-div", "#board-rack");
    }
}

function backToSack() {
    for (let rackfield of rackfields) {
        if (rackfield.hasChildNodes()) {
            let l1points;
            for (letter of letters) {
                if (letter[0] == rackfield.firstChild.value) {
                    l1points = letter[2];
                    break;
                }
            }
            for (letter of sack) {
                if (letter[0] == rackfield.firstChild.value && letter[1] == "used") {
                    letter[1] = l1points;
                    lettersinsack++;
                    break;
                }
            }
            rackfield.removeChild(rackfield.firstChild);
            rackfield.classList.remove("occupied");
            rackfield.classList.add("empty");
        }
    }
}

function endOfGame() {
    ingame = false;
    try {
        destroyPopup();
    } catch (err) { }
    lockOnUI();
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let j = 0; j < lettersonrack.length; j++) {
        lettersonrack[j].draggable = false;
    }
    clearInterval(timeout);
    displayResult();
    localStorage.setItem('SavedGame_Betuteboly', JSON.stringify(false));
}

function displayResult() {
    let resultsdiv = document.getElementById("game-results");
    popup1 = document.createElement("div");
    popup1.setAttribute("class", "popupresult");
    popup1.style.fontSize = fontsizebutton;
    popup1.style.paddingTop = fontsizebutton;
    resultsdiv.appendChild(popup1);
    let form1 = document.createElement("form");
    form1.setAttribute("class", "popupresultcontent");
    popup1.appendChild(form1);
    let resultsfieldset = document.createElement("fieldset");
    resultsfieldset.setAttribute("id", "results-fieldset");
    form1.appendChild(resultsfieldset);
    let legend1 = document.createElement("legend");
    legend1.style.fontSize = "50%"
    legend1.innerHTML = "Eredmény";
    resultsfieldset.appendChild(legend1);
    let table1 = document.createElement("table");
    resultsfieldset.appendChild(table1);
    let tr1 = document.createElement("tr");
    table1.appendChild(tr1);
    let td1 = document.createElement("td");
    tr1.appendChild(td1);
    let div1 = document.createElement("div");
    div1.id = "result-text";
    div1.innerHTML = resultText();
    td1.appendChild(div1);
    let tr2 = document.createElement("tr");
    table1.appendChild(tr2);
    let td2 = document.createElement("td");
    tr2.appendChild(td2);
    let button1 = document.createElement("button");
    button1.innerText = "Rendben";
    button1.type = "button";
    button1.className = "UI-button";
    button1.addEventListener("click", destroyPopupResult);
    button1.style.fontSize = fontsizebutton;
    button1.style.marginBottom = fontsizebutton;
    td2.appendChild(button1);
    let tr3 = document.createElement("tr");
    table1.appendChild(tr3);
    let td3 = document.createElement("td");
    tr3.appendChild(td3);
    let button2 = document.createElement("button");
    button2.innerText = "Részletek";
    button2.id = "reszletek";
    button2.type = "button";
    button2.className = "UI-button";
    button2.addEventListener("click", displayDetails);
    button2.style.fontSize = fontsizebutton;
    button2.style.marginBottom = fontsizebutton;
    button1.style.height = Math.floor(fieldsize * 1).toString() + "px";
    button2.style.height = Math.floor(fieldsize * 1).toString() + "px";
    td3.appendChild(button2);
    table1.style.display = "block";
}

function destroyPopupResult() {
    popup1.remove();
    lockOffMain_Rules_Start();
}

function lockOffMain_Rules_Start() {
    document.getElementById("search").disabled = false;
    document.getElementById("rules").disabled = false;
    document.getElementById("start").disabled = false;
}

function displayDetails() {
    fset = document.querySelector("#results-fieldset");
    let table1 = document.createElement("table");
    table1.id = "w-table";
    table1.style.width = "100%";
    table1.style.fontSize = fontsizebutton;
    fset.appendChild(table1);
    let rowcount = 1;
    let trh1 = document.createElement("tr");
    table1.appendChild(trh1);
    let th1 = document.createElement("th");
    trh1.appendChild(th1);
    th1.style.fontWeight = "normal";
    th1.style.fontSize = "75%";
    th1.innerHTML = "Betűk";
    let th2 = document.createElement("th");
    trh1.appendChild(th2);
    th2.innerHTML = " ";
    let th3 = document.createElement("th");
    trh1.appendChild(th3);
    th3.style.fontWeight = "normal";
    th3.style.fontSize = "75%"
    th3.innerHTML = "Játékos";
    th3.colSpan = 2;
    let th4 = document.createElement("th");
    trh1.appendChild(th4);
    th4.innerHTML = " ";
    let th5 = document.createElement("th");
    trh1.appendChild(th5);
    th5.style.fontWeight = "normal";
    th5.style.fontSize = "75%"
    th5.innerHTML = "Számítógép";
    th5.colSpan = 2;

    for (let words of wordsingame) {
        let tr1 = document.createElement("tr");
        table1.appendChild(tr1);
        if (rowcount % 2) {
            wordbgcolor = "#555";
        } else {
            wordbgcolor = "#444";
        }
        tr1.style.backgroundColor = wordbgcolor;
        tr1.style.width = "100%";
        for (let field = 0; field < words.length; field++) {
            let td1 = document.createElement("td");
            tr1.appendChild(td1);
            //console.log("wordbgcolor", wordbgcolor);
            //console.log("words[field]", words[field])
            td1.style.backgroundColor = wordbgcolor;
            td1.innerHTML = `<div class="words-table" style="background-color: ${wordbgcolor}">${words[field].join(', ')}</div>`;
            if (field == 3 || field == 6) {
                td1.style.textAlign = "right";
            }
        }
        rowcount++;
    }
    document.getElementById("reszletek").disabled = true;
}

function resultText() {
    let rtext = `<br><p style="white-space: pre">Játékos:  <span style="color:yellow; font-size: 200%; font-weight: bold">${score}</span>     Számítógép:  <span style="color:yellow; font-size: 200%; font-weight: bold">${aiscore}</span></p>`
    return rtext;
}

function decideDirection(lettersontheboard) {
    let across = true;
    let down = true;
    let direction = "";
    if (lettersontheboard.length > 1) {
        for (i = 0; i < lettersontheboard.length; i++) {
            if (lettersontheboard[i][1] != lettersontheboard[0][1]) {
                across = false;
                break;
            }
        }
        for (i = 0; i < lettersontheboard.length; i++) {
            if (lettersontheboard[i][2] != lettersontheboard[0][2]) {
                down = false;
                break;
            }
        }
        if (across == true) {
            direction = "across";
            lettersontheboard.sort(function (a, b) { return a[2] - b[2] });
        } else if (down == true) {
            direction = "down";
            lettersontheboard.sort(function (a, b) { return a[1] - b[1] });
        }
    } else {
        direction = ifOneNewLetter(lettersontheboard);
    }
    if (direction == "") {
        direction = "not in line";
    }
    return direction;
}

function ifOneNewLetter(lettersontheboard) {
    let direction = "";
    try {
        if (fields[lettersontheboard[0][1]][lettersontheboard[0][2] - 1].hasChildNodes()) {
            direction = "across";
        }
    } catch (err) { }
    try {
        if (fields[lettersontheboard[0][1]][lettersontheboard[0][2] + 1].hasChildNodes()) {
            direction = "across";
        }
    } catch (err) { }
    try {
        if (fields[lettersontheboard[0][1] - 1][lettersontheboard[0][2]].hasChildNodes()) {
            direction = "down";
        }
    } catch (err) { }
    try {
        if (fields[lettersontheboard[0][1] + 1][lettersontheboard[0][2]].hasChildNodes()) {
            direction = "down";
        }
    } catch (err) { }
    if (direction == "") {
        direction = "not contiguous";
    }
    return direction;
}

function continuous(lettersontheboard, direction) {
    if (direction == "across") {
        let rindex = lettersontheboard[0][1];
        for (k = lettersontheboard[0][2]; k < lettersontheboard[lettersontheboard.length - 1][2]; k++) {
            if (!fields[rindex][k].hasChildNodes()) {
                return false;
            }
            /* else {
                if (fields[rindex][k].firstChild.classList.contains("arrow")) {
                    console.log("fields[rindex][k].firstChild.classList") 
                    return false;
                }
            }*/
        }
    }
    if (direction == "down") {
        let cindex = lettersontheboard[0][2];
        for (k = lettersontheboard[0][1]; k < lettersontheboard[lettersontheboard.length - 1][1]; k++) {
            if (!fields[k][cindex].hasChildNodes()) {
                return false;
            }
            /* else {
                if (fields[k][cindex].firstChild.classList.contains("arrow")) {
                    console.log("down arrow")
                    return false;
                }
            }*/
        }
    }
    return true;
}

function getAllString(lettersontheboard, direction) {
    let words = [];
    let wordsl = [];
    let fieldrc = fields.length;
    let fieldcc = fields[0].length;
    let connected = false;
    //Across
    for (k = 0; k < lettersontheboard.length; k++) {
        let i = lettersontheboard[k][1];
        for (j = lettersontheboard[k][2]; j > -1; j--) {
            if (!fields[i][j].hasChildNodes()) {
                break;
            }
        }
        let word = '';
        let wordl = [];
        rindex = i;
        cindex = j + 1;
        while (true) {
            if (typeof fields[rindex][cindex].firstChild.value !== "undefined") {
                word += fields[rindex][cindex].firstChild.value;
                wordl.push(fields[rindex][cindex].firstChild);
            }
            if (fields[rindex][cindex].firstChild.classList.contains("old")) {
                connected = true;
            }
            if (cindex + 1 == fieldcc || !fields[rindex][cindex + 1].hasChildNodes()) {
                break;
            }
            cindex++;
        }
        if (wordl.length > 1) {
            words.push(word);
            wordsl.push(wordl);
        }
        if (direction == "across") {
            break;
        }
    }
    //Down
    for (k = 0; k < lettersontheboard.length; k++) {
        let j = lettersontheboard[k][2];
        for (i = lettersontheboard[k][1]; i > -1; i--) {
            if (!fields[i][j].hasChildNodes()) {
                break;
            }
        }
        let word = '';
        let wordl = [];
        rindex = i + 1;
        cindex = j;
        while (true) {
            if (typeof fields[rindex][cindex].firstChild.value !== "undefined") {
                word += fields[rindex][cindex].firstChild.value;
                wordl.push(fields[rindex][cindex].firstChild);
            }
            if (fields[rindex][cindex].firstChild.classList.contains("old")) {
                connected = true;
            }
            if (rindex + 1 == fieldrc || !fields[rindex + 1][cindex].hasChildNodes()) {
                break;
            }
            rindex++;
        }
        if (wordl.length > 1) {
            words.push(word);
            wordsl.push(wordl);
        }
        if (direction == "down") {
            break;
        }
    }
    if (!firstmove && !connected) {
        return [["not connected"], []];
    } else return [words, wordsl];
}

function checkDictionary(words) {
    let notfound = [];
    for (let word of words) {
        if (!dictionary.includes(word)) {
            notfound.push(word);
        }
    }
    return notfound;
}

function displayScore(wordsl) {
    let turnscore = scoring(wordsl);
    let aisc, psc;
    score += turnscore;
    if (selectedaimove[6]) {
        aiturnscore = selectedaimove[6];
    } else aiturnscore = 0;
    aiscore += aiturnscore;
    psc = document.querySelector("#player-score");
    psc.setAttribute("value", `${turnscore} / ${score}`);
    aisc = document.querySelector("#ai-score");
    aisc.setAttribute("value", `${aiturnscore} / ${aiscore}`);
    return turnscore;
}

function scoring(wordsl) {
    let turnscore = 0;
    let scorefound = 0;
    let numofusedletters = 0;
    let added = [];
    for (let wordl of wordsl) {
        let wordmultiplier = 1;
        let wordscore = 0;
        numofusedletters = 0;
        for (let letter of wordl) {
            let pointforletter = 0;
            for (let l of letters) {
                lettersinsack
                if (l[0] == letter.value) {
                    pointforletter = l[2];
                    break;
                }
            }
            if (!letter.classList.contains("old")) {
                if (letter.parentElement.classList.contains("bonus-field-2L")) {
                    pointforletter *= 2;
                }
                /*if (letter.classList.contains("x2")) {
                    pointforletter *= 2;
                }*/
                if (letter.parentElement.classList.contains("bonus-field-3L")) {
                    pointforletter *= 3;
                }
                /*if (letter.classList.contains("x3")) {
                    pointforletter *= 3;
                }*/
                if (letter.parentElement.classList.contains("bonus-field-2W")) {
                    wordmultiplier *= 2;
                }
                if (letter.parentElement.classList.contains("bonus-field-3W")) {
                    wordmultiplier *= 3;
                }
                if (letter.parentElement.classList.contains("bonus-field-20") && !added.includes(letter)) {
                    scorefound += 20;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("penalty-field-20") && !added.includes(letter)) {
                    scorefound -= 20;
                    added.push(letter);
                }
                numofusedletters += 1;
            }
            //console.log("pointforletter", pointforletter)
            wordscore += pointforletter;
            //console.log("wordscore", wordscore)
        }
        //console.log("wordmultiplier", wordmultiplier)
        wordscore *= wordmultiplier;
        turnscore += wordscore;
        //console.log("turnscore", turnscore)
        switch (numofusedletters) {
            case 4:
                turnscore += 5;
                break;
            case 5:
                turnscore += 10;
                break;
            case 6:
                turnscore += 20;
                break;
            case 7:
                turnscore += 40;
                break;
            case 8:
                turnscore += 80;
                break;
        }
    }
    turnscore += scorefound;
    return turnscore
}

function aiMove() {
    //let aifields = fields.slice();
    //console.log("aifields",aifields)
    let slettersonrack = [];
    let allvalidword = [];
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let letter of lettersonrack) {
        slettersonrack.push(letter.value);
    }
    let notjokerletters = [];
    for (let letter of letters) {
        if (letter[0] != '*' && !notjokerletters.includes(letter[0])) notjokerletters.push(letter[0]);
    }
    for (let numofletters = 1; numofletters < aiusedletters + 1; numofletters++) {
        let validwords = aiFindPlace(numofletters, aifields, slettersonrack, notjokerletters);
        //console.log("validwords", validwords)
        if (validwords.length > 0) {
            allvalidword = allvalidword.concat(validwords);
        }
    }
    if (allvalidword.length > 0) {
        let allvalidwordscores = aiScore(allvalidword);
        console.log("allvalidwordscores", allvalidwordscores)
        selectMove(allvalidwordscores);
    } else noValidWord();
}

function noValidWord() {

}

function aiFindPlace(numofletters, aifields, slettersonrack, notjokerletters) {
    let patternswithdata = [];
    let aifieldrc = aifields.length;
    let aifieldcc = aifields[0].length;
    let aifieldstransposed = [];
    let validwords = [];
    for (let i = 0; i < aifieldcc; i++) {
        let newline = [];
        for (let j = 0; j < aifieldrc; j++) {
            newline.push(aifields[j][i]);
        }
        aifieldstransposed.push(newline);
    }
    for (let direction of ["across", "down"]) {
        if (direction == "down") {
            aifields = aifieldstransposed;
            //aifieldrc, aifieldcc = aifieldcc, aifieldrc;
            let s = aifieldrc;
            aifieldrc = aifieldcc;
            aifieldcc = s;
        }
        //console.log(direction)
        for (let i = 0; i < aifieldrc; i++) {
            endofline = false;
            for (let j = 0; j < aifieldcc; j++) {
                if (aifields[i][j] == ("!")) continue;
                if (j > 0 && !(aifields[i][j - 1]) in fieldsobj) continue;
                let pattern1 = [];
                let connected = false;
                let startfield = false;
                let wall = false;
                let patternposition = 0;
                let newletter = 0;
                while (true) {
                    if (aifields[i][j + patternposition] in fieldsobj) {
                        pattern1.push(".");
                        if (firstmove) {
                            if (i == startfieldy && j + patternposition == startfieldx) {
                                startfield = true;
                            }
                        }
                        if (!connected) {
                            if (i > 0) {
                                if (!(aifields[i - 1][j + patternposition] in fieldsobj)) {
                                    connected = true;
                                }
                            }
                            if (i < aifieldrc - 1) {
                                if (!(aifields[i + 1][j + patternposition] in fieldsobj)) {
                                    connected = true;
                                }
                            }
                        }
                        patternposition += 1;
                        newletter += 1;
                    } else {
                        pattern1.push(aifields[i][j + patternposition]);
                        connected = true;
                        patternposition += 1;
                    }
                    if (j + patternposition == aifieldcc) {
                        endofline = true;
                        break;
                    }
                    if (aifields[i][j + patternposition] == "!") {
                        wall = true;
                        break;
                    }
                    if (newletter == numofletters && aifields[i][j + patternposition] in fieldsobj) {
                        break;
                    }
                }
                if (newletter < numofletters) {
                    if (endofline || wall) continue;
                }
                if (!connected && !firstmove) continue;
                if (firstmove && !startfield) continue;

                let found;
                for (let p = 0; p < patternswithdata.length; p++) {
                    if (patternswithdata[p][0] == pattern1) {
                        found = p;
                        break;
                    }
                }
                let words;
                if (found) {
                    words = patternswithdata[found][1].slice();
                } else {
                    words = checkWords(pattern1, slettersonrack, notjokerletters)
                    let rec = [];
                    rec.push(pattern1);
                    rec.push(words);
                    patternswithdata.push(rec);
                }
                //console.log("words", words)
                let primarywordwithdata;
                if (words.length > 0) {
                    for (primaryword of words) {
                        primarywordwithdata = createLOB(primaryword, pattern1);
                        let validword = aiValidMove(aifields, primarywordwithdata, i, j, direction, aifieldrc);
                        if (validword.length > 0) {
                            validwords.push(validword);
                        }
                    }
                }
            }
        }
    }
    //console.log("validwords", validwords);
    return validwords
}

function checkWords(pattern1, slettersonrack, notjokerletters) {
    let words = [];
    //console.log("pattern1", pattern1)
    if (pattern1.length < 2) {
        return words;
    }
    let letterstobegin;
    if (pattern1[0] != '.') {
        letterstobegin = [pattern1[0]]
    } else {
        if (slettersonrack.includes('*')) {
            letterstobegin = notjokerletters.slice();
        } else letterstobegin = slettersonrack.slice();
    }
    let usedbletter = [];
    for (let letter of letterstobegin) {
        if (!usedbletter.includes(letter)) {
            usedbletter.push(letter);
        } else continue;
        for (let word1 of partsofdictionary[letter + pattern1.length.toString()]) {
            //console.log("word1", word1);
            suit = true;
            for (let k = 0; k < pattern1.length; k++) {
                if (pattern1[k] != word1[k] && pattern1[k] != '.') {
                    suit = false;
                    break;
                }
            }
            if (!suit) continue;
            slettersonrackcopy = slettersonrack.slice();
            if (pattern1[0] == '.') {
                res = removeFirstEqual(slettersonrackcopy, letter);
                if (res == -1) {
                    slettersonrackcopy = removeFirstEqual(slettersonrackcopy, '*');
                } else slettersonrackcopy = res;
            }
            for (pidx = 1; pidx < pattern1.length; pidx++) {
                if (pattern1[pidx] != '.') {
                    if (word1[pidx] != pattern1[pidx]) {
                        suit = false;
                        break;
                    }
                } else {
                    res = removeFirstEqual(slettersonrackcopy, word1[pidx]);
                    if (res == -1) {
                        res = removeFirstEqual(slettersonrackcopy, '*');
                        if (res == -1) {
                            suit = false;
                            break;
                        } else slettersonrackcopy = res;
                    } else {
                        slettersonrackcopy = res;
                    }
                }
            }
            if (!suit) continue;
            words.push(word1);
        }
    }
    //console.log("words", words);
    return words;
}

function removeFirstEqual(array1, value1) {
    let idx = array1.indexOf(value1);
    if (idx == -1) return -1;
    array1 = array1.slice(0, idx).concat(array1.slice(idx + 1));
    return array1;
}

function dictionaryContains(wordl) {
    //console.log("wordl", wordl)
    let partofdictionary = partsofdictionary[wordl[0] + wordl.length.toString()];
    for (let elem of partofdictionary) {
        //console.log("elem, wordl", elem, wordl) 
        if (wordl.toString() == elem.toString()) {
            //console.log("van ilyen szó")
            return true;
        }
    }
    //console.log("nincs ilyen szó")
    return false;
}

function createLOB(primaryword, pattern1) {
    let lob1 = [];
    let primarywordwithdata = [];
    for (let i = 0; i < pattern1.length; i++) {
        if (pattern1[i] == '.') {
            let found = false;
            for (letter of letters) {
                if (primaryword[i] == letter[0]) {
                    lob1.push(letter);
                    found = true;
                    break;
                }
            }
            if (!found) console.log("nincs ilyen betű a zsákban", primaryword[i]);
        } else lob1.push('.');
    }
    //console.log("LOB1", lob1)
    primarywordwithdata.push(primaryword);
    primarywordwithdata.push(lob1);
    return primarywordwithdata;
}

function aiValidMove(aifields, primarywordwithdata, ii, jj, direction, aifieldrc) {
    let validword = [];
    let secondarywords = [];
    let lob = primarywordwithdata[1];
    //console.log("primarywordwithdata", primarywordwithdata)
    for (let patternposition = 0; patternposition < lob.length; patternposition++) {
        if (lob[patternposition][0] != '.') {
            let inside = true;
            let i = ii;
            let wordl = [];
            let lobs = [];
            while (inside) {
                if (i > 0 && !(aifields[i - 1][jj + patternposition] in fieldsobj)) {
                    i -= 1;
                } else inside = false;
            }
            let si = i;
            let sj = jj + patternposition;
            inside = true;
            while (inside) {
                if (i == ii) {
                    //console.log("i", i)
                    wordl.push(primarywordwithdata[0][patternposition]);
                    lobs.push(lob[patternposition]);
                } else {
                    //console.log("i!=ii", i, ii)
                    wordl.push(aifields[i][jj + patternposition]);
                    lobs.push('.');
                }
                if (i + 1 < aifieldrc) {
                    if (!(aifields[i + 1][jj + patternposition] in fieldsobj) || i + 1 == ii) {
                        i += 1;
                    } else inside = false;
                } else inside = false;
            }
            if (wordl.length > 1) {
                //console.log("wordl, lobs", wordl, lobs)
                //console.log("partsofdictionary[wordl[0] + wordl.length.toString()]", partsofdictionary[wordl[0] + wordl.length.toString()])
                if (!dictionaryContains(wordl)) {
                    //console.log("nincs benne")
                    return validword;
                } else {
                    //console.log("benne van")
                    rec = [];
                    rec.push(wordl);
                    if (direction == "across") {
                        rec.push(si);
                        rec.push(sj);
                        rec.push("down");
                    } else {
                        rec.push(sj);
                        rec.push(si);
                        rec.push("across");
                    }
                    rec.push(lobs);
                    secondarywords.push(rec);
                }
            }
        }
    }
    validword.push(primarywordwithdata[0]);
    validword.push(secondarywords);
    if (direction == "across") {
        validword.push(ii);
        validword.push(jj);
    } else {
        validword.push(jj);
        validword.push(ii);
    }
    validword.push(direction);
    validword.push(primarywordwithdata[1]);
    return validword;
}

function aiScore(allvalidword) {
    for (validword of allvalidword) {
        let score1 = wordScore(validword[0], validword[2], validword[3], validword[4], validword[5], "primaryword");
        if (validword[1].length > 0) {
            for (vword of validword[1]) {
                let score2 = wordScore(vword[0], vword[1], vword[2], vword[3], vword[4], "secondaryword");
                score1 += score2;
            }
        }
        validword.push(score1);
    }
    return allvalidword;
}

function wordScore(word1, ii, jj, direction, lob1, category) {
    let wordvaluemulti = 1;
    let wordscore1 = 0;
    let numofusedletters = 0;
    let scorefound = 0;
    if (direction == "across") {
        for (let position = 0; position < word1.length; position++) {
            if (!(aifields[ii][jj + position] in fieldsobj)) {
                for (let l of letters) {
                    if (aifields[ii][jj + position] == l[0]) {
                        wordscore1 += l[2];
                        break;
                    }
                }
            } else {
                //console.log("lob1", lob1)
                let sc = parseInt(lob1[position][2], 10);
                //wordvaluemulti *= int(lob1[position][2])
                if (aifields[ii][jj + position] == "2W") {
                    wordvaluemulti *= 2;
                } else if (aifields[ii][jj + position] == "3W") {
                    wordvaluemulti *= 3;
                } else if (aifields[ii][jj + position] == "2L") {
                    sc *= 2;
                } else if (aifields[ii][jj + position] == "3L") {
                    sc *= 3;
                } else if (aifields[ii][jj + position] == "20" && category == "primaryword") {
                    scorefound += 20;
                } else if (aifields[ii][jj + position] == "-20" && category == "primaryword") {
                    scorefound -= 20;
                }
                wordscore1 += sc;
                numofusedletters += 1;
            }
        }
    }
    if (direction == "down") {
        for (let position = 0; position < word1.length; position++) {
            if (!(aifields[ii + position][jj] in fieldsobj)) {
                for (let l of letters) {
                    if (aifields[ii + position][jj] == l[0]) {
                        wordscore1 += l[2];
                        break;
                    }
                }
            } else {
                let sc = parseInt(lob1[position][2], 10);
                //wordvaluemulti *= int(lob1[position][2])
                if (aifields[ii + position][jj] == "2W") {
                    wordvaluemulti *= 2;
                } else if (aifields[ii + position][jj] == "3W") {
                    wordvaluemulti *= 3;
                } else if (aifields[ii + position][jj] == "2L") {
                    sc *= 2;
                } else if (aifields[ii + position][jj] == "3L") {
                    sc *= 3;
                } else if (aifields[ii + position][jj] == "20" && category == "primaryword") {
                    scorefound += 20;
                } else if (aifields[ii + position][jj] == "-20" && category == "primaryword") {
                    scorefound -= 20;
                }
                wordscore1 += sc;
                numofusedletters += 1;
            }
        }
    }
    wordscore1 = wordscore1 * wordvaluemulti;
    switch (numofusedletters) {
        case 4:
            wordscore1 += 5;
            break;
        case 5:
            wordscore1 += 10;
            break;
        case 6:
            wordscore1 += 20;
            break;
        case 7:
            wordscore1 += 40;
            break;
        case 8:
            wordscore1 += 80;
            break;
    }
    wordscore1 += scorefound;
    return wordscore1;
}

function selectMove(allvalidwordscores) {
    allvalidwordscores.sort(function (a, b) { return a[6] - b[6] });
    //console.log("allvalidwordscores[-1]", allvalidwordscores[allvalidwordscores.length - 1])
    let maxpoint = allvalidwordscores[allvalidwordscores.length - 1][6] * aistrength / 100;
    for (let i = 0; i < allvalidwordscores.length; i++) {
        if (!(allvalidwordscores[i][6] > maxpoint)) selectedaimove = allvalidwordscores[i];
    }
    bestmove = allvalidwordscores[allvalidwordscores.length - 1];
    console.log("selected move, best move", selectedaimove, bestmove)
}

function displayMessage(legend, message, command1, command2, parente, elementunder) {
    try {
        destroyPopup();
    } catch (err) { }
    lockOnUI();
    let gamediv = document.getElementById(parente);
    popup1 = document.createElement("div");
    popup1.setAttribute("class", "popup");
    popup1.style.fontSize = fontsizebutton;
    gamediv.appendChild(popup1);
    let form1 = document.createElement("form");
    form1.setAttribute("class", "popupcontent");
    popup1.appendChild(form1);
    let fieldset1 = document.createElement("fieldset");
    form1.appendChild(fieldset1);
    let legend1 = document.createElement("legend");
    legend1.innerHTML = legend;
    legend1.style.fontSize = "50%"
    fieldset1.appendChild(legend1);
    let table1 = document.createElement("table");
    fieldset1.appendChild(table1);
    let tr1 = document.createElement("tr");
    table1.appendChild(tr1);
    let td1 = document.createElement("td");
    tr1.appendChild(td1);
    let p1 = document.createElement("p");
    p1.innerHTML = message;
    p1.id = "message-text";
    p1.style.fontSize = "fontsizebutton";
    td1.appendChild(p1);
    let tr2 = document.createElement("tr");
    table1.appendChild(tr2);
    let td2 = document.createElement("td");
    tr2.appendChild(td2);
    let button1 = document.createElement("button");
    button1.innerText = "Rendben";
    button1.addEventListener("click", command1);
    button1.type = "button";
    button1.className = "UI-button";
    button1.style.height = Math.floor(fieldsize * 1).toString() + "px";
    button1.style.fontSize = fontsizebutton;
    button1.style.marginRight = "20px";
    td2.appendChild(button1);
    td2.style.marginRight = "20px";
    if (command2) {
        let button2 = document.createElement("button");
        button2.innerText = "Mégsem";
        button2.addEventListener("click", command2);
        button2.type = "button";
        button2.className = "UI-button";
        button2.style.height = Math.floor(fieldsize * 1).toString() + "px";
        button2.style.fontSize = fontsizebutton;
        button1.style.width = "40%";
        button2.style.width = "40%";
        button1.style.marginLeft = "5%";
        button1.style.marginRight = "5%";
        td2.appendChild(button2);
    }
    let boardandrack = document.querySelector(elementunder);
    let rectb = getElementPosition(boardandrack);
    let rectp = getElementPosition(form1);
    popup1.style.left = Math.floor(rectb.left + (rectb.width - rectp.width) / 2).toString() + "px";
    popup1.style.top = Math.floor(rectb.top + (rectb.height - rectp.height) / 2).toString() + "px";
}

function destroyPopup() {
    popup1.remove();
    lockOffUI();
}

function createPopup(tfield) {
    try {
        destroyPopup();
    } catch (err) { }
    lockOnUI();
    popup1 = document.createElement("div");
    popup1.setAttribute("class", "popup");
    popup1.style.fontSize = fontsizeletter;
    parente = document.querySelector("#board-rack");
    parente.appendChild(popup1);
    let form1 = document.createElement("form");
    form1.setAttribute("class", "popupcontent");
    popup1.appendChild(form1);
    let table1 = document.createElement("table");
    form1.appendChild(table1);
    let k = 1;
    for (i = 0; i < letters.length / 7 + 1; i++) {
        let row1 = document.createElement("tr");
        table1.appendChild(row1);
        for (j = 0; j < 7 && k < letters.length; j++) {
            let td1 = document.createElement("td");
            row1.appendChild(td1);
            td1.setAttribute("width", rackfieldsize.toString() + "px");
            td1.setAttribute("height", rackfieldsize.toString() + "px");
            let input1 = document.createElement("input");
            td1.appendChild(input1);
            input1.setAttribute("type", "text");
            input1.setAttribute("class", "letter");
            input1.style.fontSize = Math.floor((fieldsize - 2) * 0.7).toString() + "px";
            input1.draggable = false;
            input1.readonly = true;
            input1.setAttribute("inputmode", "none");
            input1.addEventListener("click", (ev) => changeJoker(tfield, ev));
            input1.setAttribute("value", letters[k][0]);
            k++;
        }
    }
    let boardandrack = document.querySelector("#board-rack");
    let rectb = getElementPosition(boardandrack);
    let rectp = getElementPosition(form1);
    popup1.style.left = Math.floor(rectb.left + (rectb.width - rectp.width) / 2).toString() + "px";
    popup1.style.top = Math.floor(rectb.top + (rectb.height - rectp.height) / 2).toString() + "px";
}

function changeJoker(tfield, ev) {
    tfield.children[0].setAttribute("value", ev.target.value);
    tfield.children[0].setAttribute("inputmode", "none");
    for (let letter of letters) {
        if (letter[0] == tfield.children[0].value) {
            l1points = letter[2];
            break;
        }
    }
    setLetterRadius(tfield.children[0], l1points);
    popup1.remove();
    lockOffUI();
    testNewWords();
}

function placeYesMarks() {
    let hunbutton = document.querySelector("#hun-lang");
    let rectph = getElementPosition(hunbutton);
    let yesmarkh = document.querySelector("#yes-mark-h");
    yesmarkh.style.left = Math.floor(rectph.width / 2).toString() + "px";
    yesmarkh.style.bottom = Math.floor(0).toString() + "px";

    let engbutton = document.querySelector("#eng-lang");
    let rectpe = getElementPosition(engbutton);
    let yesmarke = document.querySelector("#yes-mark-e");
    yesmarke.style.left = Math.floor(rectpe.width / 2).toString() + "px";
    yesmarke.style.bottom = Math.floor(0).toString() + "px";

    selectLanguage("hun")
}

function selectLanguage(lang) {
    if (lang == "hun") {
        language = "hun";
        createDictionary(dictionary_hun);
        letters = letters_hun;
        document.querySelector("#yes-mark-e").style.display = "none";
        document.querySelector("#yes-mark-h").style.display = "inline-block";
        document.querySelector("#yes-mark-h").style.position = "absolute";
    } else {
        language = "eng";
        dictionary = dictionary_eng;
        letters = letters_eng;
        document.querySelector("#yes-mark-h").style.display = "none";
        document.querySelector("#yes-mark-e").style.display = "inline-block";
        document.querySelector("#yes-mark-e").style.position = "absolute";
    }
}

function createDictionary(dict) {
    for (let wl of dict) {
        dictionary.push(wl[0]);
    }
}

function createPartsOfDictionary() {
    let abc;
    if (language == "hun") {
        abc = ['A', 'Á', 'B', 'C', 'CS', 'D', 'E', 'É', 'F', 'G', 'GY', 'H', 'I', 'Í', 'J', 'K', 'L', 'LY', 'M', 'N', 'NY',
            'O', 'Ó', 'Ö', 'Ő', 'P', 'Q', 'R', 'S', 'SZ', 'T', 'TY', 'U', 'Ú', 'Ü', 'Ű', 'V', 'W', 'X', 'Y', 'Z', 'ZS'];
    } else {
        abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
    for (let letter of abc) {
        for (len = 2; len < 35; len++) {
            partsofdictionary[letter + len.toString()] = [];
        }
    }
    if (language == "hun") {
        dict = dictionary_hun;
    } else dict = dictionary_eng;
    for (let word of dict) {
        let wordsl;
        //console.log("aivocabulary",aivocabulary)
        if (language == "hun") {
            if (aivocabulary == 2 && (word.length == 2 || word.length == 3)) {
                wordsl = wordToListHUN(word[0]);
                //console.log("normál", word[0], wordcount)
            } else if (aivocabulary == 1 && word.length == 3) {
                wordsl = wordToListHUN(word[0]);
                //console.log("szűk", word[0], wordcount)
            } else continue;
        } else {
            wordsl = wordToListENG(word);
        }
        //console.log("wordsl", wordsl)
        for (let word1 of wordsl) {
            if (word1.includes('_')) {
                w1 = [];
                for (let letter of word1) {
                    if (letter != '_') w1.push(letter);
                }
                word1 = w1;
            }
            key1 = [word1[0], word1.length.toString()].join("");
            partsofdictionary[key1].push(word1);
        }
    }
}

function wordToListHUN(word) {
    let wordsl = [];
    const digraph = ['CS', 'GY', 'LY', 'NY', 'SZ', 'TY', 'ZS'];
    let position = [];
    i = 0;
    while (i < word.length - 1) {
        if (digraph.includes(word.slice(i, i + 2))) {
            position.push(i);
            i += 1;
        }
        i += 1;
    }
    if (!position.length) {
        wordsl.push(word.split(""));
        return wordsl;
    }
    let words = [];
    words.push(word);
    let newword;
    for (let j of position) {
        for (let k = 0; k < words.length; k++) {
            if (words[k].slice(j, j + 2) == 'CS') {
                newword = [words[k].slice(0, j), '01', words[k].slice(j + 2)].join("");
                words.push(newword);
            } else if (words[k].slice(j, j + 2) == 'GY') {
                newword = [words[k].slice(0, j), '02', words[k].slice(j + 2)].join("");
                words.push(newword);
            } else if (words[k].slice(j, j + 2) == 'LY') {
                newword = [words[k].slice(0, j), '03', words[k].slice(j + 2)].join("");
                words.push(newword);
            } else if (words[k].slice(j, j + 2) == 'NY') {
                newword = [words[k].slice(0, j), '04', words[k].slice(j + 2)].join("");
                words.push(newword);
            } else if (words[k].slice(j, j + 2) == 'SZ') {
                newword = [words[k].slice(0, j), '05', words[k].slice(j + 2)].join("");
                words.push(newword);
            } else if (words[k].slice(j, j + 2) == 'TY') {
                newword = [words[k].slice(0, j), '06', words[k].slice(j + 2)].join("");
                words.push(newword);
            } else if (words[k].slice(j, j + 2) == 'ZS') {
                newword = [words[k].slice(0, j), '07', words[k].slice(j + 2)].join("");
                words.push(newword);
            }
        }
    }
    for (let ws of words) {
        wordl = ws.split("");
        wordlnew = [];
        for (let i = 0; i < wordl.length; i++) {
            if (wordl[i] == '0') continue;
            if (['1', '2', '3', '4', '5', '6', '7'].includes(wordl[i])) {
                if (wordl[i] == '1') wordlnew.push('CS');
                if (wordl[i] == '2') wordlnew.push('GY');
                if (wordl[i] == '3') wordlnew.push('LY');
                if (wordl[i] == '4') wordlnew.push('NY');
                if (wordl[i] == '5') wordlnew.push('SZ');
                if (wordl[i] == '6') wordlnew.push('TY');
                if (wordl[i] == '7') wordlnew.push('ZS');
            } else wordlnew.push(wordl[i]);
        }
        wordsl.push(wordlnew);
    }
    return wordsl;
}

function wordToListENG(word) {
    let wordsl = [];
    wordsl.push(word.split(""));
    return wordsl;
}

function displayWordSearch() {
    try {
        destroyPopup();
    } catch (err) { }
    lockOnUI();
    let parente = document.getElementById("board-rack");
    popup1 = document.createElement("div");
    popup1.setAttribute("class", "popup");
    popup1.style.fontSize = fontsizebutton;
    parente.appendChild(popup1);
    let form1 = document.createElement("form");
    form1.setAttribute("class", "popupcontent");
    popup1.appendChild(form1);
    let fieldset1 = document.createElement("fieldset");
    form1.appendChild(fieldset1);
    let legend1 = document.createElement("legend");
    legend1.innerHTML = "Írd be a keresett szót";
    legend1.style.fontSize = "50%"
    fieldset1.appendChild(legend1);
    input1 = document.createElement("input");
    input1.setAttribute("name", "word");
    input1.setAttribute("id", "word");
    input1.setAttribute("class", "textinput");
    input1.setAttribute("autocomplete", "off");
    input1.setAttribute("onkeypress", "return event.keyCode != 13");
    input1.style.fontSize = fontsizebutton;
    input1.style.background = "white";
    input1.style.color = "darkred";
    input1.style.marginBottom = fieldsize.toString() + "px";
    fieldset1.appendChild(input1);
    input1.addEventListener("keyup", wordSearch);
    let button1 = document.createElement("button");
    button1.innerText = "Rendben";
    button1.addEventListener("click", destroyPopup);
    button1.type = "button";
    button1.className = "UI-button";
    button1.style.height = Math.floor(fieldsize * 1).toString() + "px";
    button1.style.fontSize = fontsizebutton;
    button1.style.width = "40%";
    fieldset1.appendChild(button1);
    input1.focus();
    let boardandrack = document.querySelector("#board-rack");
    let rectb = getElementPosition(boardandrack);
    let rectp = getElementPosition(form1);
    popup1.style.left = Math.floor(rectb.left + (rectb.width - rectp.width) / 2).toString() + "px";
    popup1.style.top = Math.floor(rectb.top + (rectb.height - rectp.height) / 2).toString() + "px";
}

function wordSearch(ev) {
    ev.preventDefault();
    input1 = document.querySelector("#word");
    let notfound = checkDictionary([input1.value.toUpperCase()]);
    if (ev.key == " " || ev.key == "Escape" || ev.key == "Enter") {
        try {
            destroyPopup();
        } catch (err) { }
        lockOffUI();
    }
    if (notfound.length) {
        input1.style.color = "darkred";
    } else {
        input1.style.color = "green";
    }
}

function timer() {
    timeout = setInterval(displayTime, 1000);
}

function displayTime() {
    let t
    t = document.querySelector("#time");
    t.setAttribute("value", currenttime);
    manageProgressbar();
    if (currenttime == 0) {
        try {
            destroyPopup();
        } catch (err) { }
        if (validateNewWords()) {
            pass1();
        }
        if (ingame) {
            clearInterval(timeout);
            //back();
            //emptyRack();
            //loadRack();
            resetTimer(timelimit);
        }
    }
    currenttime -= 1;
}

function resetTimer(ctime) {
    let tofturn = (timelimit - currenttime);
    let t = document.querySelector("#time");
    currenttime = ctime;
    t.setAttribute("value", currenttime);
    timer();
    saveGame();
}

function manageProgressbar() {
    progressbar.value = currenttime;
}

function createSack() {
    sack = [];
    lettersinsack = 0;
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i][1]; j++) {
            sack.push([letters[i][0], letters[i][2]]);
            lettersinsack++;
        }
    }
}

//function decideOrientation() {
/*console.log("window.innerWidth", window.innerWidth);
console.log("document.documentElement.clientWidth", document.documentElement.clientWidth);
console.log("document.body.clientWidth", document.body.clientWidth);
console.log("window.innerHeight", window.innerHeight);
console.log("document.documentElement.clientHeight", document.documentElement.clientHeight);
console.log("document.body.clientHeight", document.body.clientHeight);*/
/*  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  height > width ? orientation1 = "portrait" : orientation1 = "landscape";
}*/

function adaptToChangedSize() {
    fieldsize = Math.floor((height - fields.length) / (fields.length + 4)) > 23 ? Math.floor((height - fields.length) / (fields.length + 4)) : 23;
    // console.log("fieldsize",fieldsize)
    if (touchdevice) {
        rackfieldsize = Math.floor(fieldsize * (fields[0].length-5) / racksize);
        dashboard = document.querySelector("#dashboard");
        dashboard.style.position = "sticky";
        //dashboard.style.top = 0;
    } else {
        rackfieldsize = fieldsize;
    }
    fontsizeletter = Math.floor(fieldsize * 0.7).toString() + "px";
    fontsizebutton = Math.floor(fieldsize * 0.7).toString() + "px";
    fontsizelabel = Math.floor(fieldsize * 0.3).toString() + "px";
    for (let rindex = 0; rindex < fields.length; rindex++) {
        for (let cindex = 0; cindex < fields[0].length; cindex++) {
            fields[rindex][cindex].style.width = fieldsize.toString() + "px";
            fields[rindex][cindex].style.height = fieldsize.toString() + "px";
            fields[rindex][cindex].style.maxWidth = fieldsize.toString() + "px";
            fields[rindex][cindex].style.maxHeight = fieldsize.toString() + "px";
            fields[rindex][cindex].style.minWidth = fieldsize.toString() + "px";
            fields[rindex][cindex].style.minHeight = fieldsize.toString() + "px";
            /*fields[rindex][cindex].setAttribute('style', `width: ${fieldsize.toString()}px !important`);
            fields[rindex][cindex].setAttribute('style', `height: ${fieldsize.toString()}px !important`);*/
        }
    }
    for (let cindex = 0; cindex < rackfields.length; cindex++) {
        rackfields[cindex].style.width = rackfieldsize.toString() + "px";
        rackfields[cindex].style.height = rackfieldsize.toString() + "px";
    }
    let letters = document.querySelectorAll(".letter");
    for (let letter of letters) {
        letter.style.fontSize = fontsizeletter;
        letter.style.width = "100%";
        letter.style.height = "100%";
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let letter of lettersonrack) {
        letter.style.fontSize = fontsizeletter;
        letter.style.width = "100%";
        letter.style.height = "100%";
    }
    let dashboardtrs = document.querySelectorAll(".dashboard-tr");
    for (let tr of dashboardtrs) {
        tr.style.height = (fieldsize * 1.1).toString() + "px";
    }
    let buttons = document.querySelectorAll(".UI-button");
    for (let button of buttons) {
        button.style.fontSize = fontsizebutton;
        button.style.height = Math.floor(fieldsize * 1).toString() + "px";
    }
    let inputs = document.querySelectorAll(".UI-input");
    for (let input of inputs) {
        input.style.fontSize = fontsizebutton;
        input.style.height = Math.floor(fieldsize * 1).toString() + "px";
    }
    let labels = document.querySelectorAll(".input-label");
    for (let label of labels) {
        label.style.fontSize = fontsizelabel;
        label.style.height = Math.floor(fieldsize * 0.8).toString() + "px";
    }
    document.querySelector("h1").style.fontSize = fontsizebutton;
    document.querySelector("#small1").style.fontSize = fontsizelabel;
    numberlabelsize = Math.floor(fieldsize * 0.5);
    numberfontsize = Math.floor(fieldsize * 0.3);
    let boardform = document.querySelector("#board-form");
    let rectboard = getElementPosition(boardform);
    let rackform = document.querySelector("#rack-form");
    let field05 = document.querySelector("#fieldtable-0-5");
    let rectfield = getElementPosition(field05);
    /*console.log("rectfield.left,  5.5 * (fieldsize + 2)",rectfield.left,   5.5 * (fieldsize + 2))*/
    if (touchdevice){
        rackform.style.left = (rectboard.left + (rectboard.width-racksize*(rackfieldsize+2))/2-10).toString() + "px";
    }else{
        rackform.style.left = (rectfield.left + fieldsize * 0.5 - 10).toString() + "px";
    }
    //rackform.style.width = rectboard.width.toString()+"px";
    let boardandrack = document.querySelector("#board-rack");
    boardandrack.style.minHeight = height.toString() + "px";
    console.log("rectboard.width", rectboard.width,racksize*(rackfieldsize+2))
    lockOffMain_Rules_Start();
}

function getElementPosition(element) {
    let rect = element.getBoundingClientRect();
    return rect;
}

function initGame() {
    let div = document.createElement('div');
    if ('draggable' in div || ('ondragstart' in div && 'ondrop' in div))
        console.log("Drag and Drop API is supported!");
    document.querySelector("#start-screen").style.display = "none";
    document.querySelector("h2").style.display = "inline-block";
    document.querySelector("h2").style.fontsize = "150%";
    touchdevice = true;
    /*decideOrientation();*/
    document.querySelector("#dashboard").style.display = "inline-block";
    document.querySelector("#title1").style.marginLeft = "2%";
    document.querySelector("#game-container").style.marginLeft = "2%";
    //window.addEventListener("resize", adaptToChangedSize);
    progressbar = document.querySelector("#progress");
    bindButtons();
    let savedgames = localStorage.getItem('SavedGame_Betuteboly');
    savedgame = JSON.parse(savedgames);
    if (savedgame) {
        try {
            loadGame();
        } catch (err) {
            console.log("nem sikerült betölteni", err)
            localStorage.clear();
        }
    } else {
        drawBoard(board_1);
        drawRack();
    }
    adaptToChangedSize();
    console.log("savedgame,sack", savedgame, sack.length)
    if (!savedgame) {
        selectLanguage(language);
        aivocabulary = parseInt(document.querySelector("#number-of-words").value, 10);
        aiusedletters = parseInt(document.querySelector("#number-of-letters").value, 10);
        aistrength = parseInt(document.querySelector("#ai-strength").value, 10);
        timelimit = parseInt(document.querySelector("#time-limit").value, 10);
        createPartsOfDictionary();
        //createSack();
        progressbar.max = timelimit;
        progressbar.value = currenttime;
        //lockOffUI();
        lockOffMain_Rules_Start();
    }
}

function numOfWordsChange() {
    nw = document.querySelector("#number-of-words").value;
    if (nw == 2) {
        text1 = "normál";
    } else text1 = "szűk";
    document.querySelector("#number-of-words-value").innerHTML = text1;
}

function numOfLettersChange() {
    nl = document.querySelector("#number-of-letters").value;
    document.querySelector("#number-of-letters-value").innerHTML = nl;
}

function aiStrengthChange() {
    ais = document.querySelector("#ai-strength").value;
    document.querySelector("#ai-strength-value").innerHTML = ais;
}

function timeLimitChange() {
    tl = document.querySelector("#time-limit").value;
    document.querySelector("#time-limit-value").innerHTML = tl;
}

function checkSavedGame() {
    let savedgames = localStorage.getItem('SavedGame_Betuteboly');
    savedgame = JSON.parse(savedgames);
    if (savedgame) {
        displayMessage("Figyelem!", "Az előző játék félbeszakadt.<br> Szeretnéd folytatni?", initGame, setupNewGame, "setup-new-game", "#setup-new-game");
    } else {
        setupNewGame();
    }
}

function setupNewGame() {
    try {
        popup1.remove();
    } catch (err) { }
    localStorage.setItem('SavedGame_Betuteboly', JSON.stringify(false));
    document.querySelector("#setup-new-game").style.visibility = "visible";
    placeYesMarks();
}

function initStartScreen() {
    touchdevice = ('ontouchstart' in document.documentElement);
    startscreen = document.querySelector("#start-screen");
    fieldsize = 40;
    fontsizeletter = 20 + "px";
    fontsizebutton = 20 + "px";
    startscreeninnerdiv = document.querySelector("#start-screen-inner-div");
    startscreeninnerdiv.style.backgroundImage = "url('img/betutebolybackground.png')";
    startscreeninnerdiv.style.backgroundRepeat = "no-repeat";
    startscreeninnerdiv.style.backgroundSize = "100%";
    startscreeninnerdiv.style.backgroundPosition = "top center";
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    startscreen.style.minHeight = height.toString() + "px";
    checkSavedGame();
}

initStartScreen();

