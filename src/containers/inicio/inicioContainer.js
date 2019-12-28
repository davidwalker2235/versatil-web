import { connect } from "react-redux";
import Home from "../../components/Home";
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

const InicioContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default InicioContainer;
