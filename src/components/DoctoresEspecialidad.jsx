import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class DoctoresEspecialidad extends Component {
  selectEspecialidad = React.createRef();
  urlDoctores = Global.urlApiDoctores;

  state = {
    especialidades: [],
    doctores: [],
  };

  buscarDoctores = (event) => {
    event.preventDefault();

    let especialidad = this.selectEspecialidad.current.value;
    let request = "api/doctores/doctoresespecialidad/";
    axios.get(this.urlDoctores + request + especialidad).then((response) => {
      console.log("Leyeno Doctores");
      this.setState({
        doctores: response.data,
      });
    });
  };

  loadEspecialidades = () => {
    let request = "api/doctores/especialidades";
    axios.get(this.urlDoctores + request).then((response) => {
      this.setState({
        especialidades: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEspecialidades();
  };

  render() {
    return (
      <div>
        <h1>DoctoresEspecialidad</h1>
        <form>
          <label> Seleccione la especialidad</label>
          <select ref={this.selectEspecialidad}>
            {this.state.especialidades.map((especialidad, index) => {
              return <option key={index}>{especialidad}</option>;
            })}
          </select>
          <button onClick={this.buscarDoctores}>Buscar Doctores</button>
        </form>
        <ul>
          {this.state.doctores.map((doctor, index) => {
            return (
              <li key={index}>
                id: {doctor.idDoctor} Apellido: {doctor.apellido}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
