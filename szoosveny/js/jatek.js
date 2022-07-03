
const board_1 = [['.', '.', '!', '6', '.', '.', '.', '.', '.', '#11', '.', '.', '.', '5', '!', '9', '#14', '#15', '.', '.', '.', '2', '.', '.', '#12', '.', '5', '.', '.', '.', 'P', '.', '2', '.', '.', '.', '.', '.', '.', '9',],
['.', '.', '1', '!', 'K', '.', '.', '.', '.', '.', '!', '.', '.', '.', '!', '!', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '!', '!', '2', '.', '.', '.', '.', '!', '.', '.', '.', '3', '!', '4', '.', '.', '.', '.', '.', 'U', '5', '!', '.', '.', '.', '.', '.', '.', '.', '.', '7', '!', '.', '.', '3', '.', '.'],
['.', '.', '.', '.', '.', '!', '!', '.', '.', '4', '!', '5', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '!', '4', '.', '.', '.', '.', '.', '.', '.', '.', '!', '#5', '.', '#7', 'O', 'R', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '4', '!', '.', '.', '.', '.', '#4', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '!', '2', '.', '.', '.', '!', '.', '.', '.', '!', '!', '4', '.'],
['.', '.', '.', '.', '.', '!', '!', '2', '.', '.', '.', '!', 'I', '.', '.', '.', '1', '!', '3', '.', '.', '.', '.', '.', '.', '.', '!', '7', '!', '#7', '#3', '.', 'A', '.', '.', '.', '.', '4', '!', 'D'],
['.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '!', '.', '.', '.', '.', '.', '6', '!', '!', '!', '!', '.', '.', '.', '!', '4', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '#8', '.', '.'],
['.', '.', '.', '.', 'T', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2', '!', '!', '.', '.', '.', '9', '!', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '2', '!', '.', '.'],
['1', '.', '.', '.', '.', '.', 'Ó', '.', '.', '.', '.', '.', '.', '.', '.', '!', '3', '.', '.', '!', '.', '.', '.', '!', '.', '.', '.', '.', '.', '4', '!', '!', '4', '.', '.', '.', '!', 'Ú', '.', '.'],
['.', '!', '.', '.', 'L', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '!', '.', '.', '!', '5', '.', '.', '.'],
['#14', '9', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '!', '6', '!', '!', '.', '.', '.', '.', '.', '.', '3', '!', 'Á', '!', 'Ü', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '!', '1', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '!', 'N', '!', '.', '.', '.', '.', '!', '!', '!', '!'],
['.', '.', '.', '!', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '2', '!', '.', '.', '.', '.', '.', '!', 'G', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '7', '1', '9'],
['.', '.', '.', '.', '3', '#2', '.', '.', '.', '.', '.', '.', '.', '.', 'Ö', '.', '.', '!', '3', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', 'A', '.', '.', '.', '.', '#4', '!', '2', '6', '4'],
['3', '.', '.', '.', '.', '!', '2', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '!', '!', '.', '.', '.', '.', '.', '5', '1', '8'],
['.', '.', '.', '.', '.', 'J', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#1', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2', '!', '6', '.', '.', '.', '#5', '!', '3', '9', '3'],
['.', '.', '.', '.', '.', '.', '3', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.', 'Í', '.', '!', '1', '.', '.', '.', '.', '.', '!', '!', '!', '!'],
['.', '.', '!', '!', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '6', '!', '4', '!', '.', '.', '.', '.', '.', '4', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
['É', '!', '8', '!', '.', '!', 'V', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '!', '!', '#5', '2', '.', '.', '!', '7', '!', '3', '.', '.', '.', '.', '.', '!', '!', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '4', '!', '!', 'C', '3', '.', '.', '.', '.', '.', '.', '.', '.', '!', '5', '.', '!', '.', '.', '#14', '.', 'Ő', '!', '2', '.', '.', '.', '!', '#5', 'V', '#8', '.'],
['#15', '!', '.', '!', '!', '!', '!', '!', '!', '.', '6', '!', '!', '.', '!', '!', '!', '!', '#13', '.', '#5', '!', 'M', '.', '.', '!', '.', '.', '.', '.', '.', '!', '.', '.', '!', '5', '.', '.', '!', '.'],
['6', '.', '.', '1', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '2', '!', '.', '!', '.', '.', '.', '.', '5', '!', '.', '.', '.', '.', '.', '#9', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '!', '.', '#3', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '9', '.', '.', '.', '.', '.', '.'],
['.', '.', '9', '.', '!', '.', '.', '.', '!', '2', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '!', '.', '.', '1', '!', '.', '.', '.', '.', '.', '.', '.', 'B', '.', 'R', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '2', '.', 'Z', '.', '3'],
['.', '.', '.', '.', '!', '4', '.', '.', '!', '.', '.', '.', '.', 'Y', '.', '.', '.', '.', '.', '.', '.', '.', '.', '!', 'H', '.', '.', '.', '.', '.', '!', '.', '.', '.', '!', '!', '!', '!', '.', '.'],
['.', '.', '.', '.', '!', '.', '.', '.', '2', '#1', '.', '.', '.', '!', '.', '.', '.', '.', 'E', '.', '.', '.', '#6', '5', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '9', '.', '.'],
['F', '.', '.', '.', '7', '!', '.', '.', '.', '.', '!', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '!', '.', '.', '.', '.', '.', '.', '.', '.', '!', '2', '.', '.', '.', '.', '.', '.', '.', 'S'],
['!', '!', '!', '.', '.', '.', '.', '.', '.', '.', '.', '!', '.', '.', '8', '!', '.', '.', '.', '.', '!', '4', '.', '.', '.', '.', '.', '.', '.', '.', '#13', '.', '.', '.', '.', '.', '.', '!', '!', '!'],
['9', '.', '#14', '#7', '.', '.', '.', '.', '1', '.', '#10', '9', '.', '.', '.', '.', '.', '!', '9', '.', '.', '.', '.', '2', '.', 'Ű', '1', '.', '.', '.', '7', '.', '.', '.', '.', '.', '.', '9', '#11', '#13']];

const viewp = ["0000000111110000000",
    "0000011111111100000",
    "0001111111111111000",
    "0011111111111111100",
    "0011111111111111100",
    "0111111111111111110",
    "0111111111111111110",
    "1111111111111111111",
    "1111111111111111111",
    "1111111111111111111",
    "1111111111111111111",
    "1111111111111111111",
    "0111111111111111110",
    "0111111111111111110",
    "0011111111111111100",
    "0011111111111111100",
    "0001111111111111000",
    "0000011111111100000",
    "0000000111110000000"];


const fieldsobj = {
    ".": [1, "", ""], "!": [0, "", ""], "1": [1, "", "img/1.svg"], "2": [1, "", "img/2.svg"], "3": [1, "", "img/3.svg"], "4": [1, "", "img/4.svg"],
    "5": [1, "", "img/5.svg"], "6": [1, "", "img/6.svg"], "7": [1, "", "img/7.svg"], "8": [1, "", "img/8.svg"], "9": [1, "", "img/9svg"],
    "#1": [0, "TÓ", "img/lake.svg"], "#2": [0, "FAL", "img/wall.svg"], "#3": [0, "PAD", "img/bench.svg"], "#4": [0, "TŰZ", "img/fire2.svg"],
    "#5": [0, "FA", "img/tree1.svg"], "#6": [0, "HÁZ", "img/house.svg"], "#7": [0, "ÚT", "img/road.svg"], "#8": [0, "ÁG", "img/branch1.svg"],
    "#9": [0, "AVAR", "img/fallenleaves.svg"], "#10": [0, "VÁR", "img/castle.svg"], "#11": [0, "ROM", "img/ruin.svg"], "#12": [0, "RÉT", "img/meadow1.svg"],
    "#13": [0, "FŰ", "img/grass1.svg"], "#14": [0, "ÉR", "img/creek.svg"], "#15": [0, "KŐ", "img/stone.svg"]
};

const letters_hun = [['*', 3, 0],
['A', 8, 0],
['Á', 6, 0],
['B', 2, 0],
['C', 2, 0],
['D', 3, 0],
['E', 11, 0],
['É', 4, 0],
['F', 2, 0],
['G', 4, 0],
['H', 2, 0],
['I', 5, 0],
['Í', 1, 0],
['J', 1, 0],
['K', 5, 0],
['L', 9, 0],
['M', 3, 0],
['N', 5, 0],
['O', 6, 0],
['Ó', 2, 0],
['Ö', 2, 0],
['Ő', 2, 0],
['P', 2, 0],
['Q', 0, 0],
['R', 7, 0],
['S', 10, 0],
['T', 10, 0],
['U', 2, 0],
['Ú', 1, 0],
['Ü', 1, 0],
['Ű', 1, 0],
['V', 2, 0],
['W', 0, 0],
['X', 0, 0],
['Y', 2, 0],
['Z', 7, 0]];

const startfieldx = 0;
const startfieldy = 0;
let firstmove = true;
let letters;
let language = 'hun';
let dictionary = [];
let partsofdictionary = {};

const racksize = 9;

let sack = [];
let slettersonrackoriginal;

let turnlimit = 100;
let turns;

let timelimit = 120;
let currenttime = 0;
let timeout;
let progressbar;

let fields = [];
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

let ingame = false;

let wordsingame = [];

let mode = "draganddrop";

let arrowposition = [];

let rect;

let touchdevice;

let counter = 0;

function createTd(fieldtype, parent, id) {
    let td = document.createElement("td");
    td.setAttribute("id", id);
    switch (fieldtype) {
        case '.':
            td.setAttribute("class", "normal-field empty");
            setDragAndDRop(td)
            break;
        case '-':
            td.setAttribute("class", "rack-field empty");
            setDragAndDRop(td)
            break;
        case '1':
            td.setAttribute("class", "normal-field bonus-field-1 empty");
            td.style.backgroundImage = "url('img/1.svg')"
            setDragAndDRop(td)
            break;
        case '2':
            td.setAttribute("class", "normal-field bonus-field-2 empty");
            td.style.backgroundImage = "url('img/2.svg')"
            setDragAndDRop(td)
            break;
        case '3':
            td.setAttribute("class", "normal-field bonus-field-3 empty");
            td.style.backgroundImage = "url('img/3.svg')"
            setDragAndDRop(td)
            break;
        case '4':
            td.setAttribute("class", "normal-field bonus-field-4 empty");
            td.style.backgroundImage = "url('img/4.svg')"
            setDragAndDRop(td)
            break;
        case '5':
            td.setAttribute("class", "normal-field bonus-field-5 empty");
            td.style.backgroundImage = "url('img/5.svg')"
            setDragAndDRop(td)
            break;
        case '6':
            td.setAttribute("class", "normal-field bonus-field-6 empty");
            td.style.backgroundImage = "url('img/6.svg')"
            setDragAndDRop(td)
            break;
        case '7':
            td.setAttribute("class", "normal-field bonus-field-7 empty");
            td.style.backgroundImage = "url('img/7.svg')"
            setDragAndDRop(td)
            break;
        case '8':
            td.setAttribute("class", "normal-field bonus-field-8 empty");
            td.style.backgroundImage = "url('img/8.svg')"
            setDragAndDRop(td)
            break;
        case '9':
            td.setAttribute("class", "normal-field bonus-field-9 empty");
            td.style.backgroundImage = "url('img/9.svg')"
            setDragAndDRop(td)
            break;
        case '!':
            td.setAttribute("class", "wall-field");
            td.style.backgroundImage = "url('img/mountain1.svg')"
            break;
        default:
            let fieldtypes = [];
            for (let fieldo of Object.keys(fieldsobj)) {
                fieldtypes.push(fieldo);
            }
            if (fieldtype.includes('#')) {
                for (let fieldo of Object.keys(fieldsobj)) {
                    if (fieldo == fieldtype) {
                        td.setAttribute("id", fieldtype);
                        td.setAttribute("class", "picture-field");
                        picture = document.createElement("input");
                        td.appendChild(picture);
                        picture.value = fieldsobj[fieldtype][1];
                        picture.className = "picture";
                        picture.setAttribute("type", "button");
                        picture.setAttribute("inputmode", "none");
                        picture.draggable = false;
                        picture.setAttribute("onkeydown", "return false");
                        picture.readonly = true;
                        td.style.background = "";
                        td.setAttribute("style", `background-image: url(${fieldsobj[fieldtype][2]})`);
                        td.setAttribute("onmouseover", "switchDelay(event)");
                        td.setAttribute("onclick", "displayContent(event)");
                        td.setAttribute("onmouseout", "removeDisplayedContent()");
                    }
                }
            } else {
                if (!(fieldtypes.includes(fieldtype))) {
                    value = fieldtype;
                    letteri = restoreLetter(-1, value, "ontheboard");
                    letteri.setAttribute("class", "letter leter-on-board start");
                    letteri.draggable = false;
                    letteri.disabled = true;
                    td.appendChild(letteri);
                    td.setAttribute("ondragover", "");
                    td.setAttribute("class", "normal-field occupied");
                    td.setAttribute("ondrop", "drop(event)");
                }
            }
    }
    parent.appendChild(td);
    if (fieldtype != '-') {
        let fog = document.createElement("div");
        fog.className = "fog";
        td.appendChild(fog);
        fog.setAttribute("ondragover", "");
    }
    return td;
}

function setDragAndDRop(td) {
    td.setAttribute("ondrop", "drop(event)");
    td.setAttribute("ondragover", "allowDrop(event)");
    if (!td.classList.contains("rack-field")) {
        td.setAttribute("onclick", "changeMode(event)");
    }
    td.addEventListener('dragenter', onDragEnter);
    td.addEventListener('dragleave', onDragLeave);
}

function switchDelay(ev) {
    delay = setTimeout(function () { displayContent(ev); }, 500);
}

function displayContent(ev) {
    if (ev.target.classList.contains("fog")) {
        return;
    }
    for (let fchild of ev.target.childNodes) {
        if (fchild.classList.contains("content-of-field")) {
            fchild.remove();
            return;
        }
    }
    let contentoffield = document.createElement("div");
    ev.target.appendChild(contentoffield);
    contentoffield.setAttribute("class", "content-of-field");
    for (let fieldo of Object.keys(fieldsobj)) {
        if (fieldo == ev.target.id) {
            contentoffield.innerHTML = `<img style="padding:10px"  src="${fieldsobj[ev.target.id][2]}" alt="kép">${fieldsobj[ev.target.id][1]}`;
            break;
        }
    }
    let rectfield = getElementPosition(ev.target);
    contentoffield.style.left = (rectfield.right + 2).toString() + "px";
    contentoffield.style.top = (rectfield.bottom + 2).toString() + "px";
}

function removeDisplayedContent() {
    clearTimeout(delay);
    try {
        document.querySelector(".content-of-field").remove();
    } catch (err) { }
}

function drawBoard(board1) {
    let fieldtable = document.querySelector("#board");
    fieldtable.innerHTML = "";
    let td;
    for (let i = 0; i < board1.length; i++) {
        fields[i] = [];
        let tr = document.createElement("tr");
        for (let j = 0; j < board1[i].length; ++j) {
            let id = "fieldtable-" + i.toString() + "-" + j.toString();
            td = createTd(board1[i][j], tr, id);
            fields[i].push(td);
            if (td.childNodes.length > 1) {
                td.firstChild.style.display = "none";
            }
            if (i == startfieldx && j == startfieldy) {
                td.classList.add("start-field");
                td.style.backgroundImage = "url('img/start.svg')";
            }
        }
        fieldtable.appendChild(tr);
    }
}

function drawRack() {
    rackfields = [];
    let rackfieldtable = document.querySelector("#rack");
    rackfieldtable.innerHTML = '';
    let tr = document.createElement("tr");
    let td;
    if (touchdevice) {
        td = document.createElement("td");
        let button1 = document.createElement("button");
        button1.innerText = "Vissza";
        button1.addEventListener("click", back);
        button1.type = "button";
        button1.id = "back-tray";
        button1.className = "tray-button";
        td.appendChild(button1);
        tr.appendChild(td);
    }
    for (let i = 0; i < racksize; i++) {
        let id = "rackfieldtable-" + i.toString() + "-0";
        td = createTd('-', tr, id);
        rackfields.push(td);
    }
    if (touchdevice) {
        td = document.createElement("td");
        let button2 = document.createElement("button");
        button2.innerText = "Keverés";
        button2.addEventListener("click", shuffle);
        button2.type = "button";
        button2.className = "tray-button";
        button2.id = "shuffle-tray";
        td.appendChild(button2);
        tr.appendChild(td);

        td = document.createElement("td");
        let button3 = document.createElement("button");
        button3.innerText = "Kész";
        button3.addEventListener("click", passOrValidate);
        button3.type = "button";
        button3.className = "tray-button";
        button3.id = "done-tray";
        td.appendChild(button3);
        tr.appendChild(td);
        document.querySelector("#back").style.display = "none";
        document.querySelector("#shuffle").style.display = "none";
        document.querySelector("#done").style.display = "none";
    }
    rackfieldtable.appendChild(tr);
}

// Mouse click  ------------------------------------------------------------------------------------

function changeMode(ev) {
    if (ev.target.nodeName != "TD" && ev.target.parentElement != arrowposition[0]) return;
    if (ev.target.classList.contains("normal-field") && ev.target.classList.contains("empty")) {
        if (!ev.target.hasChildNodes()) {
            mode = "mouseclick";
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
        document.querySelector("#arrow").style.fontSize = fontsizeletter * 0.7;
    } else {
        arrowposition[1] = "down";
        arrowposition[0].innerHTML = `<b id="arrow" class="arrow">&#8595</b>`;
        document.querySelector("#arrow").style.fontSize = fontsizeletter * 0.7;
    }
}

function placeLetter(ev) {
    let parentofclickedletter = ev.target.parentElement;
    if (mode == "mouseclick" && arrowposition.length > 0) {
        if (ev.target.classList.contains("letter-on-rack") && arrowposition != []) {
            tryToRemoveArrow();
            try {
                arrowposition[0].appendChild(ev.target);
            } catch (err) { }
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
                document.querySelector("#arrow").style.fontSize = fontsizeletter * 0.7;
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
                document.querySelector("#arrow").style.fontSize = fontsizeletter * 0.7;
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
    ev.target.style.background = '';
    if (ev.target.classList.contains("bonus-field-1")) {
        ev.target.style.backgroundImage = "url('img/1.svg')"
    } else if (ev.target.classList.contains("bonus-field-2")) {
        ev.target.style.backgroundImage = "url('img/2.svg')"
    } else if (ev.target.classList.contains("bonus-field-3")) {
        ev.target.style.backgroundImage = "url('img/3.svg')"
    } else if (ev.target.classList.contains("bonus-field-4")) {
        ev.target.style.backgroundImage = "url('img/4.svg')"
    } else if (ev.target.classList.contains("bonus-field-5")) {
        ev.target.style.backgroundImage = "url('img/5.svg')"
    } else if (ev.target.classList.contains("bonus-field-6")) {
        ev.target.style.backgroundImage = "url('img/6.svg')"
    } else if (ev.target.classList.contains("bonus-field-7")) {
        ev.target.style.backgroundImage = "url('img/7.svg')"
    } else if (ev.target.classList.contains("bonus-field-8")) {
        ev.target.style.backgroundImage = "url('img/8.svg')"
    } else if (ev.target.classList.contains("bonus-field-9")) {
        ev.target.style.backgroundImage = "url('img/9.svg')"
    } else if (ev.target.classList.contains("start-field")) {
        ev.target.style.backgroundImage = "url('img/start.svg')"
    }
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
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("application/x-moz-node");
    var data = ev.dataTransfer.getData("text/plain");
    if (ev.target.classList.contains("letter-on-rack") || ev.target.classList.contains("fog")) return;
    if (ev.target.hasChildNodes()) return;
    appendedletter = ev.target.appendChild(document.getElementById(data));
    ev.target.setAttribute("ondragover", "");
    if (ev.target.classList.contains("empty")) {
        ev.target.classList.remove("empty");
        ev.target.classList.add("occupied");
        if (ev.target.classList.contains("rack-field")) appendedletter.style.color = "black";
    }
    if (ev.target != parentofdraggedletter) {
        parentofdraggedletter.setAttribute("ondragover", "allowDrop(event)");
        if (parentofdraggedletter.classList.contains("occupied")) {
            parentofdraggedletter.classList.remove("occupied");
            parentofdraggedletter.classList.add("empty");
        }
    }
    parentofdraggedletter.style.background = "";
    if (parentofdraggedletter.classList.contains("bonus-field-1")) {
        parentofdraggedletter.style.backgroundImage = "url('img/1.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-2")) {
        parentofdraggedletter.style.backgroundImage = "url('img/2.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-3")) {
        parentofdraggedletter.style.backgroundImage = "url('img/3.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-4")) {
        parentofdraggedletter.style.backgroundImage = "url('img/4.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-5")) {
        parentofdraggedletter.style.backgroundImage = "url('img/5.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-6")) {
        parentofdraggedletter.style.backgroundImage = "url('img/6.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-7")) {
        parentofdraggedletter.style.backgroundImage = "url('img/7.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-8")) {
        parentofdraggedletter.style.backgroundImage = "url('img/8.svg')"
    } else if (parentofdraggedletter.classList.contains("bonus-field-9")) {
        parentofdraggedletter.style.backgroundImage = "url('img/9.svg')"
    } else if (parentofdraggedletter.classList.contains("start-field")) {
        parentofdraggedletter.style.backgroundImage = "url('img/start.svg')"
    }
    ev.target.style.background = "";
    if (ev.target.classList.contains("bonus-field-1")) {
        ev.target.style.backgroundImage = "url('img/1.svg')"
    } else if (ev.target.classList.contains("bonus-field-2")) {
        ev.target.style.backgroundImage = "url('img/2.svg')"
    } else if (ev.target.classList.contains("bonus-field-3")) {
        ev.target.style.backgroundImage = "url('img/3.svg')"
    } else if (ev.target.classList.contains("bonus-field-4")) {
        ev.target.style.backgroundImage = "url('img/4.svg')"
    } else if (ev.target.classList.contains("bonus-field-5")) {
        ev.target.style.backgroundImage = "url('img/5.svg')"
    } else if (ev.target.classList.contains("bonus-field-6")) {
        ev.target.style.backgroundImage = "url('img/6.svg')"
    } else if (ev.target.classList.contains("bonus-field-7")) {
        ev.target.style.backgroundImage = "url('img/7.svg')"
    } else if (ev.target.classList.contains("bonus-field-8")) {
        ev.target.style.backgroundImage = "url('img/8.svg')"
    } else if (ev.target.classList.contains("bonus-field-9")) {
        ev.target.style.backgroundImage = "url('img/9.svg')"
    } else if (ev.target.classList.contains("start-field")) {
        ev.target.style.backgroundImage = "url('img/start.svg')"
    }
    if (appendedletter.classList.contains("joker")) {
        if (ev.target.classList.contains("normal-field")) {
            createPopup(ev.target);
        } else if (ev.target.classList.contains("rack-field") && ev.target.classList.contains("occupied")) {
            appendedletter.value = '*';
        }
    }
    testNewWords();
}

//-----------------------------------------------------------------------------------------

function setStateOfLetters() {
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; ++j) {
            if (fields[i][j].hasChildNodes() && !fields[i][j].classList.contains("picture-field")
                && !fields[i][j].children[0].classList.contains("start") && !fields[i][j].children[0].classList.contains("fog")) {
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
    emptyRack();
    let randomletters = drawLetters();
    for (let lettercount = 0; lettercount < randomletters.length; lettercount++) {
        for (let rackfield of rackfields) {
            if (rackfield.classList.contains("empty")) {
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
    lockOffUI();
}

function createLetter(lettercount, randomletter) {
    let letteri = document.createElement("input");
    let id = "letter" + turns.toString() + "-" + lettercount.toString();
    letteri.setAttribute("id", id);
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
    letteri.style.fontSize = Math.floor((fieldsize - 2) * 0.9).toString() + "px";
    return letteri;
}

function drawLetters() {
    let j = 0;
    let rand;
    randomletters = [];
    let lettersonrackobj = {};
    while (j < racksize) {
        if (rackfields[j].classList.contains("empty")) {
            while (1) {
                rand = getRndInteger(0, sack.length);
                if (lettersonrackobj[sack[rand][0]] == 2) {
                    continue;
                }
                if (sack[rand][0] in lettersonrackobj) {
                    lettersonrackobj[sack[rand][0]]++;
                } else lettersonrackobj[sack[rand][0]] = 1;
                break;
            }
            randomletters.push(sack[rand]);
        }
        j++;
    }
    return randomletters;
}

function displayTurn() {
    let t;
    t = document.querySelector("#turn");
    t.setAttribute("value", `${turns} / ${turnlimit}`);
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
    turnlimit = 100;
    turns = 1;
    firstmove = true;
    idleturns = 0;
    ingame = true;
    wordsingame = [];
    arrowposition = [];
    displayTurn();
    score = 0;
    displayScore([]);
    drawBoard(board_1); let fieldtypes = [];
    for (let fieldo of Object.keys(fieldsobj)) {
        fieldtypes.push(fieldo);
    }
    removeFog(startfieldx, startfieldy);
    drawRack();
    adaptToChangedSize();
    loadRack();
    clearInterval(timeout);
    resetTimer(timelimit);
    localStorage.setItem('SavedGame_Szoosveny', JSON.stringify(false));
    lockOffUI();
}

function removeFog(rindex, cindex) {
    for (let i = rindex - racksize, k = 0; i < rindex + racksize, k < viewp.length; i++, k++) {
        if (i < 0 || i > fields.length - 1) continue;
        for (let j = cindex - racksize, l = 0; j < cindex + racksize, l < viewp[0].length; j++, l++) {
            if (j < 0 || j > fields[0].length - 1 || viewp[k][l] == 0) continue;
            for (let fchild of fields[i][j].childNodes) {
                if (fchild.classList.contains("fog")) {
                    fchild.remove();
                }
                if (fields[i][j].hasChildNodes() && !fields[i][j].classList.contains("picture-field")) {
                    fields[i][j].lastChild.style.display = "block";
                }
            }
        }
    }
}

function saveGame() {
    localStorage.setItem('SavedGame_Szoosveny', JSON.stringify(true));
    localStorage.setItem('Language_Szoosveny', JSON.stringify(language));
    localStorage.setItem('TimeLimit_Szoosveny', JSON.stringify(timelimit));
    localStorage.setItem('FirstMove_Szoosveny', JSON.stringify(firstmove));
    let fieldstosave = [];
    for (let i = 0; i < fields.length; i++) {
        let rowtosave = [];
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].className == "wall-field") {
                rowtosave.push("!");
            } else {
                if (fields[i][j].classList.contains("empty")) {
                    if (fields[i][j].classList.contains("bonus-field-1")) {
                        rowtosave.push("1");
                    } else if (fields[i][j].classList.contains("bonus-field-2")) {
                        rowtosave.push("2");
                    } else if (fields[i][j].classList.contains("bonus-field-3")) {
                        rowtosave.push("3");
                    } else if (fields[i][j].classList.contains("bonus-field-4")) {
                        rowtosave.push("4");
                    } else if (fields[i][j].classList.contains("bonus-field-5")) {
                        rowtosave.push("5");
                    } else if (fields[i][j].classList.contains("bonus-field-6")) {
                        rowtosave.push("6");
                    } else if (fields[i][j].classList.contains("bonus-field-7")) {
                        rowtosave.push("7");
                    } else if (fields[i][j].classList.contains("bonus-field-8")) {
                        rowtosave.push("8");
                    } else if (fields[i][j].classList.contains("bonus-field-9")) {
                        rowtosave.push("9");
                    } else rowtosave.push(".");
                } else if (fields[i][j].classList.contains("picture-field")) {
                    if (fields[i][j].firstChild.classList.contains("old")) {
                        rowtosave.push(fields[i][j].id + "_o");
                    }
                    else rowtosave.push(fields[i][j].id);
                } else if (fields[i][j].firstChild.classList.contains("start")) {
                    if (fields[i][j].firstChild.classList.contains("old")) {
                        rowtosave.push(fields[i][j].firstChild.value + "_o");
                    }
                    else rowtosave.push(fields[i][j].firstChild.value);
                } else rowtosave.push(fields[i][j].firstChild.value);
            }
        }
        fieldstosave.push(rowtosave);
    }
    localStorage.setItem('Board_Szoosveny', JSON.stringify(fieldstosave));
    fieldstosave = [];
    for (let i = 0; i < fields.length; i++) {
        let rowtosave = [];
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].hasChildNodes() && fields[i][j].lastChild.classList.contains("fog")) {
                rowtosave.push("1");
            } else {
                rowtosave.push("0");
            }
        }
        fieldstosave.push(rowtosave);
    }
    localStorage.setItem('Fog_Szoosveny', JSON.stringify(fieldstosave));
    let rackfieldstosave = [];
    for (let i = 0; i < rackfields.length; i++) {
        try {
            rackfieldstosave.push(rackfields[i].firstChild.value);
        } catch (err) { }
    }
    localStorage.setItem('Rack_Szoosveny', JSON.stringify(rackfieldstosave));
    localStorage.setItem('Sack_Szoosveny', JSON.stringify(sack));
    localStorage.setItem('WordsInGame_Szoosveny', JSON.stringify(wordsingame));
    localStorage.setItem('Turns_Szoosveny', JSON.stringify(turns));
    localStorage.setItem('TurnLimit_Szoosveny', JSON.stringify(turnlimit));
    localStorage.setItem('IdleTurns_Szoosveny', JSON.stringify(idleturns));
    localStorage.setItem('Score_Szoosveny', JSON.stringify(score));
}

