const Styles = () => ({
  accept: {
    fontSize: "14px"
  },
  cancel: {
    fontSize: "14px"
  },
  textRoot: {
    padding: '24px',
    textAlign: 'center'
  },
  flagRoot: {
    padding: '24px 0 0 24px;'
  },
  flag: {
    backgroundColor: "transparent",
    width: "25px",
    height: "25px",
    boxShadow: "none",
    marginLeft: '10px',
    "&:hover": {
      backgroundColor: "transparent",
    },
    cursor: 'pointer'
  },
  buttonsRoot: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default Styles;