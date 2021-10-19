import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/hero-bg.jpg';
import heroImg from '../../../images/hero-img.png';
import heroImg1 from '../../../images/hero-img1.png';
import heroImg2 from '../../../images/hero-img2.png';

const Banner = () => {
    return (
        <div>
            <div className="home-slider"> 
                <Carousel fade>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={banner} alt="First slide" />
                            <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Your Health is Our Top Priority</h1>
                                <p>This is our slogan. Your Health is our top priority. If you sick then come here fast to treatment your health. </p>
                                <Link to="/contact"><Button className="zara-btn" variant="primary" size="lg" >Appointment</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                                <img className="slider-image mt-5 d-block"  src={heroImg2} alt="First slide" />
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={banner} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Fovia is the No. 1 Hospital</h1>
                                <p>If you affected to Fovia in this area, So don't worry about it. We are here in your city to come fast.  </p>
                                <Link to="/contact"><Button className="zara-btn" variant="primary" size="lg" >Appointment</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                                <img className="slider-image mt-5 d-block"  src={heroImg} alt="First slide" />
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={banner} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Exceptional Care for Women</h1>
                                <p>If any women going to suffer any critical disses so, We can come here to care any women disses in your near city</p>
                                <Link to="/contact"><Button className="zara-btn" variant="primary" size="lg" >Appointment</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                                <img className="slider-image mt-5 d-block"  src={heroImg1} alt="First slide" />
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;