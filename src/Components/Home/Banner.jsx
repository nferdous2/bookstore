
import { Button, Col, Row } from 'react-bootstrap';
import img3 from "../../assets/img3.png";

const Banner = () => {
  return (
    <div style={{backgroundColor:"#FFF8F8"}}>
    <Row className="align-items-center"  style={{height:"80vh"}}>
        <Col md={6} style={{ padding: "5%" }}>
            <div>
                <p className='fs-5'>40% OFF ALL BOOK</p>
                <h1 className='fs-1'>Unleash Your</h1>
                <h2 className='fs-1'>Imagination With</h2>
                <h2 className='fs-1'>Books</h2>
                <Button variant="dark" style={{ width: "20%" }}>See All</Button>
            </div>
        </Col>
        <Col md={6}>
            <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                style={{height:"50vh"}}
            />
        </Col>
    </Row>
</div>

  );
};

export default Banner;