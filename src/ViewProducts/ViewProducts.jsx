import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../components/useAxiosPublic";
import SingleCard from "./Cards/SingleCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useAxiosSecure from "../components/useAxiosSecure";


const ViewProducts = () => {
   
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

   const {data, isLoading} = useQuery({
   queryKey: ['products'],
   queryFn: async () => {
          const  {data} = await axiosSecure.get('/products');
          console.log(data);
         
          return data; 
      }

   })
   
   if(loading || isLoading){
    return <LoadingSpinner></LoadingSpinner>
   }
  
   console.log(data);
  
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto max-w-[1770px]">

                            
       {
            data.map(product => (
                   <SingleCard key={product._id} product={product}></SingleCard>
            ))
       }               
                 
        </div>
    );
};

export default ViewProducts;