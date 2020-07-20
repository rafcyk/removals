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
        const sections = document.querySelectorAll('section');
        for(let i = 0;i < sections.length; i++){
            if(name === sections[i].getAttribute('name')){
                window.scrollTo({
                    top:sections[i].offsetTop,
                    left: 0,
                    behavior: "smooth"
                })
            }
        }


    }
    return (
        <nav>
            <ul>
                <li name = 'about' onClick = {handleClick}>O firmie</li>
                <li name = 'offer' onClick = {handleClick}>Oferta</li>
                <li name = 'opinions' onClick = {handleClick}>Opinie</li>
                <li name = 'contact' onClick = {handleClick}>Kontakt</li>
            </ul>
            <img src={Menu} alt="menu" className="menu-icon" onClick = {handleClickMenu}/>
        </nav>
    );
};

export default Navigation;