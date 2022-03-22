import { useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import classNames from 'classnames';

// images
import FooterLogo from '../../assets/images/logo.png';
import GooglePlay from '../../assets/images/google-play.png';
import AppStore from '../../assets/images/app-store.png';

import './style.scss';


type FooterProps = {
    imageUrl?: string;
    coinName?: string;
    currentPrice?: string;
    changePrice?: string;
    changePercent?: string;
    priceUp?: boolean;
};

const Footer = ({ imageUrl, coinName, currentPrice, changePrice, changePercent, priceUp }: FooterProps) => {


    return (
        <footer className='footer bg-black mt-lg-5 pt-5 pb-4 bg-gradient3 position-relative'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <p className="text-muted title">
                            Crypto investing made simple
                        </p>
                        <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                            <img src={FooterLogo} height="50" alt="" />
                        </Link>
                        <div className='d-flex'>
                        <Link className="navbar-brand me-lg-4 mb-4 d-flex align-items-center pt-0" to="#">
                            <img src={GooglePlay} height="40" alt="" />
                        </Link>
                        <Link className="navbar-brand me-lg-4 mb-4 d-flex align-items-center pt-0" to="#">
                            <img src={AppStore} height="40" alt="" />
                        </Link>

                        </div>
                    </Col>
                    <Col lg="auto" xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fw-bolder"> Company</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        About
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Jobs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="auto" xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fw-bolder">Resources</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Blog
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Help Center
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                       Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="auto"  xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fw-bolder">Legal</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Terms of use
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Privacy policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    
                </Row>
                <hr className='bg-white' />
                <Row className="text-md-start text-center">
                    <Col className='text-center'>
                        <p className="pb-0 mb-0 text-muted">
                            Copyright © {new Date().getFullYear()} Diverge LLC.
                        </p>
                    </Col>
                    {/* <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon icon-xs" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
