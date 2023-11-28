import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import offer1 from '../../assets/banner-6.jpg';
import offer2 from '../../assets/banner-7.jpg';
import i1 from "../../assets/book.png";
import i2 from "../../assets/delivery-status.png";
import i3 from "../../assets/coupon.png";
import i4 from "../../assets/shipped.png"
const Offer = () => {
    return (
        <div>
      <Container>
    <Row>
        <Col md={8} xs={12}>
            <Card className="text-white">
                <Card.Img src={offer1} alt="Card image" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title>NEW COLLECTIONS</Card.Title>
                    <Card.Text className="fw-semibold fs-1">Book Festival</Card.Text>
                    <Card.Text>All Books are flat 50% off</Card.Text>
                    <Button variant="dark" style={{ width: '20%' }}>
                        View offer
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </Col>
        <Col md={4} xs={12}>
            <Card>
                <Card.Img src={offer2} alt="Card image" style={{ height: "240px" }} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="fw-semibold fs-1">
                        Popular <br /> Books
                    </Card.Title>
                    <Card.Text>All books are flat 20% off</Card.Text>
                    <Button variant="dark" style={{ width: '35%' }}>
                    View offer
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </Col>
    </Row>
</Container>

            <div>
                <div className="text-center container">
                    <div className="m-3">
                        <h1>Why Choose Us</h1>
                        <p className="m-3 fs-4" style={{ color: "#242424CC" }}>
                            We provide a wide range of books, exclusive discounts, and <br />A user-friendly shopping experience to meet all your reading needs.
                        </p>
                    </div>
                    <div className="row justify-content-evenly icons-div">
                        <div className="col-sm-6 col-md-3" style={{ color: "#242424CC" }}>
                            <img src={i1} alt='' style={{ width: "20%" }} />
                            <p className='fs-2'>6 millions books</p>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit</p>
                        </div>
                        <div className="col-sm-6 col-md-3" style={{ color: "#242424CC" }}>
                            <img src={i2} alt='' style={{ width: "20%" }} />
                            <p className='fs-2'>Free Easy Returns</p>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit</p>
                        </div>
                        <div className="col-sm-6 col-md-3" style={{ color: "#242424CC" }}>
                            <img src={i3} alt='' style={{ width: "20%" }} />
                            <p className='fs-2'>Special Discounts</p>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit</p>
                        </div>
                        <div className="col-sm-6 col-md-3" style={{ color: "#242424CC" }}>
                            <img src={i4} alt='' style={{ width: "20%" }} />
                            <p className='fs-2'>Free  Delivery</p>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Offer;
