import React,{useEffect,useState} from "react";

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

}

export default useUpdateEffect;