import React, { useState } from "react";
import '../context/App.css'

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [errors, setErrors] = useState ({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        if(!formData.name) errors.name = 'Name is required';
        if(!formData.email) errors.email = 'Email is required';
        else if (!formData.email) errors.email = 'Email is invalid';
        if(!formData.message) errors.message = 'Message is required';
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);
        if(Object.keys(errors).length === 0){
            setSuccessMessage('Form submitted successfully');
            alert("Thanks contact for us..!");
        }
    }
    return ( 
        
        <div className="a">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={formData.name} 
                    onChangeCapture={(e) => setFormData({...formData, name: e.target.value})} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={formData.email} 
                    onChangeCapture={(e) => setFormData({...formData, email: e.target.value})} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Message:</label>
                    <input type="text" value={formData.message} 
                    onChangeCapture={(e) => setFormData({...formData, message: e.target.value})} />
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button type="submit">Submit</button>
                {successMessage && <p>{successMessage}</p>}
            </form>
            <hr />
                <div className="contact-details">
                    <h2>Contact Information</h2>
                    <p><img src="/contactus1.png" alt="Contact Us 1" />Phone: 037-2061114</p>
                    <p><img src="/contactus2.png" alt="Contact Us 2" />Address: "Cake On Cake" House, Kurunegala.</p>
            </div>
            </div>

     );
}
 
export default ContactUs;