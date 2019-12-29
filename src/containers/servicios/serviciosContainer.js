import { connect } from "react-redux";
import Servicios from "../../components/Servicios/servicios";

const mapStateToProps = state => ({
  services: state.servicios.services,
  languaje: state.common.languaje,
  isModalVideoOpen: state.modalVideo.isModalVideoOpen,
  videoKey: state.modalVideo.videoKey
});

const ServiciosContainer = connect(mapStateToProps, null)(Servicios);

export default ServiciosContainer;
