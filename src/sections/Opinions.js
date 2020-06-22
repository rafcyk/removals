import React from 'react';

const Opinions = () => {
    return (
        <section className = 'opinions'>
            <div className="triangle-top-left"></div>
            <div className="wrap">
            <h2>Opinie</h2>
            <div className = 'wrap-opinions'>
                <div className="opinion">
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat similique obcaecati rem corporis fugit neque, ex dolore, quibusdam mollitia repellendus dolores unde esse non ipsa est corrupti cupiditate voluptate?</p>
                    <p className="name">Karol Majka</p>
                </div>
                <div className="opinion">
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat similique obcaecati rem corporis fugit neque, ex dolore, quibusdam mollitia repellendus dolores unde esse non ipsa est corrupti cupiditate voluptate?</p>
                    <p className="name">Maja Wanda</p>
                </div>
                <div className="opinion">
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat similique obcaecati rem corporis fugit neque, ex dolore, quibusdam mollitia repellendus dolores unde esse non ipsa est corrupti cupiditate voluptate?</p>
                    <p className="name">Tomasz Kapak</p>
                </div>
            </div>
            </div>
            <div className="triangle-bottom-right"></div>

        </section>
    );
};

export default Opinions;