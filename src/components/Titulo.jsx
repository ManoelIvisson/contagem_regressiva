import './Titulo.css'

function Titulo({titulo, cor}) {
    return (
        <h1 className='titulo' style={{color: cor}}>
            {titulo}
        </h1>
    )
} 

export default Titulo