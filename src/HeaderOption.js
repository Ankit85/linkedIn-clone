import { Avatar } from "@mui/material";
import React from "react";
import './HeaderOption.css';

function HeaderOption({avataar,Icon,title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption__icon'/>}
            {avataar && <Avatar className='headerOption__avataar' src={avataar}/>}
            
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )

}

export default HeaderOption