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
    backgroundColor: "rgba(50,20,105,0.7)"
  },
  paper: {
    width: "100%"
  },
  container: {
    height: "inherit",
    margin: "0"
  },
  versatilLogo: {
    width: "100%",
    marginTop: "60px",
    margin: "auto 0"
  },
  subtitle: {
    fontSize: "14px"
  },
  privacy: {
    padding: '24px',
    height: '140px',
    textAlign: 'center'
  }
});

export default Styles;
