import React from "react";
import { NavLink } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import '../context/App.css'

const History = () => <div><section className="about-section">
                        <h2>Our History</h2>
                        <div className="about-content">
                        <img src="/history-image.jpg" alt="Our History" className="about-image" />
                        <img src="/history-image1.jpg" alt="Our History" className="about-image" />
                        <img src="/history-image2.jpg" alt="Our History" className="about-image" />
                            <p>Founded in 2018, Cake on Cake began with a simple passion for creating delicious and beautiful cakes that bring joy to every celebration. From birthday cakes to wedding cakes, and everything in between, we have been dedicated to crafting the perfect cake for any occasion.
                               Our journey started with a small kitchen and a big dream. Over the years, we have grown and evolved, constantly experimenting with new flavors and designs to delight our customers. Our signature chocolate cakes quickly became a favorite, and our custom wedding cakes have graced many memorable ceremonies.
                               What sets Cake on Cake apart is our commitment to quality and creativity. Each cake is made with the finest ingredients and a lot of love, ensuring that every bite is a moment to savor. We take pride in our attention to detail, from the intricate designs to the delicious flavors.
                               Thank you for being a part of our story. We look forward to making your celebrations even sweeter with our cakes.</p>
    
                        </div>
                      </section></div>;

const Team = () => <div>
                    <section className="about-section">
                    <h2>Our Team</h2>
                    <div className="about-content">

                            <div className="team-container">
                            <div className="team-member">
                            <img src="/team-member1.jpg" alt="Team Member 1" className="team-image" />
                            <h3>Jenny</h3>
                            <p>Founder & Head Baker</p>
                            </div>

                            <div className="team-member">
                            <img src="/team-member2.jpg" alt="Team Member 2" className="team-image" />
                            <h3>Mery</h3>
                            <p> Cake Decorator</p>
                            </div>

                            <div className="team-member">
                            <img src="/team-member3.jpg" alt="Team Member 3" className="team-image" />
                            <h3>Kevin</h3>
                            <p>Delivery Coordinator</p>
                            </div>

                        </div>
                        </div>
                    </section>
                 </div>;

const Values = () => <div>
                        <section className="about-section">
                        <h2>Our Values</h2>
                        <div className="about-content">
                        <img src="/values-image1.jpg" alt="Our Values" className="about-image" />
                        <img src="/values-image3.jpg" alt="Our Values" className="about-image" />
                        <img src="/values-image2.jpg" alt="Our Values" className="about-image" />
                    <p>
                    At Cake on Cake, our values guide everything we do:
                    <ul className="list">
                    <li>Quality: We use only the finest ingredients and strive for excellence in every cake we create.</li>
                    <li>Creativity: We love experimenting with flavors and designs to bring you unique and delicious cakes.</li>
                    <li>Customer Happiness: Your satisfaction is our priority. We aim to make every celebration special with our cakes and exceptional service.</li>
                    <li>Community: We are proud to be part of your celebrations and the local community, supporting events and causes that matter.</li>
                    </ul>
                    </p>
                    </div>
                    </section>
                    </div>;

const About = () => {
    return ( 
        <div className="about-container">
            <h1>About Us</h1>
            <nav>
                <NavLink to="history">History</NavLink>
                <NavLink to="team">Team</NavLink>
                <NavLink to = "values">Values</NavLink>
            </nav>

             <Routes>
                <Route path="history" element={<History/>}/>
                <Route path="team" element={<Team/>}/>
                <Route path="values" element={<Values/>}/>
             </Routes>

            <hr />
            <img src="/about1.jpeg" alt="" className="about-image" />
            <img src="/about2.jpeg" alt="" className="about-image" />
            <img src="/about3.jpeg" alt="" className="about-image" />
            <hr />
        </div>
     );
}
 
export default About;