import { Avatar } from "@mui/material";
import React, {useState} from "react";
import InputOption from "./InputOption";
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';

function Post({name,description,message,photoUrl}) {
    
    
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <button>+ Follow</button>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} color ='gray' title='Like'/>
                
                <InputOption Icon={ChatIcon} color ='gray' title='Comment'/>
                
                <InputOption Icon={IosShareIcon} color ='gray' title='Share'/>
                
                <InputOption Icon={SendIcon} color ='gray' title='Send'/>

            </div>

        </div>
    )
}

export default Post