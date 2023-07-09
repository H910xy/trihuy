import React from "react";


const Carousel = ()=>{
    const {productDta}=props;

console.log(productDta,"data from parent");


    return{
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        {productDta?.map(
           (item,index)=>{
            return{
                <div className="carousel-item">
                <img 
                 src=""
                 className="rounded-box"
                />
                </div> 
            }
           }

           
        )
        }
        
      
 
};
}

