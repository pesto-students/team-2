import React from 'react';
import './Home.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import snake from '../../assets/images/snake.png';
function Home(props) {
    return (
        <div className="background metal-font">
            <Container className='home-container'>
                <Row>
                    <Col xs={7} className='my-auto'>
                        <Col>
                            <Button variant="outline-dark" className='custom-button'>Single playe<span>r</span></Button>
                        </Col>
                        <Col>
                            <Button variant="outline-dark" className='custom-button'>Double playe<span>r</span></Button>
                        </Col>
                    </Col>
                    <Col xs={5}><img src={snake} alt='snake'></img></Col>
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