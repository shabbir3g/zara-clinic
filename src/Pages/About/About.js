import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctor from '../../images/doctor.jpg';
import clinic from '../../images/clinic.jpg';
import Doctor from '../Doctor/Doctor';

const About = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() =>{
        fetch('/doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, []);


    return (
        <div className="my-5">
            <Container> 
                <Row className="my-5"> 
                    <Col xs={12} lg={4}> 
                        <img className="img-fluid" src={doctor} alt="" />
                    </Col>
                    <Col xs={12} lg={8}> 
                        <h2>About Our Clinic</h2>
                        <b><i>There's nothing we wont try. Never heard the word impossible. This time there's no stopping us. Michael Knight a young loner on a crusade to champion the cause.</i></b>
                        <br />
                        <br />
                        <p>There's nothing we wont try. Never heard the word impossible. This time there's no stopping us. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The power less in a world of criminals who operate above the law</p>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                        <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Contact Us</Button></Link>
                    </Col>
                </Row>
                <Row className="my-5"> 
                    <Col xs={12} lg={8}> 
                        <h3>Who we are</h3>
                        <h2> Psychology Clinic</h2>
                        <b><i>Manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</i></b> 
                        <br />
                        <br />
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. </p>
                        <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                        <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Contact Us</Button></Link>
                    </Col>
                    <Col xs={12} lg={4}> 
                        <img className="img-fluid" src={clinic} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <h2 className="text-center my-4 zara-text text-primary"> Our Doctors </h2>
                <p className="mb-5 text-center">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, <br />  a new normal that has evolved from generation X is on the runway heading towards.We will provide our best quality services.</p>
                <Row xs={1} md={4} className="g-4 doctor-list">
                { 
                    doctors.map(doctor => <Doctor 
                        doctor={doctor}
                    key={doctor.id}
                    ></Doctor>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default About;