import React, {useState, useContext} from 'react';
import { PlayerStoreContext } from '../../utils/playerStore';
import RatingSlider from '../../base-components/RatingSlider';
import Button from '../../base-components/Button';
import './index.css';

const NewPlayerForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { players, dispatchEvent } = useContext(PlayerStoreContext);

    const [ name, setName ] = useState('');
    const [ attacking, setAttacking ] = useState('');
    const [ defending, setDefending ] = useState('');
    const [ passing, setPassing ] = useState('');
    const [ running, setRunning ] = useState('');
    const [ goalkeeping, setGoalkeeping ] = useState('');

    const addPlayer = () => {
        // TO-DO: Add validations (or disable button)
        const numberOfPlayers = players.length;
        const id = players[numberOfPlayers - 1].id + 1;
        const player = { id, name, attacking, defending, passing, running, goalkeeping};
        dispatchEvent('ADD_PLAYER', { newPlayer: player });
        resetState();
        toggleModal();
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const resetState = () => {
        setName('');
        setAttacking('');
        setDefending('');
        setPassing('');
        setRunning('');
        setGoalkeeping('');
    };

    return (
    <div>
        <Button text="Add player" onClick={()=>{toggleModal();}}/>
        {modalOpen && <div className="modal-container">
            <div className="new-player-form">
                <div className="new-player-form__close" onClick={()=>{toggleModal()}}>X</div>
                <div className="new-player-form__content">
                    <h2 className="new-player-form__heading">New Player</h2>
                    <div className="new-player-form__inputs">
                        <input className="new-player-form__input" type="text" min="0" max="10" value={name} onChange={e => {setName(e.target.value)}} placeholder="Player name"/>
                        <RatingSlider category="Attacking" value={attacking} onChange={e => {setAttacking(Number(e.target.value))}}/>
                        <RatingSlider category="Defending" value={defending} onChange={e => {setDefending(Number(e.target.value))}}/>
                        <RatingSlider category="Passing" value={passing} onChange={e => {setPassing(Number(e.target.value))}}/>
                        <RatingSlider category="Running" value={running} onChange={e => {setRunning(Number(e.target.value))}}/>
                        <RatingSlider category="Goal-keeping" value={goalkeeping} onChange={e => {setGoalkeeping(Number(e.target.value))}}/>
                    </div>
                    <Button className="new-player-form__submit" text="Add player" onClick={addPlayer}/>
                </div>
            </div>
        </div>
        }
    </div>
    );
  }
  
export default NewPlayerForm;