function loadGame() {
    let languages = localStorage.getItem('Language_Szoosveny');
    language = JSON.parse(languages);
    selectLanguage(language);
    let timelimits = localStorage.getItem('TimeLimit_Szoosveny');
    timelimit = JSON.parse(timelimits);
    let firstmoves = localStorage.getItem('FirstMove_Szoosveny');
    firstmove = JSON.parse(firstmoves);
    createPartsOfDictionary();
    let turnss = localStorage.getItem('Turns_Szoosveny');
    turns = JSON.parse(turnss);
    let idleturnss = localStorage.getItem('IdleTurns_Szoosveny');
    idleturns = JSON.parse(idleturnss);
    let turnslimits = localStorage.getItem('TurnLimit_Szoosveny');
    turnlimit = JSON.parse(turnslimits);
    let counters = localStorage.getItem('Counter_Szoosveny');
    counter = JSON.parse(counters);
    displayTurn();
    let boardl = localStorage.getItem('Board_Szoosveny');
    boardl1 = JSON.parse(boardl);
    drawBoard(board_1);
    let lettercount = 0;
    let fieldtypes = [];
    for (let fieldo of Object.keys(fieldsobj)) {
        fieldtypes.push(fieldo);
    }
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[0].length; j++) {
            fieldtype = boardl1[i][j];
            if (!(fieldtypes.includes(fieldtype))) {
                if (fieldtype[fieldtype.length - 1] == "o") {
                    fields[i][j].firstChild.classList.add("old")
                } else {
                    if (!fields[i][j].firstChild.classList.contains("start")) {
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
        }
    }
    setStateOfLetters();
    let fogl = localStorage.getItem('Fog_Szoosveny');
    fogl1 = JSON.parse(fogl);
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[0].length; j++) {
            if (fogl1[i][j] == 0) {
                for (let fchild of fields[i][j].childNodes) {
                    if (fchild.classList.contains("fog")) {
                        fchild.remove();
                    }
                    if (fields[i][j].hasChildNodes() && !fields[i][j].classList.contains("picture-field")) {
                        fields[i][j].lastChild.style.display = "block";
                    }
                }
            }
        }
    }
    let rackl = localStorage.getItem('Rack_Szoosveny');
    rackl1 = JSON.parse(rackl);
    drawRack(rackl1);
    for (let lettercount = 0; lettercount < rackl1.length; lettercount++) {
        let value = rackl1[lettercount][0];
        letteri = restoreLetter(lettercount, value, "ontherack");
        rackfields[lettercount].appendChild(letteri);
        rackfields[lettercount].setAttribute("ondragover", "");
        rackfields[lettercount].setAttribute("class", "rack-field occupied");
    }
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    slettersonrackoriginal = [];
    for (let letter of lettersonrack) {
        slettersonrackoriginal.push(letter.value);
    }
    let sackls = localStorage.getItem('Sack_Szoosveny');
    sack = JSON.parse(sackls);
    let wordsingames = localStorage.getItem('WordsInGame_Szoosveny');
    wordsingame = JSON.parse(wordsingames);
    let scores = localStorage.getItem('Score_Szoosveny');
    score = JSON.parse(scores);
    displayScore([]);
    ingame = true;
    clearInterval(timeout);
    resetTimer(timelimit);
    progressbar.max = timelimit;
    displayTime();
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
    if (lettercount >= 0) {
        let id = "letter" + trn.toString() + "-" + lettercount.toString();
        letteri.setAttribute("id", id);
    }
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
        letteri.setAttribute("ondragstart", "");
        letteri.setAttribute("onclick", "");
        letteri.draggable = false;
        letteri.disabled = true;
    }
    letteri.setAttribute("onkeydown", "return false");
    letteri.readonly = true;
    letteri.style.fontSize = Math.floor((fieldsize - 2) * 0.9).toString() + "px";
    for (letter of letters) {
        if (letter[0] == letteri.value) {
            l1points = letter[2];
            break;
        }
    }
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
    removeElements(".available-score");
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[0].length; j++) {
            if (fields[i][j].hasChildNodes()) {
                fields[i][j].lastChild.style.display = "none";
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
            rackfields[i].lastChild.style.display = "none";
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
            if (fields[i][j].hasChildNodes() && (!fields[i][j].classList.contains("picture-field")
                || fields[i][j].lastChild.classList.contains("fog"))) {
                fields[i][j].lastChild.style.display = "block";
            }
        }
    }
    for (i = 0; i < rackfields.length; i++) {
        rackfields[i].lastChild.remove();
        if (rackfields[i].hasChildNodes()) {
            rackfields[i].lastChild.style.display = "block";
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
            if (lettersonrack[i].parentElement.classList.contains("bonus-field-20")) {
                lettersonrack[i].parentElement.style.backgroundImage = "url('img/bonus20.svg')"
            } else if (lettersonrack[i].parentElement.classList.contains("penalty-field-20"));
        }
        lettersonrack[i].style.color = "black";
        for (let j = 0; j < racksize; j++) {
            if (!rackfields[j].hasChildNodes()) {
                rackfields[j].appendChild(lettersonrack[i]);
                if (lettersonrack[i].classList.contains("letter-on-rack") && lettersonrack[i].classList.contains("joker")) {
                    lettersonrack[i].value = '*';
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
    if (words[0] == "not connected") {
        for (let letter of lettersontheboard) {
            letter[0].style.color = "darkred";
        }
        return;
    }
    for (let wordl of wordsl) {
        let w1 = [];
        for (letter of wordl) {
            w1 = w1.concat((letter.value).split(""));
        }
        if (!dictionaryContains(w1, "full")) {
            for (let letter of lettersontheboard) {
                letter[0].style.color = "darkred";
            }
            return;
        }
    }
    for (let letter of lettersontheboard) {
        letter[0].style.color = "yellow";
    }
    scoringreturn = scoring(wordsl);
    turnscore = scoringreturn[0];
    let availablescore = document.createElement("div");
    let priword;
    for (let wordl of wordsl) {
        let newl = 0;
        for (let letter of wordl) {
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
    let rectfield;
    if (!priword[priword.length - 1].classList.contains("picture")) {
        rectfield = getElementPosition(priword[priword.length - 1]);
    } else rectfield = getElementPosition(priword[priword.length - 2]);
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
            displayMessage("Szabálytalan!", "Az első szónak a bal felső sarokból kell kiindulnia.", destroyPopup, "", "game-div", "#board-rack");
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
        if (words[0] == "not connected") {
            displayMessage("Szabálytalan!", "Nem kapcsolódik a korábban táblára került szavakhoz.", destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        let nfsjoined = [];
        for (wordl of wordsl) {
            w1 = [];
            for (letter of wordl) {
                w1 = w1.concat((letter.value).split(""));
            }
            if (!dictionaryContains(w1, "full")) {
                nfsjoined.push(w1.join(''));
            }
        }
        if (nfsjoined.length > 0) {
            displayMessage("Szabálytalan!", `${nfsjoined.join(", ")} nem található a szótárban`, destroyPopup, "", "game-div", "#board-rack");
            return 1;
        }
        let sc = displayScore(wordsl);
        let lobvalues = [];
        for (let letter of lettersontheboard) {
            lobvalues.push(letter[0].value);
        }
        for (let wordl of wordsl) {
            for (let letter of wordl) {
                if (!letter.classList.contains("old")) {
                    letter.classList.add("old");
                }
            }
        }
        wordsingame.push([slettersonrackoriginal, words, [sc.toString()]]);
        setStateOfLetters();
        firstmove = false;
        idleturns = 0;
        for (letter of lettersontheboard) {
            removeFog(letter[1], letter[2]);

        }
    }
    removeElements(".available-score");
    //printBoard();
    if (ingame) {
        turns++;
        if (turns > turnlimit) {
            endOfGame();
        } else {
            loadRack();
            displayTurn();
            clearInterval(timeout);
            resetTimer(timelimit);
        }
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
                } else if (fields[i][j].classList.contains("bonus-field-1")) {
                    row += "1";
                } else if (fields[i][j].classList.contains("bonus-field-2")) {
                    row += "2";
                } else if (fields[i][j].classList.contains("bonus-field-3")) {
                    row += "3";
                } else if (fields[i][j].classList.contains("bonus-field-4")) {
                    row += "4";
                } else if (fields[i][j].classList.contains("bonus-field-5")) {
                    row += "5";
                } else if (fields[i][j].classList.contains("bonus-field-6")) {
                    row += "6";
                } else if (fields[i][j].classList.contains("bonus-field-7")) {
                    row += "7";
                } else if (fields[i][j].classList.contains("bonus-field-8")) {
                    row += "8";
                } else if (fields[i][j].classList.contains("bonus-field-9")) {
                    row += "9";
                } else if (fields[i][j].classList.contains("picture-field")) {
                    for (let fieldo of Object.keys(fieldsobj)) {
                        if (fieldo == fields[i][j].id) {
                            rowtosave.push(fields[i][j].id);
                            break;
                        }
                    }
                } else row += ". ";
            }
        }
        console.log(row);
    }
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
    return lettersontheboard;
}

function pass1() {
    idleturns += 1;
    displayTurn();
    if (idleturns == limitofidleturns) {
        clearInterval(timeout);
        endOfGame();
    } else {
        if (turns > turnlimit) {
            endOfGame();
            return;
        }
        back();
        displayScore([]);
        loadRack();
        displayMessage("Figyelem!", "További " + (limitofidleturns - idleturns).toString() + " passz és a játék véget ér.", destroyPopup, "", "game-div", "#board-rack");
    }
}

function emptyRack() {
    for (let rackfield of rackfields) {
        if (rackfield.hasChildNodes()) {
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
    localStorage.setItem('SavedGame_Szoosveny', JSON.stringify(false));
    let lettersonrack = document.querySelectorAll(".letter-on-rack");
    for (let j = 0; j < lettersonrack.length; j++) {
        lettersonrack[j].draggable = false;
    }
    clearInterval(timeout);
    let found = false;
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; j++) {
            if (fields[i][j].hasChildNodes() && fields[i][j].lastChild.classList.contains("fog")) {
                found = true;
            }
        }
    }
    if (!found) score += 100;
    found = false;
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; j++) {
            if (fields[i][j].hasChildNodes()) {
                for (let fchild of fields[i][j].childNodes) {
                    if (fchild.classList.contains("picture") && !fchild.classList.contains("old")) {
                        found = true;
                    }
                }
            }
        }
    }
    if (!found) score += 100;
    found = false;
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; j++) {
            if (fields[i][j].hasChildNodes()) {
                for (let fchild of fields[i][j].childNodes) {
                    if (fchild.classList.contains("start") && !fchild.classList.contains("old")) {
                        found = true;
                    }
                }
            }
        }
    }
    if (!found) score += 50;
    displayResult();
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
    button1.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
    button2.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
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
    th1.innerHTML = "Sorsolt betűk";
    let th3 = document.createElement("th");
    trh1.appendChild(th3);
    th3.style.fontWeight = "normal";
    th3.style.fontSize = "75%"
    th3.innerHTML = "Szavak";
    th3.colSpan = 2;

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
            td1.style.backgroundColor = wordbgcolor;
            td1.innerHTML = `<div class="words-table" style="background-color: ${wordbgcolor}">${words[field].join(', ')}</div>`;
            if (field == 2) {
                td1.style.textAlign = "right";
            }
        }
        rowcount++;
    }
    document.getElementById("reszletek").disabled = true;
}

