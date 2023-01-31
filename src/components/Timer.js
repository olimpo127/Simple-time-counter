import React from "react";

function Timer() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 4;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    return (
        <div className='d-flex flex-row justify-content-center bg-black' id='timer'>
            <i class="fa-solid fa-clock m-2 p-3 mb-2 bg-dark text-white"></i>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{num1}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{num2}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{num3}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{num4}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{num5}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{num6}</p>
        </div>
    );
};

export default Timer;