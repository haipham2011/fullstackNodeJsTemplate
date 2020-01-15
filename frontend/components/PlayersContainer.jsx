import React from 'react';
import { addPlayer, sortPlayer } from "../redux/actions/actions";
import { useDispatch } from "react-redux";


function PlayersContainer(props) {
  const { bandState, players, sort} = props;
  const dispatch = useDispatch();

  const renderButton = () => {
    if(bandState === "submit"){
        return(
            <div>
                <button className="btn btn-primary float-right" onClick={() => {dispatch(addPlayer());}}>Add player</button>
            </div>
        );
    }
    else {
        return null;
    }
    
  }

  const renderPlayers = () => {

    let playerTags = players.map((player, index) => {
      return(
        
        <tr key={index}>
            <td >{player['name']}</td>
            <td>{player['score']}</td>        
        </tr>
      );
    });

    return playerTags;
  }

  const handleSelect = e => {
    let { value } = e.target
    dispatch(sortPlayer(value));
  }
  
  return(
    <div className="container fade-in-container">
      <div className="form-group">
        <select className="form-control" value={sort} onChange={handleSelect}>
            <option value="asc">Acsending</option>
            <option value="desc">Decending</option>
        </select>
    </div>
      <table className="table table-hover table-bordered">
        <thead className="table-head">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {renderPlayers()}
        </tbody>
      </table>
      {renderButton()}
    </div>
  )

}

export default PlayersContainer;