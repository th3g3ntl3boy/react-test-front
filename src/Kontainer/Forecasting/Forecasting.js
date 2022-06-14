import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';


// stylesheet

import Arrow from '../../Komponen/Arrow/Arrow';
import Animasi from '../../Komponen/Animasi';
import Item from '../../Komponen/Item';

const Forecasting = () => {
    return(
        <Animasi>
            <Container>
                <Row className="align-items-center">
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="text-center">
                            <h1>Forecasting</h1>
                            <p><i>"understanding the pattern and do forecast"</i></p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <Link to="/algorithm/descriptive" style={{ textDecoration: 'none', color: 'black',textAlign: 'left' }}>
                            <Arrow halaman="Descriptive">
                            </Arrow>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Container>
                <Row className="align-items-center ">
                    <Col>
                        <h3>Quick Overview</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Col>
                    <Col md="auto">
                    </Col>
                    <Col xs lg="4" className="my-4 justify-content-center">
                        <Carousel variant="dark" fade="true">

                            <Carousel.Item>
                                <Item 
                                judul="Decision Tree" 
                                category="Supervised" 
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ">
                                </Item>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Item 
                                judul="Decision Tree" 
                                category="Supervised" 
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ">
                                </Item>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Item 
                                judul="KNN" 
                                category="Supervised" 
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ">
                                </Item>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Animasi>
    )
}; 




export default Forecasting;