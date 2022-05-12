import wPawn from "../assets/Chess_plt45.svg"
import wBishop from "../assets/Chess_blt45.svg"
import wKnight from "../assets/Chess_nlt45.svg"
import wRook from "../assets/Chess_rlt45.svg"
import wQueen from "../assets/Chess_qlt45.svg"
import wKing from "../assets/Chess_klt45.svg"
import bPawn from "../assets/Chess_pdt45.svg"
import bBishop from "../assets/Chess_bdt45.svg"
import bKnight from "../assets/Chess_ndt45.svg"
import bRook from "../assets/Chess_rdt45.svg"
import bQueen from "../assets/Chess_qdt45.svg"
import bKing from "../assets/Chess_kdt45.svg"


const StateOfImage = {
    wPawn, wBishop, wKnight, wRook, wQueen, wKing,
    bPawn, bBishop, bKnight, bRook, bQueen, bKing,
}

// The Pawn - P
// The Bishop - B
// The Knight - H
// The Rook - R
// The Queen -  Q
// The King- K

function chooseFigureFromState(state, coord) {
    switch (state[coord.y][coord.x]){
        case "green" : return "green";
        case "wR" : return StateOfImage.wRook;
        case "wH" : return StateOfImage.wKnight;
        case "wB" : return StateOfImage.wBishop;
        case "wQ" : return StateOfImage.wQueen;
        case "wk" : return StateOfImage.wKing;
        case "wP" : return StateOfImage.wPawn;
        case "bR" : return StateOfImage.bRook;
        case "bH" : return StateOfImage.bKnight;
        case "bB" : return StateOfImage.bBishop;
        case "bQ" : return StateOfImage.bQueen;
        case "bk" : return StateOfImage.bKing;
        case "bP" : return StateOfImage.bPawn;
        default: return null
    }
}


const helpers = {
    chooseFigureFromState: chooseFigureFromState
}

export default helpers;
