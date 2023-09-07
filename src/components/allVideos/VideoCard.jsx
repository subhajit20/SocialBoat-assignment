import React from "react";

const VideoCard = ({
    _videoSrc,
    _heading,
    _tags
}) =>{
    return <div class="card card-image-cover">
                <video width="320" height="240" controls>
                    <source src={_videoSrc} />
                </video>
                <div class="card-body">
                    <h2 class="card-header">Maximizing Your Productivity at Work</h2>
                    <p class="text-content2">Are you looking to increase your productivity at work?</p>
                </div>
            </div>
}

export default VideoCard;