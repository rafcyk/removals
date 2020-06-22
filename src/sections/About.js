import React from 'react';
import Car from '../images/car.png';
const About = () => {

    

    return (
        <section className='about' name='about'>
            <div className="triangle-top-left"></div>
            <img src={Car} alt="" />
            <div className="wrap">
                <h2>O firmie</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero magnam ut, excepturi fuga recusandae. Obcaecati earum quidem porro officiis iure quisquam eaque amet perspiciatis, atque id repudiandae cupiditate numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore modi quibusdam mollitia aspernatur saepe at veniam numquam magnam, debitis quia, expedita ad inventore accusamus fugiat dolorum accusantium minima ipsam rem?</p>
            </div>
            <div className="triangle-bottom-right"></div>
        </section>
    );
};

export default About;