//components
import MyNavbar from "../../components/navbars/Navbar";
import Footer from "../../components/footer";
import { Button, Carousel, Card, Container, Row, Col } from "react-bootstrap";
import CoinInfo from "../../components/CoinInfo";

//Slider images
import FirstSlide from '../../assets/images/slider1.png';
import SecondSlide from '../../assets/images/slider2.png';
import ThirdSlide from '../../assets/images/slider3.png';
// News images
import NewsImages from '../../assets/images/news.svg';

//Card images
import CardImg1 from '../../assets/images/account.svg';
import CardImg2 from '../../assets/images/bank.svg';
import CardImg3 from '../../assets/images/US based.svg';
import ArrowImg from '../../assets/images/Vector.svg';
//Trade_section images
import TradeImg1 from '../../assets/images/trade/1.png';
import TradeImg2 from '../../assets/images/trade/2.png';
import TradeImg3 from '../../assets/images/trade/3.png';
import TradeImg4 from '../../assets/images/trade/4.png';

import NFTTradeImg1 from '../../assets/images/nfts/nft1.png';
import NFTTradeImg2 from '../../assets/images/nfts/nft2.png';
import NFTTradeImg3 from '../../assets/images/nfts/nft3.png';
import NFTTradeImg4 from '../../assets/images/nfts/nft4.png';

import ToolsImg from '../../assets/images/tools_biginner.png';


//scss
import "../../assets/scss/custom/homepage.scss";
import coinInfoList from "./coininfolist.json";
// import coinInfoList from "./markets.json";

// API

