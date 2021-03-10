import React, { useEffect, useState } from 'react';
import DetailsBody from '../DetailsBody/DetailsBody';
import DetailsFooter from '../DetailsFooter/DetailsFooter';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './TeamDetails.css';


const TeamDetails = () => {
  
    const teamId = 133601;
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[]);

    return (
        <div className='details-main'>
            <section className='details-header'>
                {
                team.map(team => <DetailsHeader key={team.idTeam} logo={team}></DetailsHeader> )
                }
            </section>

            <section className='details-body'>
                {
                    team.map(team => <DetailsBody key={team.idTeam} teamInfo={team} ></DetailsBody>)
                }
            </section>

            <section className='details-footer'>
                {
                    team.map(team => <DetailsFooter key={team.idTeam} socialMedia={team}></DetailsFooter>)
                } 
            </section>
        </div>
    );
};

export default TeamDetails;