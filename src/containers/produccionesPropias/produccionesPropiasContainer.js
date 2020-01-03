import { connect } from "react-redux";
import ProduccionesPropias from "../../components/produccionesPropias/ProduccionesPropias";
import {openModalVideo, closeModalVideo} from "../../actions/modalVideo/modalVideoActions";

const mapStateToProps = state => ({
  produccionesPropias: state.produccionesPropias.produccionesPropias,
  languaje: state.common.languaje,
  isModalVideoOpen: state.modalVideo.isModalVideoOpen,
  videoKey: state.modalVideo.videoKey
});

const mapDispatchToProps = dispatch => ({
  openModalVideo: (key) => dispatch(openModalVideo(key)),
  closeModalVideo: () => dispatch(closeModalVideo())
});

const ProduccionesPropiasContainer = connect(mapStateToProps, mapDispatchToProps)(ProduccionesPropias);

export default ProduccionesPropiasContainer;
