import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1649092905~hmac=80330bbe06f51566875c64a031b4b578' alt='Icon' />
                <div className="header__search">
                    <SearchIcon/>
                    <input type='text' />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={SupervisorAccountIcon} title='Home'/>
                <HeaderOption Icon={HomeIcon} title='MyNetwork'/>
                <HeaderOption Icon={WorkIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsActiveIcon} title='Notifications'/>
                <HeaderOption avataar="https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1649099659~hmac=36c8e9cce982813e613cc828668e30fb" title='Me'/>
                

            </div>

        </div>
    )
}

export default Header