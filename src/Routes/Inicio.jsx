import '../App.css'
import './Inicio.css'
import AnoNovo from "../assets/ano_novo.jpg"

import {useNavigate} from 'react-router-dom'

import { useContext, useState } from 'react'
import { ContagemContext } from '../context/ContagemContext'

function Inicio() {
    const [titulo, setTitulo] = useState()
    const [data, setData] = useState()
    const [imagem, setImagem] = useState("./src/assets/ano_novo.jpg")
    const [cor, setCor] = useState()

    const {evento, setEvento} = useContext(ContagemContext)

    const navigate = useNavigate()

    function CriarContagem(e) {
        e.preventDefault()

        const eventoCriado = {
            titulo,
            data,
            imagem,
            cor
        }

        console.log(eventoCriado)

        setEvento(eventoCriado)

        navigate('/contagem_regressiva')
    }

    return (
        <div className='App' style={{backgroundImage: `url(${AnoNovo})`}}>
            <div className='container'>
                <h1>Monte sua contagem regressiva!</h1>
                <form onSubmit={CriarContagem}>
                    <label htmlFor="titulo">Título:</label>
                    <input className='input' type="text" name="titulo" id="titulo" placeholder='Meu aniverssário' onChange={(e) => setTitulo(e.target.value)}/>

                    <label htmlFor="data">Data do evento:</label>
                    <input className='input' type="date" name="data" id="data" onChange={(e) => setData(e.target.value)}/>

                    <label htmlFor="imagem">Imagem:</label>
                    <input className='input' type="text" name="imagem" id="imagem" placeholder='Insira a URL da imagem' onChange={(e) => setImagem(e.target.value)}/>

                    <label htmlFor="cor">Cor do tema:</label>
                    <input type="color" name="cor" id="cor" onChange={(e) => setCor(e.target.value)}/>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}

export default Inicio