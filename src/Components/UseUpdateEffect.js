import React,{useEffect,useState,useRef} from "react";

const useUpdateEffect=(callBack,dependencies)=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        if (count==0){
          setCount(1)
        }
        else{
            callBack();
        }

    },dependencies);

    //below one is from chatGPT

    // Ref to keep track of the initial render
//   const hasMounted = useRef(false);

//   useEffect(() => {
//     // Skip the callback on the first render
//     if (hasMounted.current) {
//       callBack();
//     } else {
//       hasMounted.current = true;
//     }
//   }, dependencies); // Dependencies array similar to useEffect

}

export default useUpdateEffect;