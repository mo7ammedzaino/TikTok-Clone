import { FavoriteBorder, Chat, Share, Favorite } from "@mui/icons-material";
import "../css/videoSidebar.css";
import { useState } from "react";

function VideoSidebar({ likes, shares, messages }) {
  const [isLiked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {isLiked ? (
          <Favorite fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{isLiked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Chat />
        <p>{shares}</p>
      </div>
      <div className="videoSidebar__button">
        <Share />
        <p>{messages}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
