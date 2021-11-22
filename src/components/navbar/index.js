import React, { useState } from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';

//css
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#gpt3">What is GPT?</a></p>
        <p><a href="#openai">Open AI</a></p>
        <p><a href="#case">Case Studios</a></p>
        <p><a href="#library">Library</a></p>
    </>
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button"> Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {
                    toggle ? <RiCloseLine color="#fff" size={24} onClick={()=>setToggle(false)}/> :
                    <RiMenu3Line color="#fff" size={24} onClick={()=>setToggle(true)}/> 
                }
                {
                    toggle &&
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links"> 
                                <Menu/>
                            </div>
                            <div className="gpt3__navbar-menu_container-sign"> 
                                <p>Sign in</p>
                                <button type="button"> Sign up</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar;
