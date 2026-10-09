import React, { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DoctoresEspecialidad from "./DoctoresEspecialidad";
import HomeComponent from "./HomeComponent";
import MenuRutas from "./MenuRutas";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route
            path="/doctoresEspecialidad"
            element={<DoctoresEspecialidad />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
