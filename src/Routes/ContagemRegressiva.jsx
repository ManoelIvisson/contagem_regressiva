import { useState } from 'react'
import '../App.css'
import Titulo from '../components/Titulo'
import Contador from '../components/Contador'

import useContador from '../hooks/useContador'

import {Navigate} from 'react-router-dom' 

import { ContagemContext } from '../context/ContagemContext'
import { useContext } from 'react'

function ContagemRegressiva() {
    const {evento} = useContext(ContagemContext)

    if (!evento) return <Navigate to="/" replace />

    const [dia, hora, minuto, segundo] = useContador(evento.data + "T00:00:00")

    return (
        <div className='App' style={{backgroundImage: `url(${evento.imagem})`}} >
            <div className="container">
                <Titulo titulo={evento.titulo} cor={evento.cor}/>
                <div className="contador_container">
                    <Contador medida="Dias" numero={dia} cor={evento.cor}/>
                    <Contador medida="Horas" numero={hora} cor={evento.cor}/>
                    <Contador medida="Minutos" numero={minuto} cor={evento.cor}/>
                    <Contador medida="Segundos" numero={segundo} cor={evento.cor}/>
                </div>
            </div>     
        </div>
    )

    
}

export default ContagemRegressiva