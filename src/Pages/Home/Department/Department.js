import React from 'react';
import { Col, Container, Nav, Row, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import crutches from '../../../images/crutches.png'
import xray from '../../../images/xray.png'
import pulmonary from '../../../images/pulmonary.png'
import cardiology from '../../../images/cardiology.png'
import dentalCare from '../../../images/dental-care.png'
import neurology from '../../../images/neurology.png'

const Department = () => {
    return (
        <div className="our-department">
            <Container>
                <h2 className="text-center my-4 zara-text text-primary">Our Department</h2>
                <p className="mb-5 text-center">Our Every Department is ready for you. We will provide our best quality services.   We will provide  <br />  25% discount any poor patient in all over the country. So don't be late come fast here</p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row className="justify-content-center my-5">
                    <Col md="auto">
                    <Nav className="flex-row food-menu">
                        <Nav.Item>
                        <Nav.Link eventKey="1">Crutches</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="2">X-ray</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="3">Pulmonary</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="4">Cardiology</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="5">Dental care</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="6">Neurology</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                            <Row className="justify-content-center align-items-center my-5">
                                <Col xs={12} md={6}>
                                    <img className="img-fluid" src={crutches} alt="" />
                                </Col>
                                <Col xs={12} md={6}>
                                <h2>Welcome To Crutches</h2>
                                    <b>You are welcome to our Crutches Department to get our service.</b>
                                    <p>Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here</p>
                                    <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Appointment</Button></Link>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                            <Row className="justify-content-center align-items-center my-5">
                                <Col xs={12} md={6}>
                                    <img className="img-fluid" src={xray} alt="" />
                                </Col>
                                <Col xs={12} md={6}>
                                <h2>Welcome To X-ray</h2>
                                    <b>You are welcome to our X-ray Department to get our service.</b>
                                    <p>Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here</p>
                                    <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Appointment</Button></Link>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                            <Row className="justify-content-center align-items-center my-5">
                                <Col xs={12} md={6}>
                                    <img className="img-fluid" src={pulmonary} alt="" />
                                </Col>
                                <Col xs={12} md={6}>
                                <h2>Welcome To Pulmonary</h2>
                                    <b>You are welcome to our Pulmonary Department to get our service.</b>
                                    <p>Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here</p>
                                    <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Appointment</Button></Link>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                            <Row className="justify-content-center align-items-center my-5">
                                <Col xs={12} md={6}>
                                    <img className="img-fluid" src={cardiology} alt="" />
                                </Col>
                                <Col xs={12} md={6}>
                                <h2>Welcome To Cardiology</h2>
                                    <b>You are welcome to our Cardiology Department to get our service.</b>
                                    <p>Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here</p>
                                    <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Appointment</Button></Link>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                            <Row className="justify-content-center align-items-center my-5">
                                <Col xs={12} md={6}>
                                    <img className="img-fluid" src={dentalCare} alt="" />
                                </Col>
                                <Col xs={12} md={6}>
                                <h2>Welcome To Dental care</h2>
                                    <b>You are welcome to our Dental care Department to get our service.</b>
                                    <p>Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here</p>
                                    <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Appointment</Button></Link>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                            <Row className="justify-content-center align-items-center my-5">
                                <Col xs={12} md={6}>
                                    <img className="img-fluid" src={neurology} alt="" />
                                </Col>
                                <Col xs={12} md={6}>
                                <h2>Welcome To Neurology</h2>
                                    <b>You are welcome to our Neurology Department to get our service.</b>
                                    <p>Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here</p>
                                    <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Appointment</Button></Link>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </Container>
        </div>
    );
};

export default Department;