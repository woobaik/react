import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Bohemian Rapsody', duration: '7:45'},
    {title: 'Killer Queen', duration: '3:14' },
    {title: 'I Was Born to Love You', duration: '4:01' },
    {title: 'Don\`t Stop Me Now', duration: '4:42' },
    {title: 'Under Pressure', duration: '3:55' },
    {title: 'Radio Gaga', duration: '5:42'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
})
