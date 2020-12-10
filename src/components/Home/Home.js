import React from 'react';
import './Home.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import snake from '../../assets/images/bigSnek.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


function Home(props) {

    let history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleRoute = (route) => {
        if (route === 'single') {
            history.push('/game');
        }
        else if (route === 'double') {
            handleShowModal();
        }
        return
    }

    const handleUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleShowModal = () => {
        setShowLogin(true);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowModal(false);
    }

    const handleShowLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    }

    const handleShowRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (showRegister) {
            fetch('https://solid-snake-server.herokuapp.com/api/auth/register', {
                method : 'post',
                headers : {'content-type': 'application/json'},
                body : JSON.stringify({username, password})
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err)
            });
        } else {
            fetch('https://solid-snake-server.herokuapp.com/api/auth/login', {
                method : 'post',
                headers : {'content-type': 'application/json'},
                body : JSON.stringify({username, password})
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err)
            });
        }
        
    }

    return (
        <div className="background metal-font">

            <Modal show={showModal} onHide={handleCloseModal} className='modal' centered>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {showRegister ? 'Register' : null}
                            {showLogin ? 'Login' : null}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={10}>
                                <InputGroup className="mb-3">
                                    <input
                                    className='formInput'
                                    onChange = {handleUsername}
                                    placeholder="Username"
                                    />                  
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10}>
                                <InputGroup className="mb-3">
                                    <input
                                    type="password"
                                    className='formInput'
                                    onChange = {handlePassword}
                                    placeholder="Password"
                                    />                  
                                </InputGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        {showLogin ? <Button type='button' variant="secondary" onClick={handleShowRegister}>
                            Show Register
                        </Button> : null}
                        {showRegister ? <Button type='button' variant="secondary" onClick={handleShowLogin}>
                            Show Login
                        </Button> : null}
                        {showLogin ? <Button type='submit' variant="secondary">
                            Login
                        </Button> : null}
                        {showRegister ? <Button type='submit' variant="secondary">
                            Register
                        </Button> : null}
                        
                    </Modal.Footer>
                </form>
             
            </Modal>
            <Container className='home-container'>
                <Row>
                    <Col xs={6} className='my-auto'>
                        <Col>
                            <Row className='justify-content-end'>
                                <Button variant="outline-dark" onClick = {() => {handleRoute('single')}} className='custom-button'>Single playe<span>r</span></Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row className='justify-content-end'>
                                <Button variant="outline-dark" onClick = {() => {handleRoute('double')}} className='custom-button'>Double playe<span>r</span></Button>
                            </Row>
                        </Col>
                    </Col>
                    <Col xs={6} className='my-auto'>
                        <Row className='justify-content-start'>
                            <img src={snake} className='snake' alt='snake'></img>
                        </Row>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <h1>Solid snak<span>e</span></h1>
                </Row>
                <Row className='justify-content-center'>
                    <p>HE WHO CONTROLS THE BATTLEFIELD, CONTROLS HISTOR<span>Y</span></p>
                </Row>

            </Container>
        </div>
    );
}

export default Home;