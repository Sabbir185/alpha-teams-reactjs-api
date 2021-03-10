import React from 'react';
import './DetailsBody.css';
import Founder from '../../images/found 1.png';
import Country from '../../images/flag (1) 1.png';
import Gender from '../../images/male-gender-sign 1.png';
import SportType from '../../images/football (1) 1.png';


const DetailsBody = (props) => {
    console.log(props.teamInfo);
    const {strTeam, intFormedYear, strCountry, strSport, strGender} = props.teamInfo;

    return (
        <div className='container'>
            <div className='row mt-5 body-design'>
                <div className="col-md-6">
                    <h3>{strTeam}</h3>
                    <h6><img className='body-img' src={Founder}/> Founded : {intFormedYear}</h6>
                    <h6><img className='body-img' src={Country}/>Country : {strCountry}</h6>
                    <h6><img className='body-img' src={SportType}/>Sport Type : {strSport}</h6>
                    <h6><img className='body-img' src={Gender}/>Gender : {strGender}</h6>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsBody;