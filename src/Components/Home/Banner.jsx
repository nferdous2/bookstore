// import { Button, Carousel, Col, Row } from 'react-bootstrap';
// import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";
// const Banner = () => {
//   return (
//     <Carousel style={{ background: ' #FDEFEF' }}>
//       {/* <Carousel.Item>
//         <Row>
//           <Col md={6}>
//             <div style={{padding:"5%"}}>
//               <p> 40% OFF ALL BOOK</p>
//               <h3>Unleash Your</h3>
//               <h2>Imagination With</h2>
//               <h2>Books</h2>
//               <Button variant="dark" style={{ width: "20%" }}>Link</Button>

//             </div>


//           </Col>
//           <Col md={6}>
//             <img
//               className="d-block w-50"
//               src={img1}
//               alt="First slide"
//             />
//           </Col>

//         </Row>
//       </Carousel.Item>

//       <Carousel.Item>
//         <Row>
//           <Col md={6}>
//           <div style={{padding:"5%"}}>
//               <p> 40% OFF ALL BOOK</p>
//               <h3>Unleash Your</h3>
//               <h2>Imagination With</h2>
//               <h2>Books</h2>
//               <Button variant="dark" style={{ width: "20%" }}>Link</Button>

//             </div>

//           </Col>
//           <Col md={6}>
//             <img
//               className="d-block "
//               src={img2}
//               alt="Second slide"
//             />
//           </Col>

//         </Row>
//       </Carousel.Item> */}

//       <Carousel.Item>
//         <Row>
//           <Col md={6}>
//           <div style={{padding:"5%"}}>
//                 <p> 40% OFF ALL BOOK</p>
//                 <h3>Unleash Your</h3>
//                 <h2>Imagination With</h2>
//                 <h2>Books</h2>
//                 <Button variant="dark" style={{ width: "20%" }}>Link</Button>

//               </div>
//           </Col>
//           <Col md={6}>
//             <img
//               className="d-block w-75"
//               src={img3}
//               alt="Third slide"
//             />
//           </Col>

//         </Row>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default Banner;

import { Button, Col, Row } from 'react-bootstrap';
import img3 from "../../assets/img3.png";

const Banner = () => {
  return (
    <div>
    <Row className="align-items-center">
        <Col md={7} style={{ padding: "2%", paddingRight: "5%" }}>
            <div>
                <p className='fs-5'>40% OFF ALL BOOK</p>
                <h1 className='fs-1'>Unleash Your</h1>
                <h2 className='fs-1'>Imagination With</h2>
                <h2 className='fs-1'>Books</h2>
                <Button variant="dark" style={{ width: "20%" }}>Link</Button>
            </div>
        </Col>
        <Col md={5}>
            <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
            />
        </Col>
    </Row>
</div>

  );
};

export default Banner;