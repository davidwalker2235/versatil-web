import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  tabsRoot: {
    width: "100%"
  },
  scrollable: {
    display: "flex",
    justifyContent: "center"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(50, 20, 105, 0.7)"
  },
  image: {
    width: "64px",
    margin: "10px"
  },
  textColorPrimary: {
    color: "white"
  },
  textColorSelected: {
    color: "#E5007D !important"
  },
  scrollButtons: {
    color: "white"
  }
}));

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

function getMenuColorText() {
  return {};
}

function getTabs(props) {
  const classes = useStyles();
  return props.map((data, index) => (
    <Tab
      key={`${data.title}${index}`}
      label={data.title}
      to={data.url}
      component={Link}
      {...a11yProps(index)}
      classes={{
        textColorPrimary: classes.textColorPrimary,
        selected: classes.textColorSelected
      }}
    ></Tab>
  ));
}

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.header}>
        <div>
          <img src={props.image} alt="Logo" className={classes.image} />
        </div>
        <Tabs
          classes={{
            root: classes.tabsRoot,
            scrollable: classes.scrollable,
            scrollButtons: classes.scrollButtons
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {getTabs(props.data)}
        </Tabs>
      </AppBar>
    </div>
  );
}
