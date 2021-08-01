import React, {useState, useEffect} from "react";
import Button from '../../base-components/Button'

const TeamDisplay = () => {
    const [teams, setTeams] = useState(0);

    const handleClick = () => {
        setTeams({ team1: ['player 1', 'player 3'], team2: ['player 2']});
    };

    return (
    <div>
        <Button text="Create teams" onClick={()=>{console.log("button click"); handleClick();}}/>
        {teams && <div className="team-display">Teams calculated</div>}
    </div>
    );
  }
  
export default TeamDisplay;