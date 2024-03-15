import React from 'react';
import '../content/content.css';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function content() {
  return (
    <div> 
      <div className="content">
        <div className="first-part">
          <h1>Join The TINTIN Family</h1>
          <p><FaQuoteLeft style={{ color: '#F57D1F' }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed magni eligendi atque architecto facere voluptatem pariatur error, minus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis provident neque porro iusto explicabo fugiat itaque excepturi quod doloremque. <FaQuoteRight style={{ color: '#F57D1F' }} /></p>
        </div>
        <div className="second-part">
          <h1>Why Partner in TINTIN</h1>
          <br />
          <div className="second-part-p">
            <p> <FaQuoteLeft style={{ color: '#F57D1F' }} /> <span>Process Success : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, recusandae!</p>
            <p><span>Process Success : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, recusandae!</p>
            <p><span>Process Success : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, recusandae!</p>
            <p><span>Process Success : </span>Lorem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, recusandae!</p>
            <p><span>Process Success : </span>Lorem, ipsum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, recusandae! <FaQuoteRight style={{ color: '#F57D1F' }} /></p>
          </div>
        </div>
        <br />
        <div className="third-part">
          <p><span>Lorem, ipsum.: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, voluptatum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, recusandae.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatum. Unde, maxime perferendis.</p>
        </div>
        <br />
        <div className="fourth-part">
          <h1>Why Choose a Partnership with Us</h1>
          <br />
          <div className="fourth-part-p">
            <p><FaQuoteLeft style={{ color: '#F57D1F' }} /> <span>Lorem, ipsum.: </span>Lorem ipsum dolor sit amet.</p>
            <p><span>Lorem, ipsum.: </span>Lorem ipsum dolor sit amet consectetur.</p>
            <p><span>Lorem, ipsum.: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laboriosam. <FaQuoteRight style={{ color: '#F57D1F' }} /></p>
          </div>
        </div>
      </div>
    </div>
  )
}
