import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaFileWaveform } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  
  const {user, logOut} = useContext(AuthContext);


    const links = <>
    <li className="text-xl hover:scale-125 transform transition-transform duration-300">
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "active text-red-500 border-b-4 border-red-500 " : ""
            }
        >
            Home
        </NavLink>
    </li>

    {/* asdasdasdasdasdasdsa */}

    {user &&
         <div className='flex gap-8 w-full'>


    
    <li className="text-xl hover:scale-110 transform transition-transform duration-300">
        <NavLink
            to="/view-products"
            className={({ isActive }) =>
                isActive ? "active text-red-500 border-b-4 border-red-500" : ""
            }
        >
           View-Products
        </NavLink>
    </li>
    </div>
    }

</> 


const handleLogOut = () => {
    logOut()
}





    return (
        <div className="navbar max-w-7xl mx-auto mt-5 w-full">

            <div className="navbar-start hidden lg:flex flex-1">




                <ul className="flex gap-7 items-center justify-center px-1 text-xl">

                    <li className='text-4xl font-bold lg:mr-20 '><Link to='/'>ShopCart</Link></li>


                    {links}
                </ul>
            </div>
            <div className="navbar-center justify-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52">
                        {links}
                        <li>
                            <NavLink
                                to="/give-fund"
                                className={({ isActive }) =>
                                    isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                                }
                            >
                                
                                    <span > Give Fund</span>
                             

                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="navbar-end flex-1 gap-7 ">
              

                {
                    user ?
                        <Link onClick={handleLogOut} className="btn px-10 hover:bg-red-500 bg-red-700 border-none text-white uppercase">Log out<FaFileWaveform className="text-2xl animate-bounce" />
                        </Link>


                        : <Link to='/signUp' className="btn px-10 hover:bg-red-500 bg-red-700 border-none text-white uppercase">Register Now <FaFileWaveform className="text-2xl animate-bounce" />
                        </Link>
                }

<div className="w-10 p-2 items-center justify-center text-center rounded-full">
         {
            user && 
            
            <FaUser></FaUser>

           
         }
        </div>
 




            </div>
        </div>
    );
};

export default Navbar;