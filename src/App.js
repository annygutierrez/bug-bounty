import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserImage from './assets/images/user.svg';
import InsectImage from './assets/images/insect.svg';
import store from './utils/store';

function App() {
  const storeClass = new store();
  const [playersList, setPlayers] = useState([]);

  const getValue = async () => {
    const value = await storeClass.getValue();
    const players = value.map(player => ({ name: player[0], coins: player[1], bugs: player[2], id: player[3] }));
    const sortPlayers = players.sort((a, b) => parseFloat(b.coins) - parseFloat(a.coins));
    const addRank = sortPlayers.map((item, i) => ({ rank: i + 1, ...item }));
    console.log('lista de jugadores', addRank);
    setPlayers(addRank);
  }

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
        <span className="App-B">B</span>ug<span className="App-B">B</span>ounty All Time Leader<span className="App-B">b</span>oard
        </p>
      </header>
      <main className="App-main">
        {
          playersList.map(player => (
            <div key={player.id} className="App-box">
               <div className="App-player-icon">
                 <img src={UserImage} className="App-icon-person" />
               </div>
               <div className="App-main-data">
                 <p className="App-player-name">{player.name}</p>
                 <p className="App-player-coins">{player.coins} coin(s)</p>
                 <p className="App-player-rank">{player.rank} rank</p>
               </div>
               <div className="App-player-bugs">
                 <p className="App-bugs">{player.bugs}</p>
                 <p className="App-reports"><img src={InsectImage} className="App-icon-bug" />reported</p>
               </div>
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;