import { getMarkets as getMarketsAPI } from '../../helpers';
import { useEffect } from "react";
const Home = () => {
    
    // useEffect(() => {
    //     const response =  getMarketsAPI({});
    //     console.log(response);
    //     response.then(res => {
    //         console.log(res)
    //     })
    // }, [])
    return (
        <>
            <MyNavbar
                navClass="bg-black navbar-dark zindex-10"
                hideSearch
                isSticky
                fixedWidth
            />
            {/* Crarousel */}
            <section className="carousel_section section">
                <Carousel className="doc-carousel bg-black">
                    <Carousel.Item>
                        <img src={FirstSlide} alt="First Slide" className="d-block w-50" />
                        <Carousel.Caption>
                            <h3 className="text-white">Start Earning Interest On Crypto Today</h3>
                            <p>Trade a variety of digital assets like Bitcoin, Ethereum, Solana, and Dogecoin with low trading fees</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={SecondSlide} alt="Second Slide" className="d-block w-50" />
                        <Carousel.Caption>
                            <h3 className="text-white">Find The Hottest Assets In Diverge</h3>
                            <p>A crypto wallet that anyone can get started in one minute</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ThirdSlide} alt="Third Slide" className="d-block w-50" />
                        <Carousel.Caption>
                            <h3 className="text-white">Trade Anywhere & Anytime</h3>
                            <p>Download the Deverge app Today and get all the power of Deverge with in your hands</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            {/* News Section */}
            {/* <section className="news_section section bg-black text-center px-3 px-sm-5 py-2">
                <img src={NewsImages} alt="" className="w-100" />
            </section> */}
            {/* Coins with Price Change */}
            <section className="coin_price_section section run_animation d-flex p-2 justify-content-between">
                {coinInfoList.map((item, i) => {
                    return <CoinInfo key={i} {...item}></CoinInfo>
                })}
            </section>
            {/* hero */}
            <section className="bank_link section">
                <span className="d-block title mb-5">The easiest way to start trading crypto</span>
                <div className="row justify-content-center align-items-center">
                    <Card className="">
                        <Card.Img variant="top" src={CardImg1} alt="Card Img" />
                        <Card.Title>Create Account</Card.Title>
                        <Card.Text>
                            Sing up and trade in less than<br /> 3 minutes
                        </Card.Text>
                        <img className="arrow_right" src={ArrowImg} alt="Arrow Right" />
                    </Card>
                    <Card className="active">
                        <Card.Img variant="top" src={CardImg2} alt="Card Img" />
                        <Card.Title>Link Your Bank Account</Card.Title>
                        <Card.Text>
                            Trade new and popular<br /> cryptocurrencies and track your portfolio<br /> with our easy to use app
                        </Card.Text>
                        <img className="arrow_right" src={ArrowImg} alt="Arrow Right" />
                    </Card>
                    <Card className="">
                        <Card.Img variant="top" src={CardImg3} alt="Card Img" />
                        <Card.Title>Start Buying & Selling</Card.Title>
                        <Card.Text>
                            We are US based and<br />regulated
                        </Card.Text>
                        <img className="arrow_right" src={ArrowImg} alt="Arrow Right" />
                    </Card>
                </div>
            </section>
            {/* Trade Section /> */}
            <section className="trade_section section">
                <span className="d-block title mb-5">Join some of the world's biggest names who trust Diverge</span>
                <div className="row justify-content-center">
                    <Card className="">
                        <Card.Img variant="top" src={TradeImg1} alt="Trade Img" />
                        <Card.Title>Trevor Lawrence</Card.Title>
                        <Card.Text>
                            "The NFL's number one draft pick and one of football's most exciting"
                        </Card.Text>
                    </Card>
                    <Card className="">
                        <Card.Img variant="top" src={TradeImg2} alt="Trade Img" />
                        <Card.Title>Golden State Warriors</Card.Title>
                        <Card.Text>
                            "Diverge became the Warriors' official cryptocurrency platform"
                        </Card.Text>
                    </Card>
                    <Card className="">
                        <Card.Img variant="top" src={TradeImg3} alt="Trade Img" />
                        <Card.Title>Udonis Haslem</Card.Title>
                        <Card.Text>
                            "3x NBA Champion. Captain of the Miami HEAT. Udonis Haslem"
                        </Card.Text>
                    </Card>
                    <Card className="">
                        <Card.Img variant="top" src={TradeImg4} alt="Trad Img" />
                        <Card.Title>TSM Diverge</Card.Title>
                        <Card.Text>
                            "In June of 2021, Diverge partnered with TSM, the most dominant esports"
                        </Card.Text>
                    </Card>
                </div>
                <Button variant='outline-dark' className="btn-rounded-circle btn-icon shadow-none trade_now">
                    Trade Now
                </Button>
            </section>
            {/* NFT Marketplace */}
            <section className="nft_marketplace_section section">
                <span className="d-block title mb-5">Buy and sell NFTs on Nif Marketplace</span>
                <span className="d-block text mb-5">A non-fungible token (NFT) is digital art on the blockchain—the latest trend in crypto. Diverge has own NFT Marketplace, so you can expect the same industry-leading crypto security for your NFTs.</span>
                <div className="row justify-content-center align-items-center">
                    <Card className="">
                        <Card.Img variant="top" src={NFTTradeImg1} alt="Card Img" />
                    </Card>
                    <Card className="active">
                        <Card.Img variant="top" src={NFTTradeImg2} alt="Card Img" />
                    </Card>
                    <Card className="">
                        <Card.Img variant="top" src={NFTTradeImg3} alt="Card Img" />
                    </Card>
                    <Card className="">
                        <Card.Img variant="top" src={NFTTradeImg4} alt="Card Img" />
                    </Card>
                </div>
                <Button variant='outline-light' className="btn-rounded-circle btn-icon shadow-none learn_more">
                    Learn More
                </Button>
            </section>
            {/* Tools for biginner */}
            <section className="tools_biginner_section section bg-black">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col>
                            <span className="title">Tools for beginners and active traders</span>
                            <span className="text">
                                Whether you're an experienced trader or just getting started, Diverge has all the tools you need to buy, sell, and store your crypto. Maximize your trading strategies with ActiveTrader.
                            </span>
                            <Button variant='outline-light' className="btn-rounded-circle btn-icon shadow-none learn_more">
                                Learn More
                            </Button>
                        </Col>
                        <Col lg={6}  className="tools_img text-center">
                            <img src={ToolsImg} alt="Tools Biginner" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Simple secure buy and sell */}
            <section className="simple_secure_section section">
                <span className="title d-block">A simple, secure way to buy and sell cryptocurrency</span>
                <span className="text d-block">
                    Trade bitcoin and other cryptos in 3 minutes.
                </span>
                <Button variant='outline-black' className="btn-rounded-circle btn-icon shadow-none d-block get_started">
                    Get Started
                </Button>

            </section>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