function resultText() {
    let rtext = `<br><p style="white-space: pre">Elért pontszám:  <span style="color:yellow; font-size: 200%; font-weight: bold">${score}</span></p>`
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
        }
    }
    if (direction == "down") {
        let cindex = lettersontheboard[0][2];
        for (k = lettersontheboard[0][1]; k < lettersontheboard[lettersontheboard.length - 1][1]; k++) {
            if (!fields[k][cindex].hasChildNodes()) {
                return false;
            }
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

function displayScore(wordsl) {
    let scoringreturn = scoring(wordsl);
    turnscore = scoringreturn[0];
    turnlimit = scoringreturn[1];
    let counter1 = scoringreturn[2];
    for (let c = 0; c < counter1; c++) {
        counter++;
        if (counter == 3) {
            turnlimit += 1;
            counter = 0;
        }
    }
    let psc;
    score += turnscore;
    psc = document.querySelector("#player-score");
    psc.setAttribute("value", `${turnscore} / ${score}`);
    return turnscore;
}

function scoring(wordsl) {
    let turnscore = 0;
    let scorefound = 0;
    let numofusedletters = 0;
    let added = [];
    let newturnlimit = turnlimit;
    let counter1 = 0;
    for (let wordl of wordsl) {
        let wordscore = 0;
        numofusedletters = 0;
        for (let letter of wordl) {
            let pointforletter = 0;
            for (let l of letters) {
                if (l[0] == letter.value) {
                    pointforletter = l[2];
                    break;
                }
            }
            if (!letter.classList.contains("old")) {
                if (letter.parentElement.classList.contains("bonus-field-1") && !added.includes(letter)) {
                    scorefound += 1;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-2") && !added.includes(letter)) {
                    scorefound += 2;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-3") && !added.includes(letter)) {
                    scorefound += 3;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-4") && !added.includes(letter)) {
                    scorefound += 4;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-5") && !added.includes(letter)) {
                    scorefound += 5;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-6") && !added.includes(letter)) {
                    scorefound += 6;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-7") && !added.includes(letter)) {
                    scorefound += 7;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-8") && !added.includes(letter)) {
                    scorefound += 8;
                    added.push(letter);
                }
                if (letter.parentElement.classList.contains("bonus-field-9") && !added.includes(letter)) {
                    scorefound += 9;
                    added.push(letter);
                }
                if (letter.classList.contains("start")) {
                    pointforletter += 5;
                    counter1 += 1;
                }
                if (letter.classList.contains("picture")) {
                    pointforletter += 10;
                    newturnlimit += 1;
                }
                if (!letter.classList.contains("start") && !letter.classList.contains("picture")) {
                    numofusedletters += 1;
                }
            }
            wordscore += pointforletter;
        }
        turnscore += wordscore;
        switch (numofusedletters) {
            case 5:
                turnscore += 5;
                break;
            case 6:
                turnscore += 10;
                break;
            case 7:
                turnscore += 15;
                break;
            case 8:
                turnscore += 20;
                break;
            case 9:
                turnscore += 25;
                break;
        }
    }
    turnscore += scorefound;
    return [turnscore, newturnlimit, counter1];
}

function removeFirstEqual(array1, value1) {
    let idx = array1.indexOf(value1);
    if (idx == -1) return -1;
    array1 = array1.slice(0, idx).concat(array1.slice(idx + 1));
    return array1;
}

function dictionaryContains(wordl, vocabulary) {
    let partofdictionary;
    if (vocabulary == "full") {
        partofdictionary = dictionary;
    } else {
        partofdictionary = partsofdictionary[wordl[0] + wordl.length.toString()];
    }
    for (let elem of partofdictionary) {
        if (elem.length == wordl.length) {
            let found = true;
            for (let i = 0; i < elem.length; i++) {
                if (elem[i] != wordl[i]) {
                    found = false;
                    break;
                }
            }
            if (!found) {
                continue;
            } else {
                return true;
            }
        }
    }
    return false;
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
    if (touchdevice) {
        popup1.style.position = "fixed";
    }
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
    button1.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
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
        button2.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
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
    if (touchdevice) {
        popup1.style.top = "0px";
    } else popup1.style.top = Math.floor(rectb.top + (rectb.height - rectp.height) / 2).toString() + "px";
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
    if (touchdevice) {
        popup1.style.position = "fixed";
    }
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
            input1.style.fontSize = Math.floor((fieldsize - 2) * 0.9).toString() + "px";
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
    if (touchdevice) {
        popup1.style.top = "0px";
    } else popup1.style.top = Math.floor(rectb.top + (rectb.height - rectp.height) / 2).toString() + "px";
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
    popup1.remove();
    lockOffUI();
    testNewWords();
}

function selectLanguage(lang) {
    lang == "hun";
    letters = letters_hun;
}

function createPartsOfDictionary() {
    dictionary = [];
    const abc = ['A', 'Á', 'B', 'C', 'CS', 'D', 'E', 'É', 'F', 'G', 'GY', 'H', 'I', 'Í', 'J', 'K', 'L', 'LY', 'M', 'N', 'NY',
            'O', 'Ó', 'Ö', 'Ő', 'P', 'Q', 'R', 'S', 'SZ', 'T', 'TY', 'U', 'Ú', 'Ü', 'Ű', 'V', 'W', 'X', 'Y', 'Z', 'ZS'];
    for (let letter of abc) {
        for (len = 2; len < 35; len++) {
            partsofdictionary[letter + len.toString()] = [];
        }
    }
    dict = dictionary_hun;
    for (let word of dict) {
        let wordsl;
        let wordsldict;
        wordsl = wordToListHUN(word[0]);
        wordsldict = wordsl;
        if (wordsl) {
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
        for (let word1 of wordsldict) {
            if (word1.includes('_')) {
                w1 = [];
                for (let letter of word1) {
                    if (letter != '_') w1.push(letter);
                }
                word1 = w1;
            }
            dictionary.push(word1);
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
    if (touchdevice) {
        popup1.style.position = "fixed";
    }
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
    input1.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
    fieldset1.appendChild(input1);
    input1.addEventListener("keyup", wordSearch);
    let button1 = document.createElement("button");
    button1.innerText = "Rendben";
    button1.addEventListener("click", destroyPopup);
    button1.type = "button";
    button1.className = "UI-button";
    button1.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
    button1.style.fontSize = fontsizebutton;
    button1.style.width = "40%";
    fieldset1.appendChild(button1);
    input1.focus();
    let boardandrack = document.querySelector("#board-rack");
    let rectb = getElementPosition(boardandrack);
    let rectp = getElementPosition(form1);
    popup1.style.left = Math.floor(rectb.left + (rectb.width - rectp.width) / 2).toString() + "px";
    if (touchdevice) {
        popup1.style.top = "0px";
    } else popup1.style.top = Math.floor(rectb.top + (rectb.height - rectp.height) / 2).toString() + "px";
}

function wordSearch(ev) {
    ev.preventDefault();
    if (ev.key == " " || ev.key == "Escape" || ev.key == "Enter") {
        try {
            destroyPopup();
        } catch (err) { }
        lockOffUI();
        return;
    }
    input1 = document.querySelector("#word");
    if (!dictionaryContains(input1.value.toUpperCase().split(""), "full")) {
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
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i][1]; j++) {
            sack.push([letters[i][0], letters[i][2]]);
        }
    }
}

function adaptToChangedSize() {
    fieldsize = Math.floor((height - fields.length) / (fields.length + 4)) > 23 ? Math.floor((height - fields.length) / (fields.length + 4)) : 23;
    rackfieldsize = Math.floor(fieldsize * 3);
    dashboard = document.querySelector("#dashboard");
    dashboard.style.position = "sticky";
    fontsizeletter = Math.floor(fieldsize * 0.8).toString() + "px";
    fontsizebutton = Math.floor(fieldsize * 0.9).toString() + "px";
    fontsizelabel = Math.floor(fieldsize * 0.4).toString() + "px";
    for (let rindex = 0; rindex < fields.length; rindex++) {
        for (let cindex = 0; cindex < fields[0].length; cindex++) {
            fields[rindex][cindex].style.width = fieldsize.toString() + "px";
            fields[rindex][cindex].style.height = fieldsize.toString() + "px";
            fields[rindex][cindex].style.maxWidth = fieldsize.toString() + "px";
            fields[rindex][cindex].style.maxHeight = fieldsize.toString() + "px";
            fields[rindex][cindex].style.minWidth = fieldsize.toString() + "px";
            fields[rindex][cindex].style.minHeight = fieldsize.toString() + "px";
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
        button.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
    }
    let inputs = document.querySelectorAll(".UI-input");
    for (let input of inputs) {
        input.style.fontSize = fontsizebutton;
        input.style.height = Math.floor(fieldsize * 1.5).toString() + "px";
    }
    let labels = document.querySelectorAll(".input-label");
    for (let label of labels) {
        label.style.fontSize = fontsizelabel;
        label.style.height = Math.floor(fieldsize * 0.8).toString() + "px";
    }
    let traybuttons = document.querySelectorAll(".tray-button");
    for (let traybutton of traybuttons) {
        traybutton.style.width = rackfieldsize.toString() + "px";
        traybutton.style.height = rackfieldsize.toString() + "px";
    }
    document.querySelector("h1").style.fontSize = fontsizebutton;
    document.querySelector("#small1").style.fontSize = fontsizelabel;
    numberlabelsize = Math.floor(fieldsize * 0.8);
    numberfontsize = Math.floor(fieldsize * 0.5);
    let boardform = document.querySelector("#board-form");
    let rectboard = getElementPosition(boardform);
    let rackform = document.querySelector("#rack-form");
    let field05 = document.querySelector("#fieldtable-0-5");
    let rectfield = getElementPosition(field05);
    if (touchdevice) {
        rackform.style.left = (rectboard.left + (rectboard.width - racksize * (rackfieldsize + 2)) / 2 - 10).toString() + "px";
    } else {
        rackform.style.left = (rectfield.left + fieldsize * 0.5 - 10).toString() + "px";
    }
    let boardandrack = document.querySelector("#board-rack");
    boardandrack.style.minHeight = height.toString() + "px";
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
    //touchdevice = true;
    document.querySelector("#dashboard").style.display = "inline-block";
    document.querySelector("#title1").style.marginLeft = "2%";
    document.querySelector("#game-container").style.marginLeft = "2%";
    progressbar = document.querySelector("#progress");
    bindButtons();
    let savedgames = localStorage.getItem('SavedGame_Szoosveny');
    savedgame = JSON.parse(savedgames);
    if (savedgame) {
        try {
            loadGame();
        } catch (err) {
            localStorage.clear();
        }
    } else {
        drawBoard(board_1);
        drawRack();
    }
    adaptToChangedSize();
    if (!savedgame) {
        selectLanguage(language);
        timelimit = parseInt(document.querySelector("#time-limit").value, 10);
        createPartsOfDictionary();
        progressbar.max = timelimit;
        progressbar.value = currenttime;
        lockOffMain_Rules_Start();
    }
}

function timeLimitChange() {
    tl = document.querySelector("#time-limit").value;
    document.querySelector("#time-limit-value").innerHTML = tl;
}

function checkSavedGame() {
    let savedgames = localStorage.getItem('SavedGame_Szoosveny');
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
    localStorage.setItem('SavedGame_Szoosveny', JSON.stringify(false));
    document.querySelector("#setup-new-game").style.visibility = "visible";
    selectLanguage("hun")
}

function initStartScreen() {
    touchdevice = ('ontouchstart' in document.documentElement);
    startscreen = document.querySelector("#start-screen");
    fieldsize = 40;
    fontsizeletter = 20 + "px";
    fontsizebutton = 20 + "px";
    startscreeninnerdiv = document.querySelector("#start-screen-inner-div");
    startscreeninnerdiv.style.backgroundImage = "url('img/szoosvenybackground.png')";
    startscreeninnerdiv.style.backgroundRepeat = "no-repeat";
    startscreeninnerdiv.style.backgroundSize = "100%";
    startscreeninnerdiv.style.backgroundPosition = "top center";
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    checkSavedGame();
}

initStartScreen();
