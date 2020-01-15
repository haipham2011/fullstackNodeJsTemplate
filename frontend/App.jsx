import React from 'react';
import { useSelector } from "react-redux";
import PlayersContainer from './components/PlayersContainer';
import PlayersForm from './components/PlayersForm';


function App() {
  const { bandState, players, sort } = useSelector(state => state.appReducer || {});
  
  return (
    <div >
      <img className="fade-in-icon" alt="The Game Awards" src="https://shop.westerndigital.com/content/dam/store/en-us/assets/products/merchandising/wd-black-sn750-nvme-ssd-the-game-awards/gallery/the-game-awards.png.thumb.1280.1280.png" />
      <PlayersContainer players={players} sort={sort} bandState={bandState}/>
      <PlayersForm bandState={bandState}/>
    </div>
  );
}

export default App;
