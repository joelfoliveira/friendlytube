
function Videos({playlists, activePlaylist, onVideoChange}) {
  return (
    <div>
      {playlists[activePlaylist].videos.map((video, index) => (
          <button onClick={() => onVideoChange(index)}>{video.name}</button>
      ))}
    </div>
  );
}


export default Videos;