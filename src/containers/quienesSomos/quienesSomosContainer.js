import { connect } from "react-redux";
import QuienesSomos from "../../components/quienesSomos/QuienesSomos";

const mapStateToProps = state => ({
  quienesSomos: state.quienesSomos.quienesSomos,
  languaje: state.common.languaje
});

const mapDispatchToProps = dispatch => ({});

const QuienesSomosContainer = connect(mapStateToProps, mapDispatchToProps)(QuienesSomos);

export default QuienesSomosContainer;
