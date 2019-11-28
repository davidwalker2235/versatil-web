import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Servicios from "../components/Servicios";
import ProduccionesPropias from "../components/ProduccionesPropias";
import Settings from "./Contacto";
import NavTab from "./NavTab";
import QuienesSomos from "./QuienesSomos";
import navTabConf from "../configuration/navTabConf";
import logo from "../configuration/images/logo.png";

const rootStyle = {
  backgroundColor: "black",
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: "0"
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class App extends React.Component {
  render() {
    return (
      <div style={rootStyle}>
        <NavTab data={navTabConf} image={logo} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/producciones-propias" component={ProduccionesPropias} />
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/contacto" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
