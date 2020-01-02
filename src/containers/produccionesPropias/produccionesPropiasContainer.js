import { connect } from "react-redux";
import ProduccionesPropias from "../../components/produccionesPropias/ProduccionesPropias";

const mapStateToProps = state => ({
  produccionesPropias: state.produccionesPropias.produccionesPropias,
  languaje: state.common.languaje,
  isModalVideoOpen: state.modalVideo.isModalVideoOpen,
  videoKey: state.modalVideo.videoKey
});

const ProduccionesPropiasContainer = connect(mapStateToProps, null)(ProduccionesPropias);

export default ProduccionesPropiasContainer;
