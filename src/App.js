import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/Header';
import Banner from './components/Banner';
import Materias from './components/Materias';
import Horario from './components/Horario';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      materias: [
        {
          clave: 'AEB-1011',
          nombre: 'Programacion Web',
          hora: '12:00-13:00',
          grupo: 'C8A'
        },
        {
          clave: 'AEB-4038',
          nombre: 'Programacion Web',
          hora: '13:00-14:00',
          grupo: 'C8B'
        },
        {
          clave: 'AEB-1588',
          nombre: 'Programacion Web',
          hora: '14:00-14:00',
          grupo: 'C8C'
        },  
        {
          clave: 'DSI-7248',
          nombre: 'Diseño de Interfaces',
          hora: '15:00-16:00',
          grupo: 'C7A'
        },
        {
          clave: 'DSI-4290',
          nombre: 'Diseño de Interfaces',
          hora: '16:00-17:00',
          grupo: 'C7B'
        },
        {
          clave: 'EDT-0029',
          nombre: 'Estructura de Datos',
          hora: '10:00-12:00',
          grupo: 'C4A'
        },
        {
          clave: 'SMN-2055',
          nombre: 'Simulación',
          hora: '19:00-20:00',
          grupo: 'C6A'
        },
        {
          clave: 'SMN-1135',
          nombre: 'Simulación',
          hora: '20:00-21:00',
          grupo: 'C6B'
        },
        {
          clave: 'CDW-4672',
          nombre: 'Cálculo Diferencial',
          hora: '8:00-10:00',
          grupo: 'C1A'
        },
        {
          clave: 'CDW-9938',
          nombre: 'Cálculo Diferencial',
          hora: '10:00-11:00',
          grupo: 'C1B'
        },
        {
          clave: 'CDW-2194',
          nombre: 'Cálculo Diferencial',
          hora: '13:00-15:00',
          grupo: 'C1C'
        },
      ],
      horario: [
        // {
        //   clave: 'AEC-3392',
        //   nombre: 'Simulación',
        //   hora: '14:00-15:00',
        //   grupo: 'C6A'
        // },
      ]
    };
    this.agregarMateria = this.agregarMateria.bind(this);
    this.eliminarMateria = this.eliminarMateria.bind(this);
  }

  agregarMateria(materia) {

    this.setState(
      {
        materias: this.state.materias.filter(item => item.clave !== materia.clave),
        horario: this.state.horario.concat({
          clave: materia.clave,
          nombre: materia.nombre,
          hora: materia.hora,
          grupo: materia.grupo
        })
      }
    );
  }

  eliminarMateria(materia) {
    this.setState(
      {
        materias: this.state.materias.concat({
          clave: materia.clave,
          nombre: materia.nombre,
          hora: materia.hora,
          grupo: materia.grupo
        }),
        horario: this.state.horario.filter(item => item.clave !== materia.clave)
      }
    );
  }

  render() {

    const datosState = this.state;

    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Header />
        <Banner />
        <Container style={{paddingBlock: '2rem', marginBottom: 'auto'}}>
          <Row>
            <Col><Materias datosState={datosState} agregarMateria={this.agregarMateria} /></Col>
            <Col><Horario datosState={datosState} eliminarMateria={this.eliminarMateria} /></Col>
          </Row>             
        </Container>
        <Banner />  
      </div>
    )
  }
}