import React, { useEffect, useState } from "react";
import "./Feed.css";
import EditIcon from "@mui/icons-material/Edit";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  Timestamp,
  onSnapshot,
  query,orderBy,
} from "firebase/firestore";

function Feed() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        name: "Ankit Vishwakarma",
        description: "Blockchain dev",
        message: message,
        photoUrl: "",
        created: Timestamp.now(),
      });
     await  setMessage(()=> '')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditIcon />
          <form action="submit">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} color="blue" title="Photos" />
          <InputOption Icon={YouTubeIcon} color="green" title="Video" />
          <InputOption Icon={EventIcon} color="Orange" title="Event" />
          <InputOption Icon={ArticleIcon} color="pink" title="Write Article" />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          name={post.data.name}
          description={post.data.description}
          message={post.data.message}
        />
      ))}

      {/* {posts.map((post) => {
        console.log(`post ${post.data.message}`);
      })}
       */}

      <Post
        name="Ankit Vishwakarma"
        description="blockchain dev"
        message="gm LFG"
      />
    </div>
  );
}



export default Feed;
