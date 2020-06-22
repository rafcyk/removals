import React from 'react';
import Menu from '../images/hamburger-icon.png';

const Navigation = () => {
    let menuActive = true;
    const handleClickMenu = () => {
        if(menuActive){
            document.querySelector('nav').classList.add('active');
            menuActive = false;
        }
        else if (menuActive === false){
            document.querySelector('nav').classList.remove('active');
            menuActive = !menuActive;
        }
    }

    window.addEventListener('resize', () => {
        if(document.querySelector('nav').classList.contains === 'active'){
            document.querySelector('nav').classList.remove('active');
        }
    })

    const handleClick = (e) => {
        const name = e.target.getAttribute('name');
        let height = 0;

        if(name === 'About'){
            height = document.querySelector('section.about').offsetTop;
        } else if(name === 'Offer'){
            height = document.querySelector('section.offer').offsetTop;
        }
        else if(name === 'Opinions'){
            height = document.querySelector('section.opinions').offsetTop;
        }
        else if(name === 'Contact'){
            height = document.querySelector('section.contact').offsetTop;
        }

        window.scrollTo({
            top:height,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <nav>
            <ul>
                <li name = 'About' onClick = {handleClick}>O firmie</li>
                <li name = 'Offer' onClick = {handleClick}>Oferta</li>
                <li name = 'Opinions' onClick = {handleClick}>Opinie</li>
                <li name = 'Contact' onClick = {handleClick}>Kontakt</li>
            </ul>
            <img src={Menu} alt="menu" className="menu-icon" onClick = {handleClickMenu}/>
        </nav>
    );
};

export default Navigation;