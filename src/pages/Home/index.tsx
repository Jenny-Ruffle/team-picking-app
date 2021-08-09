import React from 'react';
import './App.css';
import NewPlayerForm from '../../components/NewPlayerForm/index.jsx';
import PlayerList from '../../components/PlayerList/index.jsx';
import TeamDisplay from '../../components/TeamDisplay/index.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="heading">
          Team picking app
        </h2>
      </header>
      <div className="App-content">
        <PlayerList/>
        <div className="button-container">
          <NewPlayerForm/>
          <TeamDisplay/>
        </div>
      </div>
    </div>
  );
}

export default App;
