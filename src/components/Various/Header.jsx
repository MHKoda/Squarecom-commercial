import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            handleHomeClick()
        }
    }

    const handleRealClick = () => {
        navigate('/archive-projets')
    }

    let urlActuelle = window.location.href;
    let orange = null;
    
    if(urlActuelle === "http://localhost:5173/") {
        orange = document.getElementById('accueil');
        if (orange) {
            orange.classList.add('orange');
        }
        let orange_realisations = document.getElementById('realisations');
        if (orange_realisations) {
            orange_realisations.classList.remove('orange');
        }
    } else if(urlActuelle === "http://localhost:5173/archive-projets") {
        orange = document.getElementById('realisations');
        if (orange) {
            orange.classList.add('orange');
        }
        let orange_accueil = document.getElementById('accueil');
        if (orange_accueil) {
            orange_accueil.classList.remove('orange');
        }
    } else {
        let orange_accueil = document.getElementById('accueil');
        if (orange_accueil) {
            orange_accueil.classList.remove('orange');
        }
        let orange_realisations = document.getElementById('realisations');
        if (orange_realisations) {
            orange_realisations.classList.remove('orange');
        }
        console.log('AMOGUS FOR THE WIN');
    }
    

    return (

        <header>
            <div className="container containerHeader">
            <div id='logo' style={{padding: 0}} tabIndex={0} onClick={handleHomeClick} onKeyDown={handleKeyDown} role="button">
                    <img src="/src/medias/logo_sc_h-300x71-1.png" alt="logo" />
            </div>
            <nav id="menuHeader">
                <ul>
                    <li id='accueil' onClick={handleHomeClick} onKeyDown={handleKeyDown}>Accueil</li>
                    <li id='realisations' onClick={handleRealClick} onKeyDown={handleKeyDown}>Réalisations</li>
                </ul>
                <div id="icons"></div>
            </nav>
            </div>
        </header>
    )
}

export default Header;