import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  card: {
    background: "transparent",
    border: "solid white"
  },
  media: {
    height: 200,
  },
  titleText: {
    color: "white",
  },
  subtitleText: {
    color: "white",
  },
  mediaRoot: {
    color: "red",
  },
  focusHighlight: {
    borderRadius: "none",
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.mediaRoot}>
        <CardMedia
          className={classes.media}
          image="http://www.versatilproduccions.com/wp-content/uploads/fiestaNeon.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.subtitleText}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab color="secondary" aria-label="edit">
          <YouTubeIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}