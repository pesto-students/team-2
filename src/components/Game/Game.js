
import React, { useState, useEffect } from 'react';
import './Game.css'
import Snake from '../Snake/Snake.js';
import Food from '../Food/Food.js';
import liveImage from '../../assets/images/crotalus.png'
import { Container, Row, Col } from 'react-bootstrap';
import { render } from '@testing-library/react';
const getRandomNumber = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y]
}
function Game(props) {
  
  const [dot, setDot] = useState([[0, 0], [2, 0]]);
  const [food, setFood] = useState(getRandomNumber());
  const [direct, setDirec] = useState('RIGHT');
  const [speed, setSpeed] = useState(1000)


  useEffect(() => {
  //    setInterval(moveSnake, speed);
      document.addEventListener('keydown', function (event) {
          onKeyDown(event) 
      },[])

  });
 
  
   
 

  const onKeyDown = (e) => {
      console.log(e.key);
      switch (e.key) {
          case 'ArrowUp':
              setDirec('UP');
              break;
          case 'ArrowDown':
              setDirec('DOWN');
              break;
          case 'ArrowLeft':
              setDirec('LEFT');   
              break;
          case 'ArrowRight':
              setDirec('RIGHT');
              break;
      }
  }
  const moveSnake = async () => {
      let dots = [...dot];
      let head = dots[dots.length - 1];
      // console.log('direction dot', dots);
      switch (direct) {
          case 'RIGHT':
              head = [head[0] + 2, head[1]];
              break;
          case 'LEFT':
              head = [head[0] - 2, head[1]];
              break;
          case 'DOWN':
              head = [head[0], head[1] + 2];
              break;
          case 'UP':
              head = [head[0], head[1] - 2];
              break;
      }
      // console.log('head',head)
      await  dots.push(head); 
      await dots.shift();
      // console.log(dots);
      await setDot(dots)
  }

  useEffect(() => {
    const intervalId =  setInterval(moveSnake, speed);
    return () => clearInterval(intervalId); 
 }, [moveSnake, useState])
  return (
    <div className="background metal-font">
      <Container fluid>
        <Row>
          <Col lg={2} xs={0}  className="score-section">
            <div className="name-tag">
              SOLID SNAK<span className="sub-name">E</span>
            </div>
            <br /><br /><br />
            <div className="score-tag">
              HIGH SCORE<span className="sub-name "> &nbsp;166</span>
            </div>
            <br />
            <div className="score-tag">
              SCORE<span className="sub-name "> &nbsp;15</span>
            </div> 
            <br />
            <div className="score-tag">
              LIVES <br />

              <img className="livesnake" src={liveImage} /> <span className="sub-name " >X 3</span>
            </div>
          </Col>
          <Col lg={10}  xs={12}>

            <div className="game-area">
            <Snake dot={dot} setDot={setDot}></Snake>
            <Food food={food} setFood={setFood}></Food>
      </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Game;