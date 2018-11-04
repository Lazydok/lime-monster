import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Business';
import ProgramIcon from '@material-ui/icons/OndemandVideo';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import { MainPage, MainDetailMenu } from '../containers'


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  menu: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const Menu = ({ currentMenu, toggleMenu, onSelect = f => f, classes}) => {
    return (
        <div className={classes.menu}>
        <AppBar position="static" color="default">
          <Tabs
              value={currentMenu}
              onChange={(event, value) => onSelect(event, value, currentMenu)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
              <Tab label="Home" icon={<HomeIcon />} href="#" value="HOME"/>
              <Tab label="회사소개" icon={<AboutIcon />} href="#/about" value="ABOUT"/>
              <Tab label="프로그램" icon={<ProgramIcon />} href="#/program" value="PROGRAM"/>
              <Tab label="가맹문의" icon={<PhoneIcon />} href="#/contact" value="CONTACT"/>
              <Tab label="지점안내" icon={<HelpIcon />} href="#/info" value="INFO"/>
          </Tabs>
        </AppBar>
            <MainDetailMenu />
             <TabContainer><MainPage /></TabContainer>
        </div>
    )
}


Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    currentMenu: PropTypes.string,
    onSelect: PropTypes.func
};

export default withStyles(styles)(Menu);