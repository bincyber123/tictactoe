let b = document.getElementById("tictactoe");
let board = [];
let data = "";
for (let i = 0; i<5; i++) {
    board[i] = [".",".",".",".","."];
}
for (let i = 0; i<5; i++){
    data += "<br/>";
    for (let j = 0; j<5 ; j++){
        data +=board[i][j] +  "&nbsp;&nbsp;";
    }
}
b.innerHTML =data;
function ChangeX() {
    // console.log('0')
    let positionA = prompt("Nhap A: ");
    let positionB = prompt("Nhap B: ");
    board[positionA][positionB] = "X";
    let data = "";
    for (let k = 0; k < 5; k++) {
        data += "<br>";
        for (let l = 0; l < 5; l++) {
            data +=board[k][l] +  "&nbsp;&nbsp;";
            b.innerHTML = data;
        }
    }
}   
function changeO() {
    // console.log('0')
    let positionA = prompt("Nhap A: ");
    let positionB = prompt("Nhap B: ");
    board[positionA][positionB] = "O";
    let data = "";
    for (let k = 0; k < 5; k++) {
        data += "<br>";
        for (let l = 0; l < 5; l++) {
                data +=board[k][l] +  "&nbsp;&nbsp;";
        }
        }
    b.innerHTML = data;
    }
