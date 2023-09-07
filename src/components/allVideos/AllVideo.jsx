import React, { useEffect } from "react";
import Loader from "../ui/spinner/Loader";
import VideoContainer from "./VideoContainer";


const AllVideos = ({_videos,_isLoading}) =>{

    useEffect(()=>{
        if(_videos){
            console.log(_videos)
        }
    },[_videos])
    return <div>
        {
            _isLoading ?  <Loader /> : <VideoContainer _allVideos={_videos} />
        }
    </div>
}

export default AllVideos;