import React, {useState, useEffect} from "react";
import Button from '../../base-components/Button'
import './index.css';

const NewPlayerForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
    <div>
        <Button text="Add player" onClick={()=>{toggleModal();}}/>
        {modalOpen && <div className="modal-container">
            <div className="new-player-form">
                <div className="new-player-form__content">
                    <div className="new-player-form__close" onClick={()=>{toggleModal()}}>X</div>
                </div>
            </div>
        </div>
        }
    </div>
    );
  }
  
export default NewPlayerForm;