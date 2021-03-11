import React from 'react';
import './DetailsHeader.css';

const DetailsHeader = (props) => {
    
    const {strTeamBadge, strTeamBanner} = props.logo;
    const bannerStyle = {
        backgroundImage: `url(${strTeamBanner})`,
    }
    
    return (
        <div className='logo-bg' style={bannerStyle}>
            <img className='details-logo img-fluid' src={strTeamBadge} alt=""/>
        </div>
    );
};

export default DetailsHeader;