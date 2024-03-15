import React from 'react';
import '../form/form.css';

export default function form() {
  return (
    <div className='container'>
      <div className="contact-form">
        <div className="form m-5">
            <h3>Inquire Now</h3>
            <div className="form-elements">
                <label htmlFor="">Full name</label>
                <input type="text" />
                <label htmlFor="">Email Address</label>
                <input type="email" />
                <label htmlFor="">Phone Number</label>
                <input type="text" />
                <label htmlFor="">Type of Enquiery</label>
                <input type="text" />
                <label htmlFor="">Phone Number</label>
                <textarea cols="30" rows="2"></textarea>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}
