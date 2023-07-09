import { useEffect, useState } from "react";


import axios from "axios";


const rewinUseEffect =()=>{

const [products,setProducys]=useState([])
const[ isLoading,setIsLoading]=useState(false)
const [limitNumber,setLimitNumber]=useState(5)




const API_URL='https://fakestoreapi.com/products/1'

const ferchDataFromAPI= async ()=>{
    const result = await axios.get(API_URL);
    const data = result.data;
    setProducys(data);
    setIsLoading(false)
}




 useEffect(()=>{
    ferchDataFromAPI()

 },[])

console.log(products)






if(isLoading){
    return<div>Loading....</div>
    
}
 return (
    <div>
        <Carousel productsData={products}/>
    </div>
 )



}
 export default rewinUseEffect