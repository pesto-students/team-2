import React from 'react';
import './Home.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import snake from '../../assets/images/bigSnek.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

function Home(props) {

    let history = useHistory();
    const [showLogin, setShowLogin] = useState(false);

    const handleRoute = (route) => {
        if (route === 'single') {
            history.push('/game');
        }
        else if (route === 'double') {
            handleShowLogin();
        }
        return
    }

    const handleShowLogin = () => setShowLogin(true);

    const handleCloseLogin = () => setShowLogin(false);

    return (
        <div className="background metal-font">
            <Modal show={showLogin} onHide={handleCloseLogin} className='modal metal-font' centered>
                <Modal.Header>
                    <Modal.Title>Register / Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogin}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseLogin}>
                        Save Changes
                    </Button>
                </Modal.Footer>
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