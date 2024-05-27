
function Playlists({playlists, onPlaylistChange}) {
  return (
    <div>
      {playlists.map((playlist, index) => (
          <button onClick={() => onPlaylistChange(index)}>{playlist.name}</button>
      ))}
    </div>
  );
}


export default Playlists;