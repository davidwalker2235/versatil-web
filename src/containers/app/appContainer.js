import { connect } from "react-redux";
import App from "../../components/App";
import {closeModalVideo} from "../../actions/modalVideo/modalVideoActions";

const mapStateToProps = (state) => ({
    isModalVideoOpen: state.modalVideo.isModalVideoOpen,
    videoKey: state.modalVideo.videoKey
});

const mapDispatchToProps = (dispatch) => ({
    closeModalVideo: () => dispatch(closeModalVideo())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
