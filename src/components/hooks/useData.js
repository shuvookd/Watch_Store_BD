import { useEffect, useState } from "react";


const useData=()=>{

    const [information, setinformation]=useState([]);


    useEffect(()=>{
       

        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setinformation(data))


    },[])
    return [information, setinformation]
}


 export default useData;