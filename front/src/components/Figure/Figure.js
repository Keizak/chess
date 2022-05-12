import React from "react";
import styled from "styled-components";
import {v4 as uuidV4} from 'uuid';

function Figure({img,onClick}) {
    return (
        <FigureContainer key={uuidV4()} onClick={onClick}>
            {img && img === "green" ?
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="10" strokeWidth="3" fill="green" />
                </svg>
                :<img src={img}/>}
        </FigureContainer>
    );
}

const FigureContainer = styled.div`
  width:100%;
  height:100%;
  img {
  cursor: pointer;
  width:100%;
  height:100%;
  }
`;


export default Figure;
