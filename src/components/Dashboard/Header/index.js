import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import classNames from 'classnames';
import {ADMIN_ROUTES} from './../../../constants';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const menuId = 'primary-search-account-menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedItem: 'Inicio'
    };
  }

  handleProfileMenuOpen = e => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
      </Menu>
    );
  };

  handleToggleSidebar = () => {
    const { showSidebar, onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(!showSidebar);
    }
  };

  renderLinks = () => (ADMIN_ROUTES.map((route, index)=>(
    <Tab key={index} label={route.name} href={route.path}/>
  ))
  )

  handleChange = (event, newValue) => {
    this.state.setValue({selectedItem: newValue});
  };

  render() {
    const { classes, name } = this.props;
    return (
      <div className={classNames(classes.grow)}>
        <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={this.state.selectedItem}
          onChange={this.handleChange}
          aria-label="nav tabs example"
        >
          {this.renderLinks()}
        </Tabs>
      </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Header);
