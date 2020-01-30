const Styles = () => ({
  root: {
    flexGrow: 1
  },
  backgroundLayer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    backgroundColor: "rgba(50,20,105,0.8)"
  },
  paper: {
    width: "100%"
  },
  container: {
    height: "inherit",
    margin: "0",
    width: "100%",
    padding: "30px"
  },
  versatilLogo: {
    width: "100%",
    marginTop: "60px",
    margin: "auto 0"
  },
  subtitle: {
    fontSize: "14px"
  },
  serviceVideo: {
    display: "flex",
    justifyContent: "center"
  },
  buttonContainer: {
    paddingTop: "50px"
  },
  soundCloudLogo: {
    width: "9%",
    margin: "auto 0",
    marginLeft: "11px"
  }
});

export default Styles;
