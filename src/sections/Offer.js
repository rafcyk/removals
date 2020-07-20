import React from 'react';
import Car from '../images/car.png';

const Offer = () => {
    return (
        <section className = 'offer' name = 'offer'>
            <div className="triangle-top-left"></div>
            <img src={Car} alt=""/>
            <div className="wrap">
                <h2>Oferta</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ab alias magnam repellendus libero nisi, iusto sequi, ad aperiam quos temporibus debitis, fuga distinctio corrupti expedita. Repudiandae obcaecati eligendi ullam?Asperiores, sequi pariatur assumenda quos ullam nemo sed distinctio veritatis architecto. Beatae cupiditate vel nobis rem. Veritatis accusamus sit a similique nihil ipsa dolores. In quae sint maxime enim mollitia.</p>
            </div>
            <div className="triangle-bottom-right"></div>
        </section>
    );
};

export default Offer;