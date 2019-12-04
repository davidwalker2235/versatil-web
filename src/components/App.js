import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Servicios from "../components/Servicios";
import ProduccionesPropias from "../components/ProduccionesPropias";
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

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
        />
        <GlobalStyle />
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
