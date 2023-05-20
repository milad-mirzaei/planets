import React,{useState} from 'react'

const App = () => {

const truePlanets=[
  'Sun',
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
]

const [planets, setPlanets] = useState(['','','','','','','','','']);

const [win, setWin] = useState(false);

const handleOnDrag = (e,planet)=>{
  e.dataTransfer.setData("planet",planet);
}

const handleOnDrop=(e,index)=>{
  const planet = e.dataTransfer.getData('planet');
  console.log('planet',planet);
  let newPlanets=planets;
  newPlanets[index]=planet;
  setPlanets([...newPlanets]);
}
const handleDragOver = (e)=>{
  e.preventDefault();
}

const handleTrue=()=>{
  if(planets.toString()===truePlanets.toString()){
    setWin(true);
  }

}

  return (
    <div className='w-full h-full'>
      <div className='h-[33vh] w-full bg-green-300 flex flex-row justify-center items-center px-3 gap-3'> 
      <div className='w-[70px] h-[70px] rounded-full bg-yellow-500' draggable onDragStart={(e)=>handleOnDrag(e,'Sun')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-yellow-500' draggable onDragStart={(e)=>handleOnDrag(e,'Mercury')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-red-500' draggable onDragStart={(e)=>handleOnDrag(e,'Venus')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-green-500' draggable onDragStart={(e)=>handleOnDrag(e,'Earth')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-pink-500' draggable onDragStart={(e)=>handleOnDrag(e,'Mars')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-amber-700' draggable onDragStart={(e)=>handleOnDrag(e,'Jupiter')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-cyan-200' draggable onDragStart={(e)=>handleOnDrag(e,'Saturn')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-black' draggable onDragStart={(e)=>handleOnDrag(e,'Uranus')}></div>
      <div className='w-[70px] h-[70px] rounded-full bg-purple-500' draggable onDragStart={(e)=>handleOnDrag(e,'Neptune')}></div>
    </div>
     <div className='h-[34vh] w-full flex flex-row bg-blue-500 items-center justify-center px-3 gap-3' > 
     {planets.map((planet,index)=>(
      planets[index]==''?<div className='w-[70px] h-[70px] rounded-full border-dashed border-[4px] border-gray-500' key={index} onDrop={(e)=>handleOnDrop(e,index)} onDragOver={handleDragOver} ></div>:<div>{planet}</div>
     ))}
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
     <div className='h-[33vh] w-full flex flex-row bg-red-500 items-center justify-center'>
        {win?<div></div>:<div className='text-2xl bg-white px-16 py-5 rounded-xl cursor-pointer' onClick={handleTrue}>Test!</div>}
     </div>
    </div>
  );
}

export default App