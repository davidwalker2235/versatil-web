import React from "react";
import { Route, Switch } from "react-router-dom";
import InicioView from "../containers/inicio/inicioView";
import ServiciosView from "../containers/servicios/serviciosView";
import ProduccionesPropiasView from "../containers/produccionesPropias/produccionesPropiasView";
import AlquilerEquiposView from "../containers/alquilerEquipos/alquilerEquiposView";
import ContactoView from "../containers/contacto/contactoView";
import QuienesSomosView from "../containers/quienesSomos/quienesSomosView";
import Navbar from "./navbar/Navbar";
import GlobalStyle from "../styles/Global";
import GruposMusicalesView from "../containers/gruposMusicales/gruposMusicalesView";
import CarpasView from "../containers/carpas/carpasView";
import DecoracionesView from "../containers/decoraciones/decoracionesView";
import GestionEspaciosView from "../containers/gestionEspacios/gestionEspaciosView";
import VersatilRecordingView from "../containers/versatilRecording/versatilRecordingView";
import CateringView from "../containers/catering/cateringView";
import ModalVideo from 'react-modal-video';
import DialogComponent from '../components/common/dialog/dialog';
import LoadingComponent from '../components/common/loading/loading';
import SnackbarComponent from '../components/common/snackbar/snackbar';
import "./App.scss";

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
    const {isModalVideoOpen, closeModalVideo, videoKey} = this.props;
    return (
      <div style={rootStyle}>
        <SnackbarComponent />
        <LoadingComponent />
        <DialogComponent />
        <ModalVideo channel='youtube' isOpen={isModalVideoOpen} videoId={videoKey} onClose={closeModalVideo} />
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
          data={[]}
        />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={InicioView} />
          <Route path="/servicios" component={ServiciosView} />
          <Route path="/producciones-propias" component={ProduccionesPropiasView} />
          <Route path="/quienes-somos" component={QuienesSomosView} />
          <Route path="/contacto" component={ContactoView} />
          <Route path="/alquiler_equipos" component={AlquilerEquiposView} />
          <Route path="/grupos_musicales" component={GruposMusicalesView} />
          <Route path="/carpas" component={CarpasView} />
          <Route path="/decoraciones" component={DecoracionesView} />
          <Route path="/catering" component={CateringView} />
          <Route path="/gestion_espacios" component={GestionEspaciosView} />
          <Route path="/versatil_recording" component={VersatilRecordingView} />
        </Switch>
      </div>
    );
  }
}

export default App;
