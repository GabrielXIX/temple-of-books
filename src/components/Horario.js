import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class Horario extends Component {
    render() {

        const {datosState, eliminarMateria} = this.props;

        return (
            <>
                {
                    datosState.horario.length > 0
                    ?
                    <>
                        <h2 style={{textAlign: 'center'}}>Mi Horario: {datosState.horario.length} materia(s)</h2>
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
                                {datosState.horario.map((e, i) => 
                                    <tr key={i}>
                                        <td>{e.clave}</td>
                                        <td>{e.nombre}</td>
                                        <td>{e.hora}</td>
                                        <td>{e.grupo}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <Button 
                                                onClick={() => eliminarMateria(e)} 
                                                variant="danger">-
                                            </Button>{' '}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </>
                    :
                    <h2 style={{textAlign: 'center'}}>No hay materias seleccionadas</h2>
                }               
            </>          
        )
    }
}

Horario.propTypes = {

    datosState: PropTypes.object,
    eliminarMateria: PropTypes.func
};

Horario.defaultProps = {

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
    eliminarMateria: () => {console.log("Default Eliminar")}
};