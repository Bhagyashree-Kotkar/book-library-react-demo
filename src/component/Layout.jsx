import { Outlet } from 'react-router';
import Footer from './Footers/Footers';
import Header from './Headers/Headers';

const Layout=()=>{
    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Layout