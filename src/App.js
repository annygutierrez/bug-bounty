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
    console.log("Message received: ", value);
    setNewValue(value);
  }

  const setValue = async (e) => {
    e.preventDefault();
    const receipt = await storeClass.setValue(addressFrom, privKey)
    console.log(receipt);
  }

  useEffect(() => {
    setPlayers([
      {
        name: 'Luis Leopardi',
        coins: 1563,
        rank: 1,
        bugs: 11003
      },
      {
        name: 'Camilo Henao',
        coins: 902,
        rank: 2,
        bugs: 9000
      }
    ]);
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
               <div class="App-player-icon">
                 <img src={UserImage} className="App-icon-person" />
               </div>
               <div class="App-main-data">
                 <p className="App-player-name">{player.name}</p>
                 <p className="App-player-coins">{player.coins} coin(s)</p>
                 <p className="App-player-rank">{player.rank} rank</p>
               </div>
               <div class="App-player-bugs">
                 <p className="App-bugs">{player.bugs}</p>
                 <p className="App-reports"><img src={InsectImage} className="App-icon-bug" />reported</p>
               </div>
            </div>
          ))
        }
      </main>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 70 }}>
        <p style={{ fontWeight: '600', fontSize: 20, lineHeight: 0 }}>Get value</p>
        <p style={{ lineHeight: 0 }}>Gets a value from a smart contract state</p>

        <div style={{ marginTop: 25 }}>
          <button onClick={getValue} type="submit" className="loginButton btn btn-lg col-md-6 col-md-offset-3 col-xs-12" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 15, paddingRight: 15, borderRadius: 12 }}>Get Value</button>
        </div>
        <p style={{ fontSize: 30, fontWeight: '600' }}>{newValue}</p>
      </div>
      <form className="row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 70, paddingBottom: 50 }}>
        <div className="form-group" style={{ position: 'relative' }}>
          <input onChange={(e) => setAddressFrom(e.target.value)} placeholder=" " id="username" className="form-control" name="username" />
          <div className="floater"></div>
        </div>

        <div className="form-group" style={{ position: 'relative', marginTop: 30 }}>
          <input onChange={(e) => setPrivKey(e.target.value)} placeholder=" " id="password" className="form-control" name="password" />
          <div className="floater"></div>
        </div>

        <div style={{ marginTop: 40 }}>
          <button onClick={setValue} className="loginButton btn btn-lg col-md-6 col-md-offset-3 col-xs-12" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 15, paddingRight: 15, borderRadius: 12 }}>Set value in blockchain</button>
        </div>
      </form>
    </div>
  );
}

export default App;
