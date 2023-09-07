import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = ({
    _allVideos
}) =>{
    return <section className="grid grid-cols-3 justify-center gap-x-5">
        {
            _allVideos.length > 0 ? _allVideos.map((videos,i)=>{
                return <VideoCard key={i} _videoSrc={videos.video} _heading={videos._heading} _tags={videos.tag} />
            }) : "No Videos"
        }
    </section>
}

export default VideoContainer