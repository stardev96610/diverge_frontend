//components
import MyNavbar from "../../components/navbars/Navbar";
import { Carousel } from "react-bootstrap";
//Slider images
import FirstSlide from '../../assets/images/slider1.png';
import SecondSlide from '../../assets/images/slider2.png';
import ThirdSlide from '../../assets/images/slider3.png';
// News images
import NewsImages from '../../assets/images/news.svg';
//scss
import "../../assets/scss/custom/homepage.scss";
const Home = () => {
    return (
        <>
            <MyNavbar
                navClass="bg-black navbar-dark zindex-10"
                hideSearch
                isSticky
                fixedWidth
            />
            {/* Crarousel */}
            <div className="carousel_section">
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
            </div>
            {/* News Section */}
            <div className="news_section bg-black text-center p-3 pt-2">
                <img src={NewsImages} alt=""  className="w-100"/>
            </div>
            {/* hero */}
            {/* <Hero /> */}
        </>
    );
};

export default Home;
