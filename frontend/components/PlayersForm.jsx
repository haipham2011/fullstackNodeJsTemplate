import React, { useState } from 'react';
import { submitPlayer } from "../redux/actions/actions";
import { useDispatch } from "react-redux";


function PlayersForm (props) {
    const dispatch = useDispatch();
    const [player, setPlayer] = useState({ name: "", score: ""});

    const submitForm = () => {
      dispatch(submitPlayer(player));
      setPlayer({
        name: "",
        score: 0
      });
    }

    const handlePlayerChange = (e) => {
      let { value, name } = e.target;

      if (name === "score"){
        setPlayer({
            ...player,
            [name]: parseInt(value)
        })
      }
      else {
        setPlayer({
            ...player,
            [name]: value
          })
      }
      
    }

    if (props.bandState === "adding"){
      return(
        <div className="container fade-in-container">
          <div className="card">
            <h5 className="card-header">Players form</h5>
            <div className="card-body">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="playerName">Player</label>
                  <input type="text" className="form-control" id="playerName"  placeholder="Enter player" value={player['name']} name="name" onChange={handlePlayerChange}/>
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="playerScore">Score</label>
                  <input type="number" className="form-control" id="playerScore"  placeholder="Enter score" value={player['score']} name="score" onChange={handlePlayerChange}/>
                </div>
              </div>
                  <button className="btn btn-primary float-right" onClick={submitForm}>Submit player</button>
            </div>
          </div>
  
        </div>
          
      );
    }
    else {
      return null;
    }
    
}

export default PlayersForm;