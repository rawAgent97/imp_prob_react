import React,{useState,useEffect} from "react";
import useUpdateEffect from "./UseUpdateEffect";

const Sample=(props)=>{
    const [counter,setCounter]=useState(0)

    useUpdateEffect(()=>{
        console.log('Count has been updated:', counter);

    },[counter])

    return (
        <div>
        <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )

}

export default Sample;