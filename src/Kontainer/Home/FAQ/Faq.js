import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../../../Komponen/Header';

// Komponen
import Papan from '../../../Komponen/Papan';
import Animasi from '../../../Komponen/Animasi';

const Faq= () => {
    return(
        <Animasi>
            <Header></Header>

                <Container>
                    <Row justify-content-md-center>
                        <h3 className="text-center">Frequently Ask Question</h3>
                        <Col md-4>
                            <Papan judul="What is Algorithm ?" highlight="Algorithm is steps to solve the problem" details=", in this context the algorithm will apply with data"/>
                            <Papan judul="What is this website do with Algorithm ?" highlight="This website doing comparison and interpretation about the algorithm do in each output from different algorithm" details=" for educational purpose" />
                            <Papan judul="Can i use this website for free ?" highlight="Of course its completly free" details=", no need to worry about royalty or something"/>
                        </Col>
                    </Row>
                </Container>
        </Animasi>
      
    )
}; 




export default Faq;