import { connect } from "react-redux";
import Contacto from "../../components/contacto/Contacto";

const mapStateToProps = state => ({
  contacto: state.contacto.contacto,
  languaje: state.common.languaje
});

const mapDispatchToProps = dispatch => ({});

const ContactoContainer = connect(mapStateToProps, mapDispatchToProps)(Contacto);

export default ContactoContainer;
