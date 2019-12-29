import { connect } from "react-redux";
import ServicesDetails from "../../components/common/servicesDetails/servicesDetails";
import {openModalVideo, closeModalVideo} from "../../actions/modalVideo/modalVideoActions";

const mapStateToProps = state => ({
  hoverCards: state.home.hoverCards,
  languaje: state.common.languaje,
  isModalVideoOpen: state.modalVideo.isModalVideoOpen,
  videoKey: state.modalVideo.videoKey
});

const mapDispatchToProps = dispatch => ({
  openModalVideo: (key) => dispatch(openModalVideo(key)),
  closeModalVideo: () => dispatch(closeModalVideo())
});

const AlquilerEquiposContainer = connect(mapStateToProps, mapDispatchToProps)(ServicesDetails);

export default AlquilerEquiposContainer;
