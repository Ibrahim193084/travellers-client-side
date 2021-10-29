import React from 'react';

const About = () => {
    return (
        <div id="about" className="my-5">
        <h1 className="text-danger text-center my-5">ABOUT US</h1>
        <div className="row ms-5">
            <div className="col-md-6">
                <img className="w-75" style={{borderRadius:'360px'}} src="https://jpress.jayride.com/wp-content/uploads/2018/08/group-travel.jpg" alt="" />
        
            </div>
            <div className="col-md-4 mt-5">
                <p style={{margin:'50px'}}>
                Traveller is the essential resource for Bangladeshi who love to travel. We are dedicated to providing the best travel advice by offering the perfect mix of inspirational content and comprehensive destination guides with things to do and places to stay. Most importantly, Traveller is your daily escape to dream destinations. Be transported to the wild Kimberley Coast of Western Australia or a sun lounge on the Cote d’Azur in France, with a mimosa in hand. So, what are you still doing here? Start searching for your next holiday.
                </p>
            </div>
        </div>
        
        </div>
    );
};

export default About;