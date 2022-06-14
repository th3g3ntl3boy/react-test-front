import React from 'react';
import Bounce from 'react-reveal/Bounce';
// stylesheet
import { Card, Button } from 'react-bootstrap';
import './Kartu.css'


const Kartu = (props) => {
    return (
        <div style={{overflow: 'hidden'}}>
            <Bounce bottom>
                <div>
                    <Card className="hov">
                        <Button variant="outline-light" >
                            <Card.Img variant="top" src={props.sumber}/>    
                        </Button>
                        <Card.Body>
                            <Card.Title>{props.judul}</Card.Title>
                            <Card.Text>
                                {props.detail}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{props.list}</small>
                        </Card.Footer>
                    </Card>
                </div>
            </Bounce>
        </div>
    );
};

export default Kartu;