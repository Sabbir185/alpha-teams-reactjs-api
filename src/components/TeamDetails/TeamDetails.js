import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsHeader from '../DetailsHeader/DetailsHeader';


const TeamDetails = () => {
    // const {teamId} = useParams();

    const teamId = 133604;
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[]);

    return (
        <div>
            {
               team.map(team => <DetailsHeader key={team.idTeam} logo={team}></DetailsHeader> )
            }
        </div>
    );
};

export default TeamDetails;