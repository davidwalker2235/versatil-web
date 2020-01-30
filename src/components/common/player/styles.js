const Styles = () => ({
  anchorOriginTopRightSuccess: {
    backgroundColor: 'green',
    '& > *': {
      backgroundColor: 'green'
    },
  },
  anchorOriginTopRightError: {
    backgroundColor: 'red',
    '& > *': {
      backgroundColor: 'red'
    },
  },
});

export default Styles;
