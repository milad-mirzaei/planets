import React, { useState } from "react";
// import Mercury from '../public/images/Mercury.png'
// import Venus from '../public/images/Venus.png'
// import Earth from '../public/images/Earth.png'
// import Mars from '../public/images/Mars.png'
// import Jupiter from '../public/images/Jupiter.png'
// import Saturn from '../public/images/Saturn.png'
// import Uranus from '../public/images/Uranus.png'
// import Neptune from '../public/images/Neptune.png'
// import Sun from '../public/images/Sun.png'

const App = () => {
  const truePlanets = [
    "Sun",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const planetObjects = [
    { name: "Venus", image: "images/Venus.png" },
    { name: "Mars", image: "images/Mars.png" },
    { name: "Mercury", image: "images/Mercury.png" },
    { name: "Neptune", image: "images/Neptune.png" },
    { name: "Sun", image: "images/Sun.png" },
    { name: "Uranus", image: "images/Uranus.png" },
    { name: "Jupiter", image: "images/Jupiter.png" },
    { name: "Saturn", image: "images/Saturn.png" },
    { name: "Earth", image: "images/Earth.png" },
  ];

  const [planets, setPlanets] = useState(["", "", "", "", "", "", "", "", ""]);

  const [win, setWin] = useState(false);
  const [isSubmit, SetisSubmit] = useState(false)

  const handleOnDrag = (e, planet) => {
    e.dataTransfer.setData("planet", planet);
  };

  const handleOnDrop = (e, index) => {
    const planet = e.dataTransfer.getData("planet");
    console.log("planet", planet);
    let newPlanets = planets;
    newPlanets[index] = planet;
    setPlanets([...newPlanets]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleTrue = () => {
    if (planets.toString() === truePlanets.toString()) {
      setWin(true);
    }
  };

  const handleSubmit=()=>{
    handleTrue();
    SetisSubmit(true);
  }

  const handleRetry=()=>{
    setPlanets(["", "", "", "", "", "", "", "", ""]);
    setWin(false);
    SetisSubmit(false);
  }

  return (
    <div className="w-full h-full">
      <div className="h-[25vh] w-full  flex flex-row justify-center items-center px-3 gap-5">
        {planetObjects.map((item, index) => (
          <div className="flex flex-col items-center gap-2">

          <div
            className="w-[70px] h-[70px] rounded-full"
            draggable
            onDragStart={(e) => handleOnDrag(e, item.name)}
            key={index}
          >
            <img src={item.image} alt="planet"/>
          </div>
          <div className="bg-gray-200 px-3 rounded-lg">

          <p >{item.name}</p>
          </div>
          </div>
        ))}

        {/* <div className='w-[70px] h-[70px] rounded-full bg-yellow-500' draggable onDragStart={(e)=>handleOnDrag(e,'Sun')}><img src='images/Mercury.png'/></div>
      <div className='w-[70px] h-[70px] rounded-full bg-yellow-500' draggable onDragStart={(e)=>handleOnDrag(e,'Mercury')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-red-500' draggable onDragStart={(e)=>handleOnDrag(e,'Venus')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-green-500' draggable onDragStart={(e)=>handleOnDrag(e,'Earth')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-pink-500' draggable onDragStart={(e)=>handleOnDrag(e,'Mars')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-amber-700' draggable onDragStart={(e)=>handleOnDrag(e,'Jupiter')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-cyan-200' draggable onDragStart={(e)=>handleOnDrag(e,'Saturn')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-black' draggable onDragStart={(e)=>handleOnDrag(e,'Uranus')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-purple-500' draggable onDragStart={(e)=>handleOnDrag(e,'Neptune')}></div> */}
      </div>
      <div className="h-[17vh] flex justify-center items-center ">
        <p className="text-3xl text-gray-500">Arrange the planets in order from left to right</p>
      </div>
      <div className="h-[25vh] w-full flex flex-row  items-center justify-center px-3 gap-5">
        {planets.map((planet, index) =>
          planets[index] === "" ? (
            <div
              className="w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-400"
              key={index}
              onDrop={(e) => handleOnDrop(e, index)}
              onDragOver={handleDragOver}
            ></div>
          ) : (
            <div className="flex flex-col items-center gap-2">

            <div className="w-[70px] h-[70px] rounded-full" key={index}>
              <img
              src={`images/${planet}.png`}
              alt="planet"
                // src={planetObjects.find((element) => {
                //   if (element.name == planet) {
                //     return element.image;
                //   }
                // })}
              />
            </div>
            <div className="bg-gray-200 px-3 rounded-lg">

            <p>{planet}</p>
            </div>
            </div>
          )
        )}
        {/* <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,0)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,1)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,2)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,3)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,4)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,5)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,6)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,7)} onDragOver={handleDragOver}></div>
      <div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' onDrop={(e)=>handleOnDrop(e,8)} onDragOver={handleDragOver}></div> */}
      </div>
      <div className="h-[33vh] w-full flex flex-row  items-center justify-center">
        {win ? (
          <div className="flex flex-col items-center gap-5">

          <div className="px-16 py-7 bg-green-200 opacity-90 rounded-3xl">

            <p className="text-4xl ">You Win!</p>
          </div>
         < div
            className="text-2xl bg-gray-200 px-16 py-5 rounded-3xl cursor-pointer"
            onClick={handleRetry}
          >
            Retry
          </div>
          </div>
        ) : !isSubmit?(
          <div
            className="text-2xl bg-gray-200 px-16 py-5 rounded-3xl cursor-pointer"
            onClick={handleSubmit}
          >
            Submit!
          </div>
        ):(
          <div className=" flex flex-col items-center gap-5">

          <div className="px-16 py-7 bg-red-200 opacity-90 rounded-3xl">

          <p className="text-4xl ">You Lose!</p>
        </div>
        < div
            className="text-2xl bg-gray-200 px-16 py-5 rounded-3xl cursor-pointer"
            onClick={handleRetry}
          >
            Retry
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
