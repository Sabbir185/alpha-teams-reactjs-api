import React from 'react';
import './Teams.css';

const Teams = (props) => {
    console.log(props.team);
    const {strTeam, strSport, strTeamBadge} = props.team;
    return (
        <div>
            <div className='team'>
                <img className='team-logo img-fluid' src={strTeamBadge} alt=""/>
                <div className='text-center mt-3'>
                    <h5>{strTeam}</h5>
                    <p>Sports type: {strSport}</p>
                    <button className="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Teams;