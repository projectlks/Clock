import React, { useEffect, useState } from "react";
import img from "./assets/clock.png";

const CircularClock: React.FC = () => {
  const [second, setSecond] = useState<number>(new Date().getSeconds());
  const nums: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  // Update seconds and minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) =>  prev < 59.99 ? prev + 0.01 : 0  );
    }, 10);
     // Update every 10ms for smooth animations

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);



  return (
    <div
      className="relative  rounded-full w-[500px] aspect-square transform overflow-hidden"
   
    >
      {/* Outer Circle with Numbers */}
      <div className="relative bg-blue-950  w-full h-full flex  items-center justify-center rounded-full  text-white">
      {nums.map((num, index) => {
  const radius = 205; // Circle radius
  const angle = (num * 6 -  second * 6) * (Math.PI / 180); // Adjust angle based on seconds
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
 

          return (
            <div
              key={index}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute text-sm "
            >
              {num}
            </div>
          );
        })}
      </div>



{/* min  */}


<div className=" bg-blue-950  w-[300px] absolute top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2  aspect-square flex  items-center justify-center rounded-full  text-white">
{nums.map((num, index) => {
  const radius = 105; // Circle radius
  const angle = (num * 6 - new Date().getMinutes() * 6) * (Math.PI / 180); // Adjust angle based on seconds
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
 

          return (
            <div
              key={index}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute text-sm "
            >
              {num}
            </div>
          );
        })}
      </div>
      {/* Red Box Showing Current Second */}
      <div className="absolute w-[40px] h-[40px] bg-neutral-900 z-40 flex items-center justify-center rounded top-1/2 transform -translate-y-1/2 right-0 border-2 border-white">
        <p className="text-white">{second.toFixed(0)}</p>

        {/* <p className="text-white" >{new Date().getSeconds() } </p> */}
      </div>
    {/* Red Box Showing Current minutes */}
      <div className="absolute w-[40px] h-[40px] bg-neutral-900 z-40 flex items-center justify-center rounded top-1/2 transform -translate-y-1/2 right-[120px] border-2 border-white">
        {/* <p className="text-white">{second.toFixed(0)}</p> */}

        <p className="text-white" >{new Date().getMinutes() } </p>
      </div>

{/* second ring */}
      <div className="absolute  w-[75%] aspect-square   top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2  border border-red-600 rounded-full"
      >
      
      </div>

      {/* second လက်တံ*/}

      <div className="absolute w-full h-full flex items-center top-0 justify-center p-1"
      style={{transform: `rotate(${second * -6}deg)`}}
      >
        <img src={img} alt="test" className="w-full h-full " />
      </div>


      {/* minက်တံ*/}



      <div className="absolute w-[60%] h-[60%] flex items-center top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2  justify-center p-1"
    
      >
        <img src={img} alt="test" className="w-full h-full "    style={{transform: `rotate(${second * 0.06 }deg)`}}/>
      </div>


      <h1 className="top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2 absolute text-5xl text-white
      ">
        {new Date().getHours()}
      </h1>

      <div className="absolute  w-[25%] aspect-square   top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2  border border-red-600 rounded-full"
      >
      
      </div>
    </div>
  );
};

export default CircularClock;
