import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import faqImg from '../../../images/faq-img.png'

const FaqSection = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center my-4 zara-text text-primary">Frequently Asked Questions</h2>
                <p className="mb-5 text-center">If you have any questions you can contact with us? But you can find your common question's answer below here</p>
                <Row className="justify-content-center my-5">
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={faqImg} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> What is Medi solution? </Accordion.Header>
                                <Accordion.Body>
                                    Madi solution is a solution, where you will get information abourt medicine. Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How do I get a refill on my prescription? </Accordion.Header>
                                <Accordion.Body>
                                    You can refill your prescription from our department. Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How competent our total treatment?</Accordion.Header>
                                <Accordion.Body>
                                    This is one of the best quality of our clinic to get treatment form here. Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>If I get sick what should I do? </Accordion.Header>
                                <Accordion.Body>
                                    If you get any sickness then you have to call to our customer service to any information from us. Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is emergency cary to your hospital?</Accordion.Header>
                                <Accordion.Body>
                                    In every 24/7 open our hospital Our Every Department is ready for you. We will provide our best quality services We will provide 25% discount any poor patient in all over the country. So don't be late come fast here.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FaqSection;