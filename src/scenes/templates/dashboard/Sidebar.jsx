import { Box, Button, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import * as React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import AddchartIcon from '@mui/icons-material/Addchart';
import AirplayIcon from '@mui/icons-material/Airplay';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import { setNavigationData } from 'state/index_state';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SidebarTemplate() {
    const theme = useTheme();
    const dispatch = useDispatch();
   
    const [state, setState] = React.useState(false);

    // https://stackblitz.com/run?file=Demo.js
    const ListContent = (
        <Box role="presentation" >
            {/* <Button>Save</Button> */}
            <List>
                {
                    [{ text: "Home", value: 'home', icon: <OtherHousesIcon /> },
                    { text: "Starred", value: 'starred', icon: <AddchartIcon /> },
                    { text: "Saved", value: 'saved', icon: <LocalActivityIcon /> },
                    { text: "User", value: 'user', icon: <AccountBoxIcon /> }].map(({ text, icon , value }, index) => (
                        <ListItemButton key={text} onClick={() => dispatch(setNavigationData(value))}>
                            <ListItemIcon>  {icon}  </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Box>
    );

    return (
        <Drawer docked={false} width={200} variant="permanent" open={state}>
            <DrawerHeader> 
                <IconButton onClick={() => setState(!state)}>
                    {!state ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            {ListContent}
        </Drawer>
    )
}




