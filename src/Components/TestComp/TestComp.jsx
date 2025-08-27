import React, { useEffect, useMemo, useRef, useState } from 'react'
import useFetch from '../Hooks/useFetch'


export default function TestComp() {

  //use ref
  // select element vDom
  // how many times component re render

  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  let { data } = useFetch("products")

  console.log(data, "Products");
  let { data: newData } = useFetch("categories")

  console.log(newData, "categories");


  // let x = useRef(0)
  // console.log(x);

  // useEffect(() => {
  //   x.current++;
  // })

  // let myInput = useRef()

  // useEffect(() => {
  //   myInput.current.focus()
  //   myInput.current.style.outline ="none"
  //   myInput.current.style.border ="2px solid red"
  // },[])

  //   function checkEvenCounter2() {
  //   console.log("check even");

  //     return counter2 % 2 == 0 
  // }

  let checkEvenCounter2 = useMemo(() => {
    // console.log("check even");
    return counter2 % 2 == 0
  }, [counter2])








  return (
    <>
      <div className="container mx-auto text-3xl text-center h-screen">
        <div className="pt-20">
          <div className="flex text-center items-center justify-center mt-5">
            <div className="w-1/2 bg-red-400">
              <p>{counter}</p>

              <button onClick={() => setCounter(counter + 1)} className=' btn bg-cyan-600 text-white px-3 py-1'>+</button>
              <button onClick={() => setCounter(counter - 1)} className='btn bg-red-600 text-white px-3 py-1'>-</button>
            </div>
            <div className="w-1/2 bg-cyan-400">
              <p>{counter2}</p>
              <p>{checkEvenCounter2 ? "Even Number" : "Odd Number"}</p>
              <button onClick={() => setCounter2(counter2 + 1)} className=' btn bg-cyan-600 text-white px-3 py-1'>+</button>
              <button onClick={() => setCounter2(counter2 - 1)} className='btn bg-red-600 text-white px-3 py-1'>-</button>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
