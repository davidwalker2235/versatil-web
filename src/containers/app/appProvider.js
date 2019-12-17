import { Subscriber } from "../Subscriber";
import { connect } from "react-redux";
import { getData } from "../../actions/app/appActionsAsync";

const mapDispatchToProps = dispatch => ({
  subscribe: () => {
    dispatch(getData("navbar"));
  }
});

const AppProvider = connect(null, mapDispatchToProps)(Subscriber);

export default AppProvider;
