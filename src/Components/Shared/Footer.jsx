import { Col, Row } from 'react-bootstrap';
import fb from "../../assets/facebook.png";
import yt from "../../assets/youtube.png";
import insta from "../../assets/instagram.png";


const Footer = () => {
    return (
        <div style={{ backgroundColor: "#2A4E44", color: "#FFFFFF99" }}>
            <Row style={{ padding: "2%" }}>
                <Col xs={12} md={3}>
                    <h2 style={{ color: "white", fontWeight: "bold" }}>Customer Services</h2>
                    <p style={{ fontSize: "18px" }}>Got Question? Call us 24/7</p>
                    <h3 style={{ color: "orange", fontWeight: "bold" }}>+880 014-32833</h3>
                    <p style={{ fontSize: "18px" }}>Sylhet,Bangladesh</p>
                    <p style={{ fontSize: "18px" }}>ReadScape@domain.com</p>
                </Col>
                <Col xs={12} md={3}>
                    <h2 style={{ color: "white", fontWeight: "bold" }}>Publishers</h2>
                    <p style={{ fontSize: "18px" }}>Norstedts history</p>
                    <p style={{ fontSize: "18px" }}>Norstedts Publishing Group</p>

                </Col>
                <Col xs={12} md={3}>
                    <h2 style={{ color: "white", fontWeight: "bold" }}>About us</h2>
                    <p style={{ fontSize: "18px" }}>Our services</p>
                    <p style={{ fontSize: "18px" }}>Latest news</p>
                    <p style={{ fontSize: "18px" }}>Best sellers</p>

                </Col>
                <Col xs={12} md={3}>
                    <h2 style={{ color: "white", fontWeight: "bold" }}>Connect With Us</h2>
                    <div className="row">
                        <div className="col-3">
                            <img style={{ width: "50px" }} src={fb} alt='Facebook' />
                        </div>
                        <div className="col-3">
                            <img style={{ width: "50px" }} src={yt} alt='YouTube' />
                        </div>
                        <div className="col-3">
                            <img style={{ width: "50px" }} src={insta} alt='Instagram' />
                        </div>
                    </div>


                </Col>
            </Row>
        </div>
    );
};

export default Footer;