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
            console.log({...state,ActiveSquare:action.payload})
            return {...state,ActiveSquare:action.payload}
        },
    },
})

// Action creators are generated for each case reducer function
export const {setActiveSquare} = boardSlice.actions

export default boardSlice.reducer
