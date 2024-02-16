import React, { useEffect } from "react";
import Vignettes from "../Various/Vignettes";
import Arbo_gauche from "../Various/Arbo_gauche";

const Homepage = () => {


    // useEffect(async () => {
    //     let PROJECT_ID = "odeb673g";
    //     let DATASET = "production";
    //     let QUERY = encodeURIComponent('*[_type == "projet"]');
        
    //     // Compose the URL for your project's endpoint and add the query
    //     let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    //     let test = await fetch(URL);

    //     let data = await test.json();

    //     // Maintenant, vous pouvez accéder à la propriété result

    //     for (let index = 0; index < data.result.length; index++) {
    //         console.log(data.result[index]);
    //     }
        
    // }, [])
    
    return (
        <div>
            <Vignettes />
            <Arbo_gauche title="Accueil" />
        </div>
    )
}

export default Homepage;