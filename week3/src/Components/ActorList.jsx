import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const gameInfo = [
	{ 
    name: '남주혁',
		src: require("../img/남주혁.jpg"),
	},
	{ 
    name: '안효섭',
		src: require("../img/안효섭.jpg"),
  },
	{ 
    name: '김선호',
		src: require("../img/김선호.jpg"),
	},
  { 
    name: '송강',
		src: require("../img/송강.jpg"),
	},
];

const ActorList = () => {
  const [actors, setActors] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    gameInfo.sort(() => Math.random() - 0.5);
    setActors(gameInfo);
    setDisplays([gameInfo[0], gameInfo[1]]);
  }, []);

  const fighterList = actor => () => {
    if (actors.length <= 2) {
      if (winners.length === 0) {
          setDisplays([actor]);
      } else {
        let matchWinners = [...winners, actor];
        setActors(matchWinners);
        setDisplays([matchWinners[0], matchWinners[1]]);
        setWinners([]);
      }
    } else if (actors.length > 2) {
      setWinners([...winners, actor]);
      setDisplays([actors[2], actors[3]]);
      setActors(actors.slice(2));
    }
  };

  return ( 
    <Container>
      
      {displays.map(d => {
        return (
          <div className="flex" key={d.name} onClick={fighterList(d)}>
            <img className="actor-img" src = {d.src}/>
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  .flex {
    flex: 1;
    min-width: 500px;
    overflow: hidden;
    background-color: black;
    position: relative;
  }
  .actor-img {
    width: 100%;
    height: 450px;
    transition: 0.5s;
    cursor: pointer;
  }
  .actor-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  .name {
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 15%;
    font-size: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;


export default ActorList;