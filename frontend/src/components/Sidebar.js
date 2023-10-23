import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

        {
            path: "/",
            name: "Gender-wise",

        },
        {
            path: "/string",
            name: "Age-wise",

        },
        {
            path: "/string",
            name: "Topic-wise",

        },
        {
            path: "/string",
            name: "Speaker-wise ",

        },
        {
            path: "/string",
            name: "Marital status-wise",

        },
        {
            path: "/string",
            name: "Latest posts-wise",

        }
       
    ]
    return (
        <div className="side-container">
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h3 style={{ display: isOpen ? "block" : "none" }} className="side-bar-logo">Filters</h3>
                    <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};


export default Sidebar;