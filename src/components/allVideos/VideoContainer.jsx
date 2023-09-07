import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = ({
    _allVideos
}) =>{
    return <section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 p-2 ">
        {
            _allVideos.length > 0 && _allVideos.map((videos,i)=>{
                return <VideoCard key={i} _videoSrc={videos.video} _heading={videos.heading} _tags={videos.tags} />
            })
        }
        </section>

        {
            _allVideos.length <= 0 && <h1 className="text-center text-3xl">No Videos</h1>
        }
    </section>
}

export default VideoContainer