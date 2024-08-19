import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="min-h-[200px] border-b-8 border-lime-500">
            
        <div className="hero min-h-[705px] bg-fixed" style={{ backgroundImage: `url(https://i.ibb.co/GtpyQLR/banner.jpg)` }}>
            <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md md:max-w-2xl mt-10">
                    <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#b91c1d]">Get the Best Deals Here!!!</h1>
                    <p className="mb-5 text-sm lg:text-xl"> Join Our Blood Donor Community Today! Your commitment can make a world of difference. Register now and become a vital part of our mission to save lives through the gift of blood</p>

                    <div data-aos="zoom-in" className="flex flex-col lg:flex-row gap-5 md:gap-10 items-center mt-10" >
                        
                    <Link to='/signUp'>
                      <button className="btn bg-[#b91c1d] border-none px-6  font-bold">SignUp</button>
                      </Link> 
                      <Link to='/view-products'>
                      <button className="btn btn-accent bg-[#b91c1d] border-none font-bold ">View Products</button>
                      </Link> 
                        
                      

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;