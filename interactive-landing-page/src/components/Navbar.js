import { AppBar,Typography, IconButton,Toolbar,Button } from '@mui/material';
import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import '../context/App.css';

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return ( 
        <AppBar position='static' className={`navbar ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: 'left'}}>
                <img src="/cupcake_1526969.png" alt="my icon" width="40" height= "40"/>
                Cake On Cake
                </Typography>
                <Button colour="inherit" component={NavLink} to= "/">
                 Home
                </Button>
                <Button colour="inherit" component={NavLink} to= "/about">
                 About
                </Button>
                <Button colour="inherit" component={NavLink} to= "/contact-us">
                 Contact Us
                </Button>
                <IconButton
                    edge = "end"
                    color="inherit"
                    arial-lebel="mode"
                    onClick={toggleTheme}>
                    
                    {theme === 'light' ? <Brightness4Icon/> : <Brightness7Icon/>}

                    </IconButton>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;