import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AnnouncementIcon from '@material-ui/icons/Announcement';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PublicIcon from '@material-ui/icons/Public';




// import India from './Components/India';
// import Article from './Components/Article';
// import News from './Components/News';
// import World from './Components/World'
// import States from './Components/States'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="World" icon={<PublicIcon />} {...a11yProps(0)} />
          <Tab label="India" icon={<FlagRoundedIcon />} {...a11yProps(1)} />
          <Tab label="States" icon={<PinDropIcon />} {...a11yProps(2)} />
          <Tab label="News" icon={<AnnouncementIcon />} {...a11yProps(3)} />
          <Tab label="Articles" icon={<MenuBookIcon />} {...a11yProps(4)} />
          {/* <Tab label="About me" icon={<PersonPinIcon />} {...a11yProps(5)} /> */}
          {/* <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* <World /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <India /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <States /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* <News /> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* <Article /> */}
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
