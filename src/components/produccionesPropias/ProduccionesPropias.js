import React from "react";
import CardComponent from "../common/card/card";
import Grid from "@material-ui/core/Grid";
import { Translate } from "react-redux-i18n";
import "./ProduccionesPropias.scss";

class ProduccionesPropias extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { produccionesPropias, openModalVideo, closeModalVideo, isModalVideoOpen } = this.props;
    return (
      <div>
      <div className="servicesBackgroundImage" />
      <div className="blurBackgroundImage" />
      <Grid
        container
        direction="column"
        justify="center"
        className="servicesCardsContainer"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}>
            <h2 className="fancy-title-8 mk-fancy-title mk-animate-element pp-title">
              <Translate className="pp-color-gradient" value="produccionesPropias.title" />
            </h2>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          className="servicesCardsContainer"
          alignItems="center"
        >
          <Grid
            item
            xs={10}
            sm={10}
            lg={10}>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}>
                {produccionesPropias.map((production, index)=> (
                  <Grid item xs={12} sm={6} lg={6} key={index}>
                    <CardComponent
                      production={production}
                      openModalVideo={openModalVideo}
                      closeModalVideo={closeModalVideo}
                      isModalVideoOpen={isModalVideoOpen}/>
                </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default ProduccionesPropias;
