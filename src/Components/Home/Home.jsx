import Banner from "./Banner";
import Offer from "./Offer";
import Books from "../Books/Books"
import Question from "./Question";
const Home = () => {
    return (
        <div>
            <Banner/>
            <Books/>

            <Offer/>
            <Question/>
        </div>
    );
};

export default Home;
