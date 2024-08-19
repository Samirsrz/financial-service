import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import Swal from 'sweetalert2';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   
   const [user,setUser] = useState(null);
   const [loading, setLoading] = useState(true);
 
   const googleProvider = new GoogleAuthProvider();
   


   const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const updateUserProfile = (name, photo= null) => {
    return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL: photo
    })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error updating profile", error)
        setLoading(false)
      })

   }
   
   const googleLogin = () => {
    
    signInWithPopup(auth, googleProvider)
    .then(res => {
      Swal.fire({
         position: "top-end",
         icon: "success",
         title: "User LoggedIn Successfully",
         showConfirmButton: false,
         timer: 1500
       });
       
     }) 


   }

   const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password)

   }
   
   const logOut = () => {
    setLoading(true);
    return signOut(auth);
}
   
useEffect(() => {
  
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    const userEmail =  currentUser?.email || user?.email;
    const loggedUser  = {email : userEmail}

      setUser(currentUser);
    //  console.log('current User', currentUser);

      setLoading(false);


      if(currentUser) {
        axios.post('http://localhost:5000/jwt', loggedUser,{withCredentials:true})
        .then(res => {
           // console.log(res.data)
        })
      }
      else{
        axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
        .then(res => {
       //     console.log(res.data)
        })
    }
  });
  return () => {
    return unsubscribe();
  }
             
},[user?.email])
   


const authInfo = {

  user,
  loading,
  createUser,
  signIn,
  logOut,
  updateUserProfile,
  googleLogin

 }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;