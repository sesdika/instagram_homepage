import { useEffect, useState } from "react";
import React from 'react';
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import test_post_video
    from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";

import axios from "axios"


function PostArea() {
    const [datapost, setDatapost] = useState([])
    useEffect(() => {
        axios.get("https://api.jsonbin.io/v3/b/63bd23fe15ab31599e3290c1")  
            .then(response => setDatapost(response.data.record.data))
            .catch(err => console.log(err)) 
    }, []);

    return (
        <div>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="6s" username="yavuzyigitmuhammetali" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="6s" username="yavuzyigitmuhammetali" explanation="explanation..."/>
            {datapost.length?
                datapost.map(u=>
                    <PostElement media={u.images.standard_resolution.url} likeCount="0" profilePicture={u.caption.from.profile_picture} time={u.caption.created_time} username={u.caption.from.username} explanation={u.caption.text}/>
                ) :
                <div></div>
            }
        </div>
    );
}

export default PostArea;