import React from 'react';
import './Header.css';
import Marquee from 'react-fast-marquee';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Header() {
    return (
        <div>
            <div class="text-animation">
                <div class="text">
                    <Marquee direction='left' speed={100} >
                    <h1 style={{fontWeight: '400', letterSpacing: '5px', wordSpacing: '5px'}}>
                        WHERE - ENJOYMENT IS AN ADVENTURE WELCOME TO TINTIN</h1>
                    </Marquee>
                </div>
            </div>
            <div className="container Header-text">
                <h2>Discover the Ultimate Family Fun Experience</h2>
                <p><FaQuoteLeft style={{color: '#F57D1F'}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus architecto iure totam? Sunt saepe, ducimus excepturi facilis eum deserunt praesentium repellendus cupiditate. Error doloribus eius est velit et accusamus doloremque itaque voluptatum atque ipsam enim similique earum quasi repudiandae eveniet veritatis at asperiores obcaecati sequi, nostrum sit consequatur. Fugiat? <FaQuoteRight style={{color: '#F57D1F'}}/></p>
            </div>
        </div>
    )
}
