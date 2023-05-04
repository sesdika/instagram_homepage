import { useEffect, useState } from "react";
import React from 'react';
import pp_icon from "./photos/dika.jpg";

import axios from "axios";

function AvatarArea() {

    const [datasuggestion, setDatasuggestion] = useState([])
    useEffect(() => {
        axios.get("https://private-4838f9-sesdika.apiary-mock.com/suggestions")  
            .then(response => setDatasuggestion(response.data.record.data))
            .catch(err => console.log(err)) 
    }, []);

    return (
        <div>
            <div className="avatar-area-main-box">
                <img className="profile_photo_small" src={pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">sesdika</div>
                    <div style={{color: "#8e8e8e"}}>Sesdika Sansani</div>
                </div>
                <div className="profile-switch-and-follow-button">Switch</div>
            </div>

            <div style={{margin: "12px 0 12px", display: "flex"}}>
                <div style={{color: "#8e8e8e"}}>Suggestions for you</div>
                <div style={{marginLeft: "120px"}}>See All</div>
            </div>

            {datasuggestion.length?
                datasuggestion.map(suggestion =>
                    <div className="avatar-area-suggestions">
                        <img className="profile_photo_small" src={suggestion.from.profile_picture} alt="logo"/>
                        <div className="avatar-name">
                            <div id="linked-username">{suggestion.from.username}</div>
                            <div style={{color: "#8e8e8e"}}>{suggestion.from.full_name}</div>
                        </div>
                        <div className="profile-switch-and-follow-button">Follow</div>
                    </div>
                ) :
                <div></div>
            }

            <div className="all-gray">
                <div className="basic-link-help" style={{marginTop: "30px"}}>
                    <div><a href="frontend/src#">About</a></div>
                    <div>Help</div>
                    <div>Press</div>
                    <div>API</div>
                    <div>Jobs</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Locations</div>
                    <div>Language</div>
                </div>
                <div style={{marginTop: "30px"}}>© 2023 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

export default AvatarArea;