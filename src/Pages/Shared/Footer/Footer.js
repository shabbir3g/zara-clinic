import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../../images/logo-footer.png';

const Footer = () => {
    return (
        <div className="footer bg-dark mt-0" > 
            <Container>
                <Row xs={1} md={4} className="g-1 py-5">
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Link to="/"><img className="d-inline-block align-top footer-logo" src={footerLogo} alt="Footer Logo" /></Link>
                        <Card.Text style={{color: '#7a7a7a'}}>
                            Zara Clinic one of the best public services organization in the country. We will provide 25% discount any poor patient in all over the country. So don't be late come fast here.                         
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">Popular Services</Card.Title>
                            <ul className='footer-services'>
                                <li><Link to="/">Cancer Services</Link></li>
                                <li><Link to="/">Liver Transplant</Link></li>
                                <li><Link to="/">Kidney Cancer</Link></li>
                                <li><Link to="/">Anxiety Disorder</Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">Gen In Touch</Card.Title>
                        <Card.Text style={{color: '#7a7a7a'}}>
                        Bangladesh, Chatmohor, Pabna, PO Office 6630 <br />
                        Phone: +88 01728 536054 <br />
                        Email: mostafizshabbir@gmail.com <br />
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">Follow Us</Card.Title>
                        
                            <ul className='footer-services'>
                                <li><a rel="noreferrer" target="_blank" href="http://facebook.com">Facebook</a></li>
                                <li><a rel="noreferrer" target="_blank" href="http://youtube.com">Youtube</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com">Linkedin</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com">Instragram</a></li>
                            </ul>
                        
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                
            </Container>
            <div className="text-light p-4 text-center" style={{backgroundColor: '#0c0c0c'}}> 
                <p className="p-0 m-0">Copyright &copy; 2021 | All Right Reserved By <a className="text-white" rel="noreferrer" target="_blank" href="https://zara-clinic.web.app/">Zara Clinic</a> </p>
            </div>
        </div>
    );
};

export default Footer;