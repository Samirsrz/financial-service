import { useContext, useState } from "react";
import { FaBan } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../components/useAxiosPublic";

const SignUp = () => {

     const {createUser, updateUserProfile, loading} = useContext(AuthContext);
      const axiosPublic = useAxiosPublic();
     const [success, setSuccess] = useState('')
      
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();
     const location = useLocation();
     const from = location?.state || "/";

     const [registerError,  setRegisterError] = useState('')

  const registerUser = async user => {
    console.log(user);
    const {data} = await axiosPublic.put('/register', user)
      return data;
  
   }

     const handleRegister = (e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name =  form.get('name');
            const email =  form.get('email');
            const password = form.get('password');
          
        //    const photo = form.get('photo')
            setRegisterError('');
            setSuccess('');

          

               const currentUser = {
                name,
                email,
                password,
               
            }
       
        
          createUser(email, password)
          .then(res=>{
            registerUser(currentUser)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration Successfull",
              showConfirmButton: false,
              timer: 1500
            });
            updateUserProfile(name)
          

          })
    
          navigate('/');

     
     }






    return (
        <div className="hero -mt-12 min-h-[900px] overflow-x-hidden">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
          <div className="max-w-6xl flex items-center ">
             
              <div className="w-full max-w-xl p-4 rounded-md shadow sm:p-8 bg-gray-400 text-gray-100" >
                  <h2 className="mb-3 text-3xl font-semibold text-center">Register Your Account</h2>
                  <p className="text-sm text-center text-gray-400 hover:scale-110 transform transition-transform duration-300">Already have account?
                      <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline ml-5 text-red-500 text-xl">Login here</Link>
                  </p>
                  <form onSubmit={handleRegister} action="" className="space-y-8 mt-10">
                      <div className="space-y-4" >
                          <div className='flex gap-5'>
                              <div className="space-y-2 flex-1" >
                                  <label className="block text-sm text-left">Your name</label>
                                  <input required type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-3 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                              </div>
                            
                          </div>
                          <div className='flex gap-5'>
                              <div className="space-y-2 flex-1" >
                                  <label className="block text-sm text-left">Email address</label>
                                  <input required type="email" name="email" id="email" placeholder="xyz@gmail.com" className="w-full px-3 py-3 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                              </div>


           
                          </div>
                          <div className='flex gap-5'>
                             
                          </div>
                      </div>

                      <div className='flex gap-5'>
                          <div className="space-y-2 flex-1" >
                              <div className="flex justify-between" >
                                  <label name="password" className="text-sm">Password</label>
                              </div>
                              <input required type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                          </div>
                          
                      </div>


                      {
                          registerError && <div className='text-red-500 flex items-center justify-center gap-2'><FaBan /> {registerError}</div>
                      }

                      <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-red-800 hover:scale-105 transform transition-transform duration-300 hover:bg-red-500 text-white">
                          {
                              loading ? <ImSpinner9 className='mx-auto animate-spin text-xl'></ImSpinner9> :
                                  'Register'
                          }
                      </button>



                      <div>
                          <h3 className='text-yellow-300'>For Demo Login, please visit login page</h3>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    );
};

export default SignUp;