import './Contador.css'

function Contador({medida, numero, cor}) {
    return (
        <div className="contador" style={{color: cor}}>
            <p className="contador_numero" style={{backgroundColor: cor}}>{numero}</p>
            <h3 className="contador_medida">{medida}</h3>
        </div>
    )
}

export default Contador