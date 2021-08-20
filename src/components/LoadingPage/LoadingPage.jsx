import React from 'react'
import './LoadingPage.css'

const LoadingPage = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center">
          <div className="text-5xl mb-8">LOADING</div>  
        </div>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32" />
      </div>
    </>
   );
}
 
export default LoadingPage;