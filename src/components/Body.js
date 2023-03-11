import PropTypes from 'prop-types';

function Body({texto, arreglo}) {

    function alerta() {

        alert("Se presionó el botón");
    }

    return(
        <div className='Body'>
            <h2>{texto}</h2>
            <ol>
                {arreglo.map((e, i) => <li key={i}>{e}</li>)}
            </ol>
            <button className='Button' onClick={alerta}>Botón</button>
        </div>
    )
}

Body.propTypes = {
    texto: PropTypes.string,
    arreglo: PropTypes.array
};

Body.defaultProps = {
    texto: 'Componente Default 3',
    arreglo: ['Elemento Default 1', 'Elemento Default 2', 'Elemento Default 3']
};
  
export default Body;