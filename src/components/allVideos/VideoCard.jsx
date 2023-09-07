import React from "react";

const VideoCard = ({
    _videoSrc,
    _heading,
    _tags
}) =>{
    return <div class="card card-image-cover justify-self-center">
                <video className="max-w-full max-h-full rounded-t-md" controls>
                    <source src={_videoSrc} />
                </video>
                <div class="card-body">
                    <h2 class="card-header">{_heading}</h2>
                    <div className="flex flex-wrap gap-4">
                    {
                        _tags ? _tags.map((t,i)=>{
                            return <span class="badge badge-primary" key={i}>{t}</span>
                        }) : ''
                    }

                    </div>
                </div>
            </div>
}

export default VideoCard;