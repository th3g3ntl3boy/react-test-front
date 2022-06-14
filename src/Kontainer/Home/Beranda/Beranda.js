// library
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


// komponen
import Kartu from '../../../Komponen/Kartu/Kartu.js';

// stylesheet

import { Container, Row, Col} from 'react-bootstrap';
import Header from '../../../Komponen/Header.js';
import Animasi from '../../../Komponen/Animasi.js';
import Arrow from '../../../Komponen/Arrow/Arrow.js';


const Beranda = () => {
    return(
        <Animasi>
            <Fragment>
                <Header></Header>
                <Container>
                    <Row>
                        <Col md={3} className="my-2">
                            <Link to="/algorithm/descriptive" style={{ textDecoration: 'none', color: 'black' }}>
                                <Kartu
                                sumber={require("../../../Aset/1.png")}
                                judul="Descriptive" 
                                detail="Understanding the data before jump into algorithm with Visualization and Statistic Diagnostic"
                                list="5 Basic Statistics, Transformation, Visualization, Correlation and Outlier Detection" />
                            </Link>
                        </Col>

                        <Col md={3} className="my-2">
                            <Link to="/algorithm/classification" style={{ textDecoration: 'none', color: 'black' }}>
                                <Kartu 
                                sumber={require("../../../Aset/2.png")}
                                judul="Classification" 
                                detail="Find out the best model with some different alogrithm to classfication categorical data"
                                list="Decision Tree, Naive Bayes, Support Vector Machine, Logistic Regression and KNN" />
                            </Link>
                        </Col>
                        
                        <Col md={3} className="my-2">
                            <Link to="/algorithm/clustering" style={{ textDecoration: 'none', color: 'black' }}>
                                <Kartu 
                                sumber={require("../../../Aset/3.png")}
                                judul="Clustering" 
                                detail="Find out the best algorithm to clustering or labeling the object with the best structure"
                                list="K-Means, K-Medoids, DBSCAN and Fuzzy C-Means" />
                            </Link>
                        </Col>
                        
                        <Col md={3} className="my-2">
                            <Link to="/algorithm/prediction" style={{ textDecoration: 'none', color: 'black' }}>
                                <Kartu
                                sumber={require("../../../Aset/4.png")}
                                judul="Prediction" 
                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                list="Regression" />
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="align-items-center">
                        <Col md={3} className="my-2">
                            <Link to="/algorithm/forecasting" style={{ textDecoration: 'none', color: 'black' }}>
                                <Kartu 
                                sumber={require("../../../Aset/5.png")}
                                judul="Forecasting" 
                                detail="Find out the best algorthim to forecast the data at the period with highest accuracy"
                                list="AR, MA, ARIMA, LSTM and RNN" />
                            </Link>
                        </Col>
                        <Col md="auto"></Col>

                        <Col xs lg="6" className="my-2">
                            
                            <Link to="/algorithm/article" style={{ textDecoration: 'none', color: 'black' }}>
                                <Arrow halaman=" Or Learn More About Machine Learning Algorithm">
                                </Arrow>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        </Animasi>
    );
}; 




export default Beranda;