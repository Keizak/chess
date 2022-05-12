import GameBoard from "../components/GameBoard/GameBoard";
import AuthPage from "../components/authPage/authPage";
import React from "react";


export const IndexRouter = [
    {path:'/', element: <GameBoard/>, exact:true},
    {path: '/auth', element: <AuthPage/>, exact: true}

]
