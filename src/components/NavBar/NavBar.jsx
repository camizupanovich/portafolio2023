import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './NavBar.css'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DownloadIcon from '@mui/icons-material/Download'
import avatar from '../../assets/images/pic.png';
import { Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SharedButton from '../shared/SharedButton'

export default function NavBar(props) {
    const { window } = props;
    const drawerWidth = 240;
    const handleDrawerToggle = () => {
        props.handleDrawerToggle()
    };
    const handleChangeMode = (e) => { props.toggleTheme(e); }
    const handleScroll=(e)=>{
        props.handleScroll(e)
    }
    const theming = createTheme({
        palette: {
            primary: {
                main: props.textColor
            }
        },
    });
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: props.backgroundColorSecondary }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar alt="Camila Zupanovich" src={avatar}
                    sx={{ width: 120, height: 120, mt: 3, mb: 2 }} />
                <Typography variant="h6" sx={{ color: props.fontColor }}>
                    Camila Zupanovich
                </Typography>
                <Typography variant="span" sx={{ mb: 2, color: props.textColor, opacity: 0.7 }}>
                    Developement services
                </Typography>
            </div>
            <ThemeProvider theme={theming}>
                <a rel="noreferrer" style={{textDecoration:'none'}} href={props.data.cv.url} download="CamilaZupanovich"><Button variant="outlined" size="small" startIcon={<DownloadIcon />} sx={{ mb: 2}}>{props.data.cv.title}</Button></a>
            </ThemeProvider>
            <Divider />
            <List>
                {props.data.navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', color: props.fontColor }} onClick={()=>handleScroll(item.id)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: props.backgroundColorSecondary }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: props.backgroundColorPrimary }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, color: props.textColor }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                    {props.theme === 'dark' ?
                        <IconButton aria-label="Example" sx={{ color: 'white' }} onClick={handleChangeMode}>
                            <WbSunnyOutlinedIcon />
                        </IconButton> :
                        <IconButton aria-label="Example" sx={{ color: props.textColor }} onClick={handleChangeMode}>
                            <DarkModeOutlinedIcon />
                        </IconButton>}<SharedButton title={props.data.project.shareTitle} textColor={props.textColor} fontColor={props.fontColor}/>
                        </div>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={props.mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: 'block'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: props.backgroundColorSecondary },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

