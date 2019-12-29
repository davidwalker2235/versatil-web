import React from "react";
import { Route, Switch } from "react-router-dom";
import InicioView from "../containers/inicio/inicioView";
import ServiciosView from "../containers/servicios/serviciosView";
import ProduccionesPropias from "../components/ProduccionesPropias";
import AlquilerEquiposView from "../containers/alquilerEquipos/alquilerEquiposView";
import Settings from "./Contacto";
import QuienesSomos from "./QuienesSomos";
import Navbar from "./navbar/Navbar";
import GlobalStyle from "../styles/Global";

const rootStyle = {
  backgroundColor: "black",
  overflow: "hidden",
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: "0"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navbarOpen: false
    };
    this.handleNavbar = this.handleNavbar.bind(this);
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <div style={rootStyle}>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
          data={[]}
        />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={InicioView} />
          <Route path="/servicios" component={ServiciosView} />
          <Route path="/producciones-propias" component={ProduccionesPropias} />
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/contacto" component={Settings} />
          <Route path="/alquiler_equipos" component={AlquilerEquiposView} />
        </Switch>
      </div>
    );
  }
}

export default App;
