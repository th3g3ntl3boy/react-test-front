import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout1 = (props) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                    3 of 3
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layout1;