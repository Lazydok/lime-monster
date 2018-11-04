import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List'
import { DetailMenuItems } from '../containers'

const styles = {
  list: {
    width: 260,
  },
  f: {
    width: 'auto',
  },
};

const DetailMenu = ({currentMenu, toggleMenu, toggleDrawer = f => f}) => {
    return (
        <SwipeableDrawer
          open={toggleMenu}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
                toggleDrawer(false)
            }}
            onKeyDown={() => toggleDrawer(false)}
          >
            <div>
                <List>
                    <DetailMenuItems/>
                </List>
            </div>
          </div>
        </SwipeableDrawer>
    )
}


DetailMenu.propTypes = {
  //classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailMenu)