import React from 'react';

import Phone from '../images/phone.png';
import Mail from '../images/mail.png';
import Fax from '../images/fax.png';

const Contact = () => {
    return (
        <section className = 'contact'>
            <div className="triangle-top-left"></div>
            <div className="wrap">
                <h2>Kontakt</h2>
                <div className="numbers-addresses">
                <div className="address">
                    <p>Warszawa</p>
                    <p>ul. Warszawska 44</p>
                    <p>00-000</p>
                </div>
                <div className="numbers">
                 <p><img src={Phone} alt=""/><span>tel.</span> 999-999-999</p>
                <p><img src={Mail} alt=""/><span>mail.</span>przeprowadzki@to.pl</p>
                <p><img src={Fax} alt=""/><span>fax.</span>99-999-9999</p>
                </div>
            </div>
            </div>
            <div className="triangle-bottom-right"></div>
        </section>
    );
};

export default Contact;