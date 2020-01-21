import { connect } from "react-redux";
import Contacto from "../../components/contacto/Contacto";
import {sendEmail} from "../../actions/emailServiceActions/emailService";

const mapStateToProps = state => ({
  contacto: state.contacto.contacto,
  languaje: state.common.languaje
});

const mapDispatchToProps = dispatch => ({
  sendEmail: (data) => dispatch(sendEmail(data))
});

const ContactoContainer = connect(mapStateToProps, mapDispatchToProps)(Contacto);

export default ContactoContainer;
