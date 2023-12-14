import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SidebarItem = ({ to, icon, primary, secondary }) => {
  const location = useLocation();

  return (
    <ListItemButton
      component={RouterLink}
      to={to}
      selected={location.pathname === to}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItemButton>
  );
};

export const mainListItems = (
  <React.Fragment>
    <SidebarItem to="/" icon={<DashboardIcon />} primary="Dashboard" />
    {/* <SidebarItem to="/user" icon={<ShoppingCartIcon />} primary="Orders" /> */}
    <SidebarItem to="/tasks" icon={<PeopleIcon />} primary="Tasks" />
    {/* <SidebarItem to="/reports" icon={<BarChartIcon />} primary="Reports" />
    <SidebarItem to="/integrations" icon={<LayersIcon />} primary="Integrations" /> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <SidebarItem to="/current-month" icon={<AssignmentIcon />} primary="Current month" />
    <SidebarItem to="/last-quarter" icon={<AssignmentIcon />} primary="Last quarter" />
    <SidebarItem to="/year-end-sale" icon={<AssignmentIcon />} primary="Year-end sale" /> */}
  </React.Fragment>
);

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
};