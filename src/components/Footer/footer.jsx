import React from 'react';
import '../Footer/footer.css';
import { BsBadge8K } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";
import Img from '../../assets/c3.jpg';

export default function footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-text">
                        <h3>Blend work and play</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis.</p>
                        <h6><span><BsBadge8K style={{color:'orange', width:'25px', height:'25px'}}/></span>Co-working</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia eius atque odit nam accusantium quis vel facere quidem modi.</p>
                        <h6><span><FiCoffee style={{color:'orange', width:'25px', height:'25px'}}/></span>Board games league</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ex ad qui pariatur consequatur possimus maxime mollitia dolorem voluptatem! Assumenda.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-img">
                        <img src={Img} alt="Footer Image"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
