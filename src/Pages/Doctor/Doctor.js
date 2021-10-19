import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {name, designation, thumbnail} = props.doctor;
    return (
        <>
        <Col>
            <Card>
                <div className="thumbnail"> 
                    <div className="overlay"></div>
                    <Card.Img variant="top" src={thumbnail} />
                </div>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {designation}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
    );
};

export default Doctor;