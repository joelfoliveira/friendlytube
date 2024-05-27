import { useState } from 'react';

import Header from './Header';
import Playlists from './Playlists';
import Videos from './Videos';
import Player from './Player';

function App() {

  const [activePlaylist, setActivePlaylist] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);

  const playlists = 
  [
    {
        name: "Dança",
        icon: "",
        videos: [
            {
                name: "video 1",
                thumbnail: "",
                video: "QBK6xymmKHM"
            },
            {
                name: "video 2",
                thumbnail: "",
                video: "8AHCfZTRGiI"
            }
        ]
    },
    {
        name: "Música",
        icon: "",
        videos: [
            {              
                name: "video 3",
                thumbnail: "",
                video: "GilzbcZOcHU"
            },
            {
              
                name: "video 4",
                thumbnail: "",
                video: "NWU33fvPxd0"
            }
        ]
    }
  ];

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