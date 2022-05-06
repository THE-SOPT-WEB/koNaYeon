/*import React, { useState } from 'react';*/
import ActorList from "./ActorList";
import styled from 'styled-components';

function WorldCup() {
  return ( 
    <Container>
      <div className="worldcup">
        <p>최근 본 드라마 배우 월드컵</p>
        <ActorList />
        <div className="buttons">
          <button className="replay">다시하기</button>
          <button className="share">공유하기</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
 
  p {
    padding: 10px 0px;
    font-size:40px;
    font-weight: bolder;
    color: white;
    text-align: center;
  }
  .buttons{
    
    text-align: center;
  }

  button {
    margin: 10px 5px;
    padding: 5px 10px;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
  }

  .replay {
    background-color: #f4940de7;
    border: none;
  }
  .share {
    background-color: #c242ece7;
    border: none;
  }

`


export default WorldCup;