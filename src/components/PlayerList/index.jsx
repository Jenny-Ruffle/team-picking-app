import React, {useState, useEffect} from "react";
import Button from '../../base-components/Button'
import './index.css';

const PlayerList = ({savedPlayers}) => {
    const columnNames = ['Select', 'Player', 'Attacking', 'Defending', 'Passing', 'Running', 'Goalkeeping', 'Average']
    return (
        <div className="players-table__container">
            <div className="players-table">
                <div className="players-table__categories">
                    {columnNames.map((columnName, index) => <h2 className="players-table__category-heading" key={index}>{columnName}</h2>)}
                </div>
                {savedPlayers.map((player, index) => {
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
                            <Button text="Remove" className="players-table__delete" onClick={()=>{console.log("button click")}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
  }
  
export default PlayerList;