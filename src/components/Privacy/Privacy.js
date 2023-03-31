import React from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "./styles";
import "./Privacy.css";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import cataloniaFlag from "../../configuration/images/cataloniaFlag.png";
import spanishFlag from "../../configuration/images/spanishFlag.png";

class Privacy extends React.Component {
  CA = 'Utilitzem cookies pròpies i de tercers per millorar els nostres serveis, elaborar informació estadística i analitzar els seus hàbits de navegació. Això ens permet personalitzar el contingut que oferim i mostrar publicitat relacionada amb les seves preferències. En clicar a "Entès" ACCEPTA EL SEU ÚS. També pot REBUTJAR la instal·lació de cookies clicant a "Rebutjar".\',';
  ES = 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística y analizar su hábitos de navegación. Esto nos permite personalizar el contenido que ofrecemos y mostrar publicidad relacioada con sus preferencias. Presionando en "Aceptar" ACEPTA SU USO. También puede RECHAZAR la instalación de cookies presionando en "Rechazar".';
  constructor() {
    super();
    this.state = {
      visible: true,
      accept: 'Entès',
      cancel: 'Rebutjar',
      currentLanguaje: 'ca',
      ca: 'Utilitzem cookies pròpies i de tercers per millorar els nostres serveis, elaborar informació estadística i analitzar els seus hàbits de navegació. Això ens permet personalitzar el contingut que oferim i mostrar publicitat relacionada amb les seves preferències. En clicar a "Entès" ACCEPTA EL SEU ÚS. També pot REBUTJAR la instal·lació de cookies clicant a "Rebutjar".',
      es: 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística y analizar su hábitos de navegación. Esto nos permite personalizar el contenido que ofrecemos y mostrar publicidad relacioada con sus preferencias. Presionando en "Aceptar" ACEPTA SU USO. También puede RECHAZAR la instalación de cookies presionando en "Rechazar".'
    }
  }

  changeLanguaje = (elem) => {
    this.setState({...this.state, currentLanguaje: elem.target.alt})
  }

  isPrivacyHidden = () => {
    const isVisible = window.sessionStorage.getItem("privacy");
    return isVisible === 'true';
  }

  handlePrivacyButtons = () => {
    window.sessionStorage.setItem("privacy", "true");
    this.setState({...this.state, visible: false})
  }

  render() {
    const { classes } = this.props;
    return (
      <Drawer anchor={'bottom'} open={!this.isPrivacyHidden()} onClose={() => null}>
        <div className={classes.flagRoot}>
          <img className={classes.flag} src={cataloniaFlag} alt="ca" onClick={this.changeLanguaje} />
          <img className={classes.flag} src={spanishFlag} alt="es" onClick={this.changeLanguaje} />
        </div>
        <div className={classes.textRoot}>
          <span>
            {this.state.currentLanguaje === 'ca' ? this.CA : this.ES}
          </span>
          <div className={classes.buttonsRoot}>
            <Button variant="outlined" color="primary" onClick={this.handlePrivacyButtons}>
              {this.state.currentLanguaje === 'ca' ? 'Entès' : 'Aceptar'}
            </Button>
            <Button style={{marginLeft: '10px'}} variant="outlined" color="secondary" onClick={this.handlePrivacyButtons}>
              {this.state.currentLanguaje === 'ca' ? 'Rebutjar' : 'Rechazar'}
            </Button>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(Styles)(Privacy);
