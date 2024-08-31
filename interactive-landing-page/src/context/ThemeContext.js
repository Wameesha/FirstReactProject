import React,  { useState, createContext, useEffect } from "react";
import './App.css';

export const ThemeContext = createContext();

export const ThemeProvider= ({children}) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);

    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    return ( 
        <ThemeContext.Provider value = {{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
     );
}
 
