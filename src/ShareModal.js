import React, {useState} from 'react';
import Modal from 'react-modal';
import send_icon from "./photos/send.png"

import {Link} from "react-router-dom";

function ShareModal (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor       : '#F0AA89'      
        }
    };

    return (
        <div>
            <Link onClick={setModalIsOpenToTrue}><img src={send_icon} width="24px"/></Link>

            <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} className={customStyles}>
                <div className="message-page-send-message-box-container">
                    <div className="message-page-send-message-box-upper-area">
                        <Link onClick={setModalIsOpenToFalse} ><svg className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="18"
                                  role="img" viewBox="0 0 24 24" width="18">
                           <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor"
                                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
                           <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                        </svg></Link>
                        <div style={{margin:"0 auto"}}>Share</div>
                    </div>
                    <div className="message-page-send-message-box-search-area">
                        <div>To:</div>
                        <input style={{marginLeft:"30px", border:0, outline:0}} type="text" autoComplete="off" placeholder="Search..." spellCheck={false}/>
                    </div>
                    <div style={{}} className="message-page-send-message-box-result-area">
                        <div style={{fontWeight:"bold",margin:"16px"}}>Suggested</div>

                        <div>
                            <div style={{color:"#8E8E8E",margin:"10px",height:"30px"}}>No account found.</div>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    );
}
export default ShareModal;
