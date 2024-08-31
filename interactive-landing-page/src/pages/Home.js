import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import '../context/App.css'
import CakeList from "../components/cakelist";

const Home = () => {
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome to our website!');
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        const element = document.getElementById('animate');
        if (element){
            element.classList.remove('animate');
            void element.offsetWidth;
            element.classList.add('animate');
        }

        return () => clearInterval(interval);
    });

    useEffect(() => {
        const timeOfDay = new Date().getHours();
        if(timeOfDay < 12){
            setWelcomeMessage('Good Marning! Welcome to our website!');
        }else if(timeOfDay < 18){
            setWelcomeMessage('Good Afternoon! Welcome to our website!')
        }else{
            setWelcomeMessage('Good Evening! Welcome to our website!')
        }
        document.title = welcomeMessage;
    }, [welcomeMessage]);

    return ( 
        <div className="home">
            <h1>Cake On Cake</h1>
            <h2 id="animate" className="animate">{welcomeMessage}</h2>
            <div className="clock">
            <h3>Current Time:</h3>
            <p>{time.toLocaleTimeString()}</p>
            <div className="section">
                <div className="content">
                    <h2>Indulge in unforgettable moments with Cake on Cake, where every slice tells a story of passion, creativity, and delicious perfection.</h2>
                    <Button className="button">
                        Find More
                    </Button>
                </div>
            </div>
        </div>
        <CakeList/>
        </div>
     );
};
 
export default Home;
