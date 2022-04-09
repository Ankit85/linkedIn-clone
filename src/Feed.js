import React from "react";
import "./Feed.css";
import EditIcon from '@mui/icons-material/Edit';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditIcon />
          <form action="submit">

            <input type='text' />
            <button type="submit">Send</button>


          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} color='blue' title='Photos'/>
          <InputOption Icon={YouTubeIcon} color='green' title='Video'/>
          <InputOption Icon={EventIcon} color='Orange' title='Event'/>
          <InputOption Icon={ArticleIcon} color='pink' title='Write Article'/>
        
        </div>
      </div>

    </div>
  );
}


export default Feed;