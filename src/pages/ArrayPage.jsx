import React , {useState} from 'react'
import Navbar from '../components/Navbar.jsx'
import HomeButton from '../components/HomeButton.jsx'
import Input from '../components/Input.jsx'
import { toast} from 'react-hot-toast'
const ArrayPage = () => {
  const [arraySize , setArraySize]  = useState(0) ; 
  const [array , setArray ] = useState([]) 
  const [nextIndex , setNextIndex ] = useState(0) ; 
  const [nextValue  , setNextValue ] = useState(0) ; 
  const [ update , setUpdate ] = useState(false ) 
  return (
    <div className=' relative bg-zinc-500  h-screen w-screen overflow-x-hidden text-white '>
     <Navbar name={'Array'} /> 
        
    <HomeButton/>
    
    <div className='w-full h-50 p-8 gap-5 flex   flex-col justify-center items-center '>
        <div className='flex gap-3  items-center p-3 '>
             <p>Size : </p>
          <input type="number" name="Size of Array" value={arraySize} max={15} onChange={(e) => setArraySize(e.target.value)}  id="" className='bg-white p-2 text-black'  min={0} />
       
        </div >
           <button
           onClick={() => {
            setNextIndex(0) ; 
            setNextValue(0) ; 
          const newArr = new Array(Number(arraySize)).fill(-1);
           setArray(newArr);
          

           }}
           className='bg-green-400 font-semibold p-3 rounded-lg ' >Visualize</button>
    </div>



<div className='flex gap-10 justify-center items-center '>

{/* left part  */}  


  {array.length>0 &&  <div className='flex font-bold  flex-col gap-4 '>
        <p>{`Array ->`}</p>
        <p>{`Indices ->`}</p>
        <p>{`Memory Address ->`}</p>
      </div>

}
{/* right part  */}

<div className={`flex justify-center items-center gap-0 space-x-0`}>
  {
  array.length > 0 && array.map((element , index) => 
    <div className='flex flex-col gap-2 '>
     <div className='aspect-square flex justify-center items-center  border-2 border-black  min-h-10  '>
        {element !== -1 && 
        <p className='font-semibold'>{element}</p>
        }
    </div>
    <p>{index}</p>
    <p className='text-sm'>{1000 + 4*index}</p>
    </div>
 
  ) 
}
  </div>


</div>



{array.length > 0 &&  <div className='flex h-40 mt-20   gap-5 flex-col  justify-center items-center '>
   
   <div className='flex gap-10 '>
   <button  onClick={() => setUpdate(false)} className='p-3 px-5 rounded-lg  border bg-amber-700 '>Insert</button>
   <button  onClick={() => setUpdate(true)}  className='p-3 px-5 rounded-lg  border bg-amber-700 '>Update</button>
   </div>

  <div className='flex gap-4 items-center '>
       <label htmlFor="value">Enter Value</label>
         <input type="number"  required={true} value={nextValue}  max={99} onChange={(e) => setNextValue(e.target.value)}  id="value" className='bg-white w-50 p-2 rounded-md  text-black'  min={0} />
  </div>
 {update &&  <div className='flex gap-4 items-center '>
       <label htmlFor="index">Enter Index</label>
         <input type="number"  required={true} value={nextIndex} max={array.length - 1 }  onChange={(e) => setNextIndex(e.target.value)}  id="index" className='bg-white w-50  p-2 rounded-md  text-black'  min={0} />
  </div>}


  <button   className='bg-green-400 font-semibold p-3 rounded-lg ' 
  onClick={() => {
    if(nextIndex >= array.length){
      toast.error('Max Size Reached !! ')
    }else{
      setArray(prev => {
      const copy = [...prev ] 
      copy[nextIndex] = nextValue ;
      setNextIndex(Number(nextIndex)+1)
      return copy ; 
    }
  )
setNextValue(0)
}
  }}
  >Submit</button>
</div>}

    </div>
  )
}

export default ArrayPage
