import { Avatar } from "@mui/material";
import React from "react";
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p >{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Avatar className="sidebar__avataar" />
                <h2>Ankit Vishwakarma</h2>
                <h4>Blockchain Developer</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">269</p>
                </div>
                <div className="sidebar__stat">
                    <p>viewed on post</p>
                    <p className="sidebar__statNumber">259</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Javascript')}
                {recentItem('Blockchain')}
                {recentItem('Solidity')}
                {recentItem('Metaverse')}
                {recentItem('React')}
            </div>
        </div>
    )
}

export default Sidebar;