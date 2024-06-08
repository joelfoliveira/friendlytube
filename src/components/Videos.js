
function Videos({playlists, activePlaylist, onVideoChange}) {

  if (playlists.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      {playlists[activePlaylist].videos.map((video, index) => (
          <button key={index} onClick={() => onVideoChange(index)}>{video.name}</button>
      ))}
    </div>
  );
}


export default Videos;