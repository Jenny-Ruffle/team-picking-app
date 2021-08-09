import React from "react";
import { PlayerStoreContext } from '../../utils/playerStore';
import Button from '../../base-components/Button';
import './index.css';

const PlayerRow = ({ player, index }) => {
    const { dispatchEvent } = React.useContext(PlayerStoreContext)
    const removePlayer = () => {
        dispatchEvent('REMOVE_PLAYER', {id: player.id});
    }
    console.log(player)
    const playerAverage = (player.attacking + player.defending + player.passing + player.running + player.goalkeeping)/5;

    return(
        <div key={index} className="players-table__row">
            <input className="players-table__checkbox" type="checkbox" id={player.name} name={player.name} value={index}></input>
            <p className="players-table__row-value">{player.name}</p>
            <p className="players-table__row-value">{player.attacking}</p>
            <p className="players-table__row-value">{player.defending}</p>
            <p className="players-table__row-value">{player.passing}</p>
            <p className="players-table__row-value">{player.running}</p>
            <p className="players-table__row-value">{player.goalkeeping}</p>
            <p className="players-table__row-value">{playerAverage}</p>
            <Button text="Remove" className="players-table__delete" onClick={removePlayer}/>
        </div>
    );
  }
  
export default PlayerRow;