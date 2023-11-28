
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';


const Main = () => {
    return (
        <div>
            <div className='sticky-top'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
            <div>
            <Footer></Footer>
            </div>
        </div >
    );
};

export default Main;