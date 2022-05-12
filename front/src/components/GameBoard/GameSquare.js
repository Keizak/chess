import {v4 as uuidV4} from "uuid";
import Figure from "../Figure/Figure";
import helpers from "../../helpers/helpers";
import React from "react";
import styled from "styled-components";

function GameSquare({even, index, gameState, coord, activeSquare, onClick}) {

    return (
        <SquareContainer even={even ? index % 2 : !(index % 2)} key={uuidV4()} active={activeSquare}>
            <Figure img={helpers.chooseFigureFromState(gameState, coord)} activeSquare={activeSquare}
                    onClick={onClick}/>
        </SquareContainer>
    )
}


const SquareContainer = styled.div`
  width:100px;
  height:100px;
  background: ${props => props.even ? 'rgba(0,0,0,0.2)' : "white"};
    border: ${props => props.active ? "red 2px solid" : "2px solid black"};
  border-collapse: collapse};
`;
export default GameSquare
