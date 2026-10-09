import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuRutas extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/doctoresEspecialidad">Doctores por especialidad</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
