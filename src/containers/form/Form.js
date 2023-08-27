import React from 'react';
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <div>
        <div className="contact-form">
          <h2 className="form-title">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      
    </div>
  )
}

export default Form
