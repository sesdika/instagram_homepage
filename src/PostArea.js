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
        axios.get("https://private-4838f9-sesdika.apiary-mock.com/igs_complete")  
            .then(response => setDatapost(response.data.record.data))
            .catch(err => console.log(err)) 
    }, []);

    return (
        <div>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="6s" username="yavuzyigitmuhammetali" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="6s" username="yavuzyigitmuhammetali" explanation="explanation..."/>
            {datapost.length?
                datapost.map(u=>
                    <PostElement media={u.images.standard_resolution.url} likeCount={u.likes.count}  
                        profilePicture={u.caption.from.profile_picture} time={u.caption.created_time} 
                        username={u.caption.from.username} explanation={u.caption.text}
                        user_has_liked={u.user_has_liked} n_comments={u.comments.count}
                        comments={u.comments.data}
                    />
                ) :
                <div></div>
            }
        </div>
    );
}

export default PostArea;