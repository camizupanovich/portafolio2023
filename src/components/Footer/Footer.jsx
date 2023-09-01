import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from "@mui/joy";
export default function Footer(props) {
    const handleScroll = (e) => {
        props.handleScroll(e)
    }
    const theming = createTheme({
        palette: {
            primary: {
                main: props.textColor
            }
        },
    });
    return (<>{props.data&&
        <footer style={{ display: 'flex', flexDirection: 'column', width: '100vw', padding: '160px 0px 30px 0px', alignItems: 'center' }}>
                <ThemeProvider theme={theming}>
                    <a rel="noreferrer" href={props.data.cv.url} style={{textDecoration:'none'}} download="CamilaZupanovich"><Button variant="contained" size="small" startIcon={<DownloadIcon />} sx={{ mt: 2, mb: 3 }}>{props.data.cv.title}</Button></a>
                </ThemeProvider>
            <div>
                <a rel="noreferrer" href='https://wa.me/+541161237441' target='_blank'><IconButton aria-label="Example" sx={{ color: props.textColor, margin: '5px' }}>
                    <WhatsAppIcon sx={{ fontSize: 36 }} />
                </IconButton>
                </a>
                <a rel="noreferrer" href='https://www.linkedin.com/in/camila-antonela-florencia-zupanovich/' target='_blank'><IconButton aria-label="Example" sx={{ color: props.textColor, margin: '5px' }}>
                    <LinkedInIcon sx={{ fontSize: 36 }} />
                </IconButton>
                </a>
                <a rel="noreferrer" href='https://github.com/camizupanovich' target='_blank'><IconButton aria-label="Example" sx={{ color: props.textColor, margin: '5px' }}>
                    <GitHubIcon sx={{ fontSize: 36 }} />
                </IconButton>
                </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end', flexWrap: 'wrap', maxWidth: '600px',marginTop:'30px',marginBottom:'30px' }}>
                {props.data.navItems.map((item) => (
                    <ListItem key={item.name} disablePadding style={{ width: 'fit-content', }}>
                        <ListItemButton sx={{ textAlign: 'center', color: props.fontColor, padding: '10px ',fontSize:'18px' }} onClick={() => handleScroll(item.id)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </div>
            <div style={{ width: '100%',textAlign:'center',paddingBottom:'3vh',paddingLeft:'20px',paddingRight:'20px',fontSize:'16px' }}>
                {props.data.footer.extra.map((item) => (
                    <a key={item.name} href={item.url} style={{ textDecoration: 'none' }} >
                        <span style={{ color: props.fontColor,margin:'7px',opacity:0.6 }}>{item.name}</span>
                    </a>
                ))}
                {props.data.footer.repoHistory.map((item) => (
                    <a key={item.name} rel="noreferrer" href={item.url} target="_blank" style={{ textDecoration: 'none', color: props.fontColor,margin:'7px',opacity:0.6 }} >{item.name}
                    </a>
                ))}
            </div>
            <Divider style={{ width: '100%' }} />
            <p style={{ color: props.textColor, paddingLeft: '15vw', paddingRight: '15vw', textAlign: 'center' }}>{props.data.footer.policy}</p>
        </footer>}</>
    )
}