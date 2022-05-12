import {createSlice} from "@reduxjs/toolkit";

const InitialState = {
    XLines: Array(8).fill(0),
    YLines: Array(8).fill(0),
    ActiveSquare: {},
    GameState: {
    0: ["wR", "wH", "wB", "wQ", "wk", "wB", "wH", "wR"],
    1: ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    2: ["-", "-", "-", "-", "-", "-", "-", "-"],
    3: ["-", "-", "-", "-", "-", "-", "-", "-"],
    4: ["-", "-", "-", "-", "-", "-", "-", "-"],
    5: ["-", "-", "-", "-", "-", "-", "-", "-"],
    6: ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    7: ["bR", "bH", "bB", "bQ", "bk", "bB", "bH", "bR"],
}
}
export const boardSlice = createSlice({
    name: 'GamePosition',
    initialState: InitialState,
    reducers: {
        setActiveSquare: (state,action) => {
            const newState = showVariationsOfMove("wP",action.payload,state)
            return {...state,ActiveSquare:action.payload,GameState:newState}
        },
    },
})

const showVariationsOfMove = (name,coord,currentState) => {
    const currentStateCleared = currentState.YLines.map((el,index) =>{
        return currentState.GameState[index].map(el => el === "green" ? "-" : el)
    })
    switch (name) {
        case "wP" || "bP" :{
            const XAxis = coord.x
            const YAxis = coord.y
            if(currentStateCleared[YAxis+1][XAxis] === "-"){
                let result = {...currentStateCleared,[YAxis+1]: currentStateCleared[YAxis+1].map((el,index) => index === XAxis ? "green" : el)};
                if(result[YAxis+2][XAxis] === "-" && YAxis+2 < 4){
                    result = {...result,[YAxis+2]: currentStateCleared[YAxis+2].map((el,index) => index === XAxis ? "green" : el)};
                }
                else return result
                return result

            }
        }
        case "wR" || "bR" :{}
        case "wH" || "bH" :{}
        case "wB" || "bB" :{}
        case "wQ" || "bQ" :{}
        case "wK" || "bK" :{}
        default :return null
    }


};

// Action creators are generated for each case reducer function
export const {setActiveSquare} = boardSlice.actions

export default boardSlice.reducer
