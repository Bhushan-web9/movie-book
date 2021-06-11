import React, { Component } from 'react'
import "./Header.css"
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';
import {useLocation} from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation();
    return (
            <>
              <div className="header">
                  <div className="header-left">
                  <img className="headerLogoImg" src={logo} 
                  alt="logo" 
                  />
                  </div>
                  
                  {pathname === "/details" &&
                  <div className="header-right">
                  <Button variant="contained" color="primary">
                        BOOK SHOW
                  </Button>
                  </div>
                  }

              </div>
            </>
    )
}

export default Header
