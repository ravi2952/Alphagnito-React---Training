import React from 'react';
import '../LastComponent/last.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

export default function last() {
    return (
        <div>
            <div className="last-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="last-content-text">
                                <h5>ABOUT</h5>
                                <p>What is NEOM</p>
                                <p>NEOM leadership team</p>
                                <p>CSR Initiatives</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="last-content-text">
                                <h5>LINKS</h5>
                                <p>Gulf of Aqaba</p>
                                <p>Sindalah</p>
                                <p>Oxagon</p>
                                <p>This line</p>
                                <p>Trojena</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className='last-content-text'>
                                <h5>SOCIAL MEDIAS</h5>
                                <p>News</p>
                                <p>Media Gallery</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className='last-content-text'>
                                <h5>LINKS</h5>
                                <p>Gulf of Aqaba</p>
                                <p>Sindalah</p>
                                <p>Oxagon</p>
                                <p>The line</p>
                                <p>Trojena</p>
                            </div>
                        </div>
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="last-content-flex">
                        <div className="last-content-h5">
                        <h5>FOLLOW TIN TIN ON SOCIAL MEDIAS</h5>
                        </div>
                        <div className="last-content-icons">
                        <FaSquareFacebook style={{color: 'yellow', width: '50px' , height: '30px', marginRight: '5px' }} />
                        <FaSquareTwitter style={{color: 'yellow', width: '50px' , height: '30px',  marginRight: '5px'}} />
                        <FaSquareInstagram style={{color: 'yellow', width: '50px' , height: '30px',  marginRight: '5px'}} />
                        <FaGoogle style={{color: 'yellow', width: '50px' , height: '30px',  marginRight: '5px'}} />
                        <FaLinkedin style={{color: 'yellow', width: '50px' , height: '30px',  marginRight: '5px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

