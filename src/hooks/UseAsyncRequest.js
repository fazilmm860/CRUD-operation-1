import { useState, useEffect } from 'react';


const useAsyncRequest = amount => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () =>{
            try{
                setLoading(true);
                const response=await fetch(`http://localhost:3030/students`)
                const json = await response.json();
                console.log("json.results "+json );
                setData(json, setLoading(false));
            }catch(err){
                console.log(`Somthing went wrong fetchin`,err);
                setLoading(false)
            }
        }
        if(amount){
            fetchData(amount)
        }
    },[amount])
    return[data,loading]
}

export default useAsyncRequest;