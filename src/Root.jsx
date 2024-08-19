import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root = () => {
  
    const location =  useLocation();
    //   console.log(location);
       const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
             {noHeaderFooter ||   <Navbar></Navbar>}
             <Outlet></Outlet>
        </div>
    );
};

export default Root;