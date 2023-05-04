// eslint-disable-next-line no-unused-vars
import React, {useRef, useEffect, useState} from 'react';
import right from "./photos/right.png"
import left from "./photos/left.png"
import test_pp_icon from "./photos/1.jpg"
import StoryElement from "./StoryElement";

import axios from "axios"

function StoryArea() {
    const scrollRef = useRef();

    const scrollRight = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft + 325,
            behavior: 'smooth'
        });
    };
    const scrollLeft = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft - 325,
            behavior: 'smooth'
        });
    };

    const [datastory, setDatastory] = useState([])
    useEffect(() => {
        axios.get("https://private-4838f9-sesdika.apiary-mock.com/stories")  
            .then(response => setDatastory(response.data.record.data))
            .catch(err => console.log(err)) 
    }, []);

    return (
        <div>
            <div>
                <div className="story-left-button" onClick={scrollLeft}><img src={left} alt="left"/></div>
                <div className="story-area-box" ref={scrollRef}>
                    {datastory.length?
                        datastory.map(story=>
                            <StoryElement profilePicture={story.from.profile_picture}>
                                {story.from.username}
                            </StoryElement>
                        ) :
                        <div></div>
                    }
                </div>
                <div className="story-right-button" onClick={scrollRight}><img src={right} alt="right"/></div>
            </div>

        </div>
    );
}

export default StoryArea;
