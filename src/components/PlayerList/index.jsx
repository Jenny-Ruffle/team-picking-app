import React from 'react';
import { PlayerStoreContext } from '../../utils/playerStore';
import PlayerRow from './PlayerRow';
import './index.css';

const PlayerList = () => {
    const { players } = React.useContext(PlayerStoreContext)
    const columnNames = ['Select', 'Player', 'Attacking', 'Defending', 'Passing', 'Running', 'Goalkeeping', 'Average']
    // TO-DO: Add selected players state
    return (
        <div className="players-table__container">
            <div className="players-table">
                <div className="players-table__categories">
                    {columnNames.map((columnName, index) => <h2 className="players-table__category-heading" key={index}>{columnName}</h2>)}
                </div>
                {players.map((player, index) => {
                    return(
                        <PlayerRow player={player} key={index} index={index} />
                    )
                })}
            </div>
        </div>
    );
  }
  
export default PlayerList;