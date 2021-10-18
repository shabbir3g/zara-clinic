import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className="my-5"> 
            <Container>
                <h2 className="text-center my-4 zara-text text-primary">Our Healthcare Services</h2>
                <p className="mb-5 text-center">We will provide our best quality services.   We will provide 25% discount any poor <br /> patient in all over the country. So don't be late come fast here</p>
                <Row xs={1} md={4} className="g-4">
                { 
                    services.map(service => <Service 
                    service={service}
                    key={service.id}
                    ></Service>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Services;