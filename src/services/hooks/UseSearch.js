import { useEffect, useState } from "react";

const useSearch = (inputs) =>{
    const [videos,setVideos] = useState([]);
    const [loading,setLoading] = useState(false);

    const getVideos = async (inputs) =>{
        setLoading(true);
        try{
            const res = await fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${inputs}&numResults=${9}`)
            const data = await res.json();

            console.log(data);
            if(data.status === "success"){
                setVideos([]);
                setVideos((prev)=>([...data.results]));
                setLoading(false);

            }else{
                setVideos([]);
                setLoading(false);

            }
        }catch(e){
            console.log(e);
            setLoading(false);

        }
    }

    useEffect(()=>{
        console.log(videos)
    },[videos])

    return{
        getVideos,
        videos:videos,
        loading:loading
    }
}

export default useSearch;