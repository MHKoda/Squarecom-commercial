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
import MarqPub from './components/Services/MarqPub/MarqPub'
import ResRef from './components/Services/ResRef/ResRef'
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
                <Route path='/marquage-publicitaire' element={<MarqPub />}/>
                <Route path='/reseaux-referencement' element={<ResRef />}/>
                <Route path='/goodies' element={<Goodies />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App