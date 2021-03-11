import React from 'react';
import './DetailsBody.css';
import Founder from '../../images/found 1.png';
import Country from '../../images/flag (1) 1.png';
import Gender from '../../images/male-gender-sign 1.png';
import SportType from '../../images/football (1) 1.png';
import Male from '../../genderImage/male.png';
import Female from '../../genderImage/female.png';


const DetailsBody = (props) => {
    let {strTeam, intFormedYear, strCountry, strSport, strGender} = props.teamInfo;

    const pictureOfTeam = (strGender === 'Male') ? <img className='gender-pic img-fluid' src={Male} alt=""/> : <img className='gender-pic img-fluid' src={Female} alt=""/> ;

    return (
        <div className='container'>
            <div className='row mt-5 body-design'>
                <div className="col-md-6">
                    <h3>{strTeam}</h3>
                    <h6><img className='body-img' src={Founder} alt=""/> Founded : {intFormedYear}</h6>
                    <h6><img className='body-img' src={Country} alt=""/>Country : {strCountry}</h6>
                    <h6><img className='body-img' src={SportType} alt=""/>Sport Type : {strSport}</h6>
                    <h6><img className='body-img' src={Gender} alt=""/>Gender : {strGender}</h6>
                </div>
                <div className="col-md-6">
                    {
                        pictureOfTeam
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsBody;