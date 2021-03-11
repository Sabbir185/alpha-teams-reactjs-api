import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Teams.css';
import { useHistory } from 'react-router';

const Teams = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.team;

    const history = useHistory();
    const btnClickHandler = (teamId) =>{
        const url = `/team/${teamId}`;
        history.push(url);
    }

    return (
        <div>
            <div className='team'>
                <img className='team-logo img-fluid' src={strTeamBadge} alt=""/>
                <div className='text-center mt-3'>
                    <h5>{strTeam}</h5>
                    <p>Sports type: {strSport}</p>
                    <p>ID : {idTeam}</p>

                    <button className="btn btn-primary" onClick={()=> btnClickHandler(idTeam)}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Teams;