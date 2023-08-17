import { useRef, useState } from "react";
import "../css/Video.css";
import VideoFooter from "./VideoFooter";
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src="assets/reels.mp4"
      ></video>
      <VideoFooter />
      {/* {VideoFooter}
      {VideoSidebar} */}
    </div>
  );
}

export default Video;
