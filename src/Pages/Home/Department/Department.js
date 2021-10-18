import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import crutches from '../../../images/crutches.png'

const Department = () => {
    return (
        <div>
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
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ipsam perspiciatis iure tenetur nostrum exercitationem porro quibusdam tempora quos veniam!</p>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                        <h2>b</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                        <h2>c</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                        <h2>d</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                        <h2>e</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                        <h2>f</h2>
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