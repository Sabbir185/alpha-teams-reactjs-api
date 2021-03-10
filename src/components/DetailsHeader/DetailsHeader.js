import React from 'react';
import './DetailsHeader.css';

const DetailsHeader = (props) => {
    
    const {strTeamBadge} = props.logo;
    
    return (
        <div className='logo-bg'>
            <img className='details-logo img-fluid' src={strTeamBadge} alt=""/>
        </div>
    );
};

export default DetailsHeader;