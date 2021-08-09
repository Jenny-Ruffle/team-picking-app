/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import initialPlayers from '../mock/players.json';

export const PlayerStoreContext = React.createContext(null)

export default ({ children }) => {
    const [players, setPlayers] = React.useState(initialPlayers.players)

    const dispatchEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_PLAYER':
				setPlayers([ ...players, payload.newPlayer ]);
				return;
			case 'REMOVE_PLAYER':
				setPlayers(players.filter(player => player.id !== payload.id));
				return;
			default:
				return;
		}
	};

    const store = {
        players,
        dispatchEvent
    }
  
    return <PlayerStoreContext.Provider value={store}>{children}</PlayerStoreContext.Provider>
  }