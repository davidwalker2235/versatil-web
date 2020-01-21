import { connect } from "react-redux";
import ServicesDetails from "../../components/common/servicesDetails/servicesDetails";
import {openModalVideo, closeModalVideo} from "../../actions/modalVideo/modalVideoActions";
import {openDialog} from '../../actions/dialog/dialogActions';

const mapStateToProps = state => ({
  serviceData: state.servicios.serviceData,
  languaje: state.common.languaje,
  isModalVideoOpen: state.modalVideo.isModalVideoOpen,
  videoKey: state.modalVideo.videoKey
});

const mapDispatchToProps = dispatch => ({
  openModalVideo: (key) => dispatch(openModalVideo(key)),
  closeModalVideo: () => dispatch(closeModalVideo()),
  openDialog: () => dispatch(openDialog())
});

const CarpasContainer = connect(mapStateToProps, mapDispatchToProps)(ServicesDetails);

export default CarpasContainer;
