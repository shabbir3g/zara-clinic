import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const {id, title, desc, thumbnail} = props.service;
    const history = useHistory();
    const handleServiceDetails = () => {
        history.push(`services/${id}`);
    }
    return (
        <>
            <Col>
                <Card>
                    <div className="thumbnail"> 
                        <div className="overlay"></div>
                        <Card.Img variant="top" src={thumbnail} />
                    </div>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc.substring(0, 70)}
                    </Card.Text>
                    <Button onClick={handleServiceDetails} className="zara-btn" variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;