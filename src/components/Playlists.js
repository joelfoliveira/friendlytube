
function Playlists({playlists, onPlaylistChange}) {

  if (playlists.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      {
        playlists.map((playlist, index) => (
            <button key={index} onClick={() => onPlaylistChange(index)}>{playlist.name}</button>
        ))
      }
    </div>
  );
}


export default Playlists;