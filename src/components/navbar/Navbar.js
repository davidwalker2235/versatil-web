import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated, config } from "react-spring";
import Fab from "@material-ui/core/Fab";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import cataloniaFlag from "../../configuration/images/cataloniaFlag.png";
import spanishFlag from "../../configuration/images/spanishFlag.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Translate } from "react-redux-i18n";
import { changeLanguaje } from "../../actions/navBar/navBarActionsAsync";

const NavBar = styled(animated.nav)`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
  display: flex;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const MenuContainer = styled.div`
  width: 90%;
`;

const FlagContainer = styled.div`
  width: 10%;
  min-width: 64px;
  align-items: center;
  display: flex;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-family: Montserrat, sans-serif;
    font-size: 18px;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 850px) {
    display: none;
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    width: "25px",
    height: "25px"
  },
  menu: {
    backgroundColor: "rgba(50, 20, 105, 0.7)"
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    props.changeLanguaje(event.target.alt);
    setAnchorEl(null);
  };

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <div>
      <NavBar style={barAnimation}>
        <MenuContainer>
          <FlexContainer>
            <Brand />
            <NavLinks style={linkAnimation}>
              {props.navBarData &&
                props.navBarData.map((elem, index) => (
                  <a key={index} href={elem.url}>
                    {console.log(elem.key)}
                    <Translate value={`navBar.${elem.key}`} />
                  </a>
                ))}
            </NavLinks>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </MenuContainer>
        <FlagContainer>
          <Fab className={classes.root} aria-label="add" onClick={handleClick}>
            <img className={classes.root} src={props.flag} alt="Company Logo" />
          </Fab>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{
              list: classes.menu
            }}
          >
            <MenuItem id="catalan" onClick={handleClose}>
              <img className={classes.root} src={cataloniaFlag} alt="ca" />
            </MenuItem>
            <MenuItem id="spanish" onClick={handleClose}>
              <img className={classes.root} src={spanishFlag} alt="es" />
            </MenuItem>
          </Menu>
        </FlagContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
        data={props.navBarData}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  languaje: state.common.languaje,
  flag: state.common.flag,
  navBarData: state.common.navBarData
});

const mapDispatchToProps = dispatch => ({
  changeLanguaje: value => dispatch(changeLanguaje(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
