import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Various/Header'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Various/Footer'
import Motion from './components/Services/Motion/Motion'
import Print from './components/Services/Print/Print'
import Id_visu from './components/Services/Id_visu/Id_visu'
import Dev from './components/Services/Dev/dev'
import Vis_immer from './components/Services/Vis_immer/Vis_immer'
import Marq_pub from './components/Services/Marq_pub/Marq_pub'
import Res_ref from './components/Services/Res_ref/Res_ref'
import Goodies from './components/Services/Goodies/Goodies'
import Archiv_projets from './components/Archiv_projets/Archiv_projets';

const App = () => {
    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/archive-projets' element={<Archiv_projets/>}/>
                <Route path='/print' element={<Print />}/>
                <Route path='/identite-visuelle' element={<Id_visu />}/>
                <Route path='/dev-web-logiciel' element={<Dev />}/>
                <Route path='/visite-immersive' element={<Vis_immer />}/>
                <Route path='/motion' element={<Motion />}/>
                <Route path='/marquage-publicitaire' element={<Marq_pub />}/>
                <Route path='/reseaux-referencement' element={<Res_ref />}/>
                <Route path='/goodies' element={<Goodies />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App