import "./App.css";
import Navbar from "./components/nav/Navbar";
import AllVideos from "./components/allVideos/AllVideo";
import useSearch from "./services/hooks/UseSearch";
import { useEffect, useState } from "react";

function App() {
  const [inputs,setInputs] = useState();
  const {videos,getVideos,loading} = useSearch(inputs);

  const searchVideo = (e) =>{
    setInputs(e.target.value);
    getVideos(e.target.value)
  }

  useEffect(()=>{
    console.log(inputs)
  },[inputs])
  return (
    <div className="App">
      <Navbar _onSearch={(e)=> searchVideo(e)} />
      <AllVideos _videos={videos} _isLoading={loading} />
    </div>
  );
}

export default App;
