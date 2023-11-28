import Banner from "./Banner";
import Offer from "./Offer";
import Books from "../Books/Books"
const Home = () => {
    return (
        <div>
            <Banner/>
            <Books/>

            <Offer/>
        </div>
    );
};

export default Home;
  // <div>
        //     <h2 className='m-3 text-center p-2 text-white'>
        //         <span className='heading'>O</span>ur <span className='heading'>C</span>ollections
        //     </h2>

        //     <Row xs={1} md={3} className=" gx-4 gy-3 p-5 ">

        //         {products.map(product => (
        //             <Book key={product._id} product={product} />
        //         ))}
        //     </Row>

        // </div>