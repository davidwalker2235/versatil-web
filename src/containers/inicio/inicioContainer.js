import { connect } from "react-redux";
import Home from "../../components/Home";

const mapStateToProps = state => ({
  hoverCards: state.home.hoverCards
});

const InicioContainer = connect(mapStateToProps, null)(Home);

export default InicioContainer;
