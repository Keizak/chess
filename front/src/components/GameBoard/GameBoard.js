import React from "react";
import {v4 as uuidV4} from "uuid";
import styled from "styled-components";
import GameSquare from "./GameSquare";
import {useDispatch, useSelector} from "react-redux";
import {setActiveSquare} from "../../stateManagment/BoardReducer";

function GameBoard() {
    const boardState = useSelector((state) => state.board)
    const dispatch = useDispatch()

    function renderHorizontalLine(xLines, evenLine, YCoordinate, activeSquare) {
        return (
            <BoardLine key={uuidV4()}>
                {xLines.map((el, index) =>
                    <GameSquare even={evenLine}
                                index={index}
                                gameState={boardState.GameState}
                                coord={{x: index, y: YCoordinate}}
                                activeSquare={boardState.ActiveSquare.x === index && boardState.ActiveSquare.y === YCoordinate}
                                onClick={() => dispatch(setActiveSquare({x: index, y: YCoordinate}))}/>)}
            </BoardLine>
        );
    }


    return (
        <BoardContainer>
            {boardState.YLines.map((el, index) => renderHorizontalLine(boardState.XLines, index % 2, index, boardState.activeSquare))}
        </BoardContainer>
    );
}

const BoardLine = styled.div`
  display: flex;
`;
const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:100vh;
`;


export default GameBoard;
