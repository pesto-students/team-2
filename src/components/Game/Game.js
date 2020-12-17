
import React, { useState, useEffect } from 'react';
import './Game.css'
import Snake from '../Snake/Snake.js';
import Food from '../Food/Food.js';
import liveImage from '../../assets/images/crotalus.png'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
// import { render } from '@testing-library/react';
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
  const [speed, setSpeed] = useState(300)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') === null ? 0 : localStorage.getItem('highScore'));
  const [show, setShow] = useState(false);

  // const [life, setLife] = useState(3)

  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      event.preventDefault();
      onKeyDown(event)
    }, [])

  });
  const handleClose = () => {
    setShow(false);
    setDot([[0, 0], [2, 0]]);
    setFood(getRandomNumber());
    setDirec('RIGHT');
    setSpeed(300)
    setScore(0)

  }
  const handleShow = () => setShow(true);
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
    await dots.push(head);
    await dots.shift();
    await setDot(dots)
  }


  const checkIfOutOfBorder = () => {
    let head = dot[dot.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      gameOver();
    }
  }
  const gameOver = () => {
    console.log(`Game Over,Snake length is ${dot.length}`)

    setSpeed(0)

    updateHighScore()
    handleShow();
  }
  const checkIfOutOfCollapsed = () => {
    let snake = [...dot];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        gameOver();
      }
    })
  }

  const checkIfEat = () => {
    let head = dot[dot.length - 1];
    let snakeFood = food;
    if (head[0] == snakeFood[0] && head[1] == snakeFood[1]) {
      setFood(getRandomNumber())
      enlargeSnake();
      // increaseSpeed();
      updateScore()


    }
  }

  const updateScore = () => {
    setScore(score + 1)
  }
  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem('highScore', highScore)
    }
  }

  const increaseSpeed = () => {

    if (score % 2 == 0 && score != 0) {
      let newSpeed = (speed - (score * 20));
      setSpeed(newSpeed);
      console.log('newSpeed', newSpeed)
    }
  }
  const enlargeSnake = () => {
    let newSnake = [...dot];
    newSnake.unshift([]);
    setDot(newSnake)
  }
  useEffect(() => {
    const intervalId = setInterval(moveSnake, speed);
    return () => clearInterval(intervalId);
  }, [moveSnake, useState])

  useEffect(() => {
    checkIfOutOfBorder();
    checkIfOutOfCollapsed();
    checkIfEat();
  })
  return (
    <div className="background metal-font">
      <Container fluid>
        <Row>
          <Col lg={2} xs={0} className="score-section">
            <div className="name-tag">
              SOLID SNAK<span className="sub-name">E</span>
            </div>
            <br /><br /><br />
            <div className="score-tag">
              HIGH SCORE <span className="sub-name  numeric-font"> {highScore}</span>
            </div>
            <br />
            <div className="score-tag">
              SCORE <span className="sub-name numeric-font"> {score}</span>
            </div>
            <br />
            {/* <div className="score-tag">
              LIVES <br />

              <img className="livesnake" alt='lives' src={liveImage} /> <span className="sub-name " >X 3</span>
            </div> */}
          </Col>
          <Col lg={10} xs={12}>

            <div className="game-area">
              <Snake dot={dot} setDot={setDot}></Snake>
              <Food food={food} setFood={setFood}></Food>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Game over</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your score is - {score}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Game;