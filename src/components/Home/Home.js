import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams) )
    },[])
    
    return (
        <div className="home">
            <div className='header-style'>
                <Header></Header>
            </div>
            <div className='container card-team'>
                {
                    teams.map(team =>  <Teams key={team.idTeam} team={team}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;