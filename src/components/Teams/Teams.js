import React from 'react';
import './Teams.css';

const Teams = (props) => {
    console.log(props.team);
    const {strTeam, strSport, strTeamBadge} = props.team;
    return (
        <div>
            <div className='team'>
                <img className='team-logo' src={strTeamBadge} alt=""/>
                <h5>{strTeam}</h5>
                <p>Sports type: {strSport}</p>
                <button>Explore</button>
            </div>
        </div>
    );
};

export default Teams;