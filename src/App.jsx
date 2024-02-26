import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Various/Header'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Various/Footer'
import Motion from './components/Services/Motion/Motion'
import Print from './components/Services/Print/Print'
import IdVisu from './components/Services/IdVisu/IdVisu'
import Dev from './components/Services/Dev/dev'
import VisImmer from './components/Services/VisImmer/VisImmer'
import Marq_pub from './components/Services/Marq_pub/Marq_pub'
import Res_ref from './components/Services/Res_ref/Res_ref'
import Goodies from './components/Services/Goodies/Goodies'
import ArchivProjets from './components/ArchivProjets/ArchivProjets';

const App = () => {
    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/archive-projets' element={<ArchivProjets/>}/>
                <Route path='/print' element={<Print />}/>
                <Route path='/identite-visuelle' element={<IdVisu />}/>
                <Route path='/dev-web-logiciel' element={<Dev />}/>
                <Route path='/visite-immersive' element={<VisImmer />}/>
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