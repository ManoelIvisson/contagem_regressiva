import { useState } from "react"

function useContador(date) {
    const [dia, setDia] = useState()
    const [hora, setHora] = useState()
    const [minuto, setMinuto] = useState()
    const [segundo, setSegundo] = useState()

    function contador() {
        const dataFutura = new Date(date).getTime()
        const dataAtual = new Date().getTime()

        const intervalo = dataFutura - dataAtual

        const segundo = 1000
        const minuto = segundo * 60
        const hora = minuto * 60
        const dia = hora * 24

        const numeroDeDias = Math.floor(intervalo/dia)
        const numeroDeHoras = Math.floor((intervalo % dia) / hora)
        const numeroDeMinutos = Math.floor((intervalo % hora) / minuto)
        const numeroDeSegundos = Math.floor((intervalo % minuto) / segundo)

        setDia(numeroDeDias)
        setHora(numeroDeHoras)
        setMinuto(numeroDeMinutos)
        setSegundo(numeroDeSegundos)
    }

    setInterval(contador, 1000)
    
    return [dia, hora, minuto, segundo]
}

export default useContador