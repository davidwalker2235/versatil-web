import { Subscriber } from "../Subscriber";
import { connect } from "react-redux";
import { getData } from "../../actions/app/appActionsAsync";

const mapDispatchToProps = dispatch => ({
  subscribe: () => {
    dispatch(getData("contacto"));
  }
});

const ContactoProvider = connect(null, mapDispatchToProps)(Subscriber);

export default ContactoProvider;
