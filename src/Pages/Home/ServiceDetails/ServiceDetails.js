import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    }, []);

    useEffect(() => {
        const matched =  serviceDetails.find(services => parseInt(services.id) === parseInt(id))

        setSingleService(matched);

    },[serviceDetails]);


    return (
       <div className="my-5"> 
            <Container>
                <Row > 
                    <Col xs={12} md={6}> 
                        <img className="img-fluid" src={singleService?.thumbnail} alt="" />
                    </Col>
                    <Col xs={12} md={6}> 
                        <h2>{singleService?.title}</h2>
                        <p>{singleService?.desc}</p>
                    </Col>
                </Row>
            </Container>
       </div>
    );
};

export default ServiceDetails;