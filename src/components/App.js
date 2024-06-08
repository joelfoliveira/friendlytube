import { useEffect, useState } from 'react';
import axios from "axios";

import Header from './Header';
import Playlists from './Playlists';
import Videos from './Videos';
import Player from './Player';

function App() {

  const [activePlaylist, setActivePlaylist] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("playlists.json").then((data) => {
      setPlaylists(data.data);      
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Playlists playlists={playlists} onPlaylistChange={setActivePlaylist} />
      <Videos playlists={playlists} activePlaylist={activePlaylist} onVideoChange={setActiveVideo} />
      <Player playlists={playlists} activePlaylist={activePlaylist} activeVideo={activeVideo} />
    </div>
  );
}

export default App;