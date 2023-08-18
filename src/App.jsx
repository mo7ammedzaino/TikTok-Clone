import "./css/App.css";
import Video from "./components/Video";
import { useEffect, useState } from "react";
import { videosRef } from "./firebase";
import { getDocs } from "firebase/firestore";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getDocs(videosRef)
      .then((res) => {
        const docs = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(docs);
      })
      .catch((err) => {
        console.log("ERR:", err);
      });
  }, []);

  return (
    <div className="app">
      <h1>القدس عاصمة فلسطين الأبدية</h1>
      <div className="app__videos">
        {videos.map(
          ({
            id,
            videoUrl,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={id}
              videoUrl={videoUrl}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
