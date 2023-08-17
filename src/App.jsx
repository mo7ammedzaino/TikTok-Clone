import "./css/App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <h1>القدس عاصمة فلسطين الأبدية</h1>
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
