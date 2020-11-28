import React from 'react';
import './Home.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
function Home(props) {
    return (
        <div className="background metal-font">
            <Container>
                <Row>
                    
                    <Col xs={7}>   <Button variant="outline-dark">Single player</Button></Col>
                    <Col xs={5}> (snake)</Col>
                </Row>
               <span >Solid Snake</span> 

            </Container>
        </div>
    );
}

export default Home;