import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default function Materias({datosState, agregarMateria}) {
    return (
        <>
            <h2 style={{textAlign: 'center'}}>Materias</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Materia</th>
                        <th>Hora</th>
                        <th>Grupo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {datosState.materias.map((e, i) => 
                        <tr key={i}>
                            <td>{e.clave}</td>
                            <td>{e.nombre}</td>
                            <td>{e.hora}</td>
                            <td>{e.grupo}</td>
                            <td style={{textAlign: 'center'}}>
                                <Button 
                                    disabled={datosState.horario.some(item => item.nombre === e.nombre)} 
                                    onClick={() => agregarMateria(e)} 
                                    variant="success">+
                                </Button>{' '}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
        
    )
}

Materias.propTypes = {

    datosState: PropTypes.object,
    agregarMateria: PropTypes.func
};

Materias.defaultProps = {

    datosState: {
        materias: [
            {
                clave: 'Materia Clave',
                nombre: 'Materia Nombre',
                hora: 'Materia Hora',
                grupo: 'Materia Grupo'
            },
          ],
        horario: [
            {
                clave: 'Horario Clave',
                nombre: 'Horario Nombre',
                hora: 'Horario Hora',
                grupo: 'Horario Grupo'
            },
        ]
    },
    agregarMateria: () => {console.log("Default Agregar")}
};