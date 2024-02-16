import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleRealClick = () => {
        navigate('/archive-projets')
    }

    var urlActuelle = window.location.href;
    var orange = null;
    
    if(urlActuelle === "http://localhost:5173/") {
        orange = document.getElementById('accueil');
        if (orange) {
            orange.classList.add('orange');
        }
        var orange_realisations = document.getElementById('realisations');
        if (orange_realisations) {
            orange_realisations.classList.remove('orange');
        }
    } else if(urlActuelle === "http://localhost:5173/archive-projets") {
        orange = document.getElementById('realisations');
        if (orange) {
            orange.classList.add('orange');
        }
        var orange_accueil = document.getElementById('accueil');
        if (orange_accueil) {
            orange_accueil.classList.remove('orange');
        }
    } else {
        var orange_accueil = document.getElementById('accueil');
        if (orange_accueil) {
            orange_accueil.classList.remove('orange');
        }
        var orange_realisations = document.getElementById('realisations');
        if (orange_realisations) {
            orange_realisations.classList.remove('orange');
        }
        console.log('AMOGUS FOR THE WIN');
    }
    

    return (

        <header>
            <div className="container containerHeader">
            <div id='logo' style={{padding: 0}}>
                    <img src="/src/medias/logo_sc_h-300x71-1.png" alt="logo" onClick={handleHomeClick}/>
            </div>
            <nav id="menuHeader">
                <ul>
                    <li id='accueil' onClick={handleHomeClick}>Accueil</li>
                    <li id='realisations' onClick={handleRealClick}>Réalisations</li>
                </ul>
                <div id="icons"></div>
            </nav>
            </div>
        </header>
    )
}

export default Header;