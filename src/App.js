import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserImage from './assets/images/user.svg';
import InsectImage from './assets/images/insect.svg';
import store from './utils/store';

function App() {
  const [storeClass, setStore] = useState(new store());
  const [privKey, setPrivKey] = useState('');
  const [addressFrom, setAddressFrom] = useState('');
  const [newValue, setNewValue] = useState('');
  const [playersList, setPlayers] = useState([]);

  const getValue = async () => {
    const value = await storeClass.getValue();
    const add = await storeClass.addPlayer();
    console.log('add', add);
    console.log("Message received: ", value);
    const playersArr = value.map(player => ({ name: player[0], coins: player[1], rank: player[3], bugs: player[2] }))
    setPlayers(playersArr);
    // setNewValue(value);
  }

  // const setValue = async (e) => {
  //   e.preventDefault();
  //   const receipt = await storeClass.setValue(addressFrom, privKey)
  //   console.log(receipt);
  // }

  useEffect(() => {
    getValue();
    // setPlayers([
    //   {
    //     name: 'Luis Leopardi',
    //     coins: 1563,
    //     rank: 1,
    //     bugs: 11003
    //   },
    //   {
    //     name: 'Camilo Henao',
    //     coins: 902,
    //     rank: 2,
    //     bugs: 9000
    //   }
    // ]);
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
            <div className="App-box">
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
