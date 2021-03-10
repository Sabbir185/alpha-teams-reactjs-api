import React from 'react';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import Youtube from '../../images/YouTube.png';
import './DetailsFooter.css';


const DetailsFooter = (props) => {
    console.log(props.socialMedia)
    const {strFacebook, strTwitter, strYoutube} = props.socialMedia;
    return (
        <div className='container'>
            <section className='text-white'>
                <article style={{marginBottom:'40px'}}>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos nihil omnis perferendis ducimus accusantium veritatis, natus quia animi ex assumenda enim aperiam non distinctio alias voluptatem magni! Accusamus illum repellat eveniet nam officia pariatur necessitatibus, omnis ut molestiae distinctio, maxime provident non excepturi error itaque enim architecto quam quos. Beatae placeat officia odit sed accusamus blanditiis dignissimos magni corrupti debitis perspiciatis vel quod, quae a minima cum dolorem suscipit aspernatur molestias. Quisquam numquam blanditiis accusamus officiis tempore quis omnis non consequuntur quia, at maxime pariatur deserunt rem, suscipit eos porro nihil impedit adipisci similique, molestias tempora libero. Esse nostrum, velit ipsa recusandae debitis ea consequatur ex fugit rem sequi, amet voluptas itaque nisi accusantium aperiam corporis ut fuga necessitatibus, impedit laudantium. Nemo tenetur deleniti quam? Odit inventore reiciendis quae perspiciatis, aspernatur debitis at. Quaerat magnam nostrum sint libero eius necessitatibus officiis praesentium earum, modi facere repellat ipsam, veritatis possimus?</p>
                </article>

                <article className='text-justify'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia magnam nesciunt illum voluptatum corporis vel et id temporibus, quidem, facere maxime error perferendis provident sit? Esse, repellendus vero voluptate iste quidem totam cum ullam, harum ut debitis reiciendis nisi? Harum amet quasi accusantium dolor earum? Porro quos, cum dolorem rerum corporis odit velit quod alias consectetur aut culpa distinctio vero veritatis sit illo fugiat totam cupiditate reprehenderit molestias libero unde nulla doloribus quibusdam! Tempore animi rerum obcaecati voluptatibus possimus beatae incidunt ullam dolore error ut temporibus itaque, tenetur, deserunt cum consequatur! Repellat cupiditate dolorum illum minima quod eaque nostrum.</p>
                </article>
            </section>

            <footer>
                <div className='text-center pb-5 pt-3'>
                    <a href={strFacebook} target='_blank'><img className='img-size2' src={Facebook}/></a>
                    <a href={strTwitter} target='_blank'><img className='img-size2' src={Twitter}/></a>
                    <a href={strYoutube} target='_blank'><img className='img-size2' src={Youtube}/></a>
                </div>
            </footer>
        </div>
    );
};

export default DetailsFooter;