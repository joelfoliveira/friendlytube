
import YouTube, { YouTubeProps } from 'react-youtube';

function Player({playlists, activePlaylist, activeVideo}) {

  var videoId = playlists[activePlaylist].videos[activeVideo].video;

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      playsinline: 1,
      controls: 0,
      disablekb: 1
    },
  };

  return (
    <YouTube videoId={videoId} opts={opts} />
  );
}


export default Player;