import React from "react";
import Limboteams from '../../assets/images/projects/limboteams.png';
import FirstAngular from "../../assets/images/projects/First.png";
import MirandaFanPage from "../../assets/images/projects/miranda.png";
import LetsCook from "../../assets/images/projects/letsCook.png";
import WeatherApp from "../../assets/images/projects/weather.png";
import RickAndMorty from "../../assets/images/projects/rickAndMorty.png";
import FindDog from '../../assets/images/projects/findDog.png';
import Finder from '../../assets/images/projects/finder.png';
import Ehupi from '../../assets/images/projects/ehupi.png';
import SpotiApp from '../../assets/images/projects/spotiApp.png';
import './Project.css'
import { Typography, Divider, IconButton } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
//import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {
    FacebookShareButton, FacebookIcon,
    FacebookMessengerIcon, FacebookMessengerShareButton,
    TwitterIcon, TwitterShareButton,
    WhatsappShareButton, WhatsappIcon,
    LinkedinShareButton, LinkedinIcon,
    RedditShareButton, RedditIcon,
    TelegramShareButton, TelegramIcon,
    EmailShareButton, EmailIcon
} from 'react-share'
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
//import ImageCarousel from "../shared/Carousel";

export default function Project({ data, backgroundColorPrimary, backgroundColorSecondary, fontColor, textOposite, blurBgColor }) {
    const [openShare, setOpenShare] = useState(false);
    const [shareUrl, setShareUrl] = useState('');
    const [copy, setCopy] = useState(false)
    const handleShare = (url) => {
        setOpenShare(!openShare);
        if (openShare) {
            setShareUrl('');
        } else {
            setShareUrl(url);
        }
    }
    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                setCopy(true);
                setTimeout(() => {
                    setCopy(false)
                }, 3500);
            })
    };
    const project = [{ name: "First Angular App", image: FirstAngular, link: 'https://first-angular-gamma.vercel.app/home', repository: '', }, { name: 'Miranda Fan Page', image: MirandaFanPage, link: 'https://miranda-fan-page.vercel.app/', repository: '', }, { name: 'Limboteams Clon', image: Limboteams, link: 'https://limboteams-clon.vercel.app/', repository: '', }, { name: 'Lets Cook', image: LetsCook, link: 'https://letscook-omega.vercel.app/', repository: '', }, { name: 'Finder', image: Finder, link: 'https://finder-app-omega.vercel.app/', repository: '', }, { name: 'Findog', image: FindDog, link: 'https://findog-app.vercel.app', repository: '', }, { name: 'Weather App', image: WeatherApp, link: 'https://weather-app-navy-omega.vercel.app/', repository: '', }, { name: 'Spoti App', image: SpotiApp, link: 'https://angular-spoti-app.vercel.app/', repository: '', }, { name: 'Rick & Morti', image: RickAndMorty, link: 'https://rick-and-morty-gold-chi.vercel.app/', repository: '', }, { name: 'Ehupi', image: Ehupi, link: 'https://ehupi-software.vercel.app/', repository: '', }]
    return (
        <>
            <div style={{ width: '100vw', padding: '30px 0px', backgroundColor: backgroundColorPrimary, position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative', maxWidth: '1280px' }}>
                    <Typography variant="overline" display="block" sx={{ color: fontColor, textAlign: 'center', padding: '30px', maxWidth: '600px' }} >{data.project.phrase[0]} </Typography>
                    {project.map((p, i) => (
                        <div key={i} className="imgContainer">
                            <img src={p.image} alt={p.name} className="imgP" />
                            <div className="infoContainer" style={{ backgroundColor: blurBgColor }}>
                                <Typography variant="overline" display="block" sx={{ color: fontColor }} >{p.name} </Typography>
                                <Divider style={{ width: '100%' }} />
                                <div className="socialContainer">
                                    <a rel="noreferrer" href={p.link} target='_blank'>
                                        <IconButton>
                                            <LinkIcon sx={{ color: fontColor }} />
                                        </IconButton>
                                    </a>
                                    {/* <a rel="noreferrer" href={p.repository} target='_blank'>
                                        <IconButton>
                                            <GitHubIcon sx={{ color: fontColor }} />
                                        </IconButton>
                                    </a> */}
                                    <IconButton onClick={() => handleShare(p.link)}>
                                        <ShareIcon sx={{ color: fontColor }} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {openShare && <div onClick={() => handleShare(null)} style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.671)', zIndex: 1101, top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '20px', borderRadius: '6px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '25px', maxWidth: '300px', position: 'relative' }}>
                    <Typography variant="overline" display="block" sx={{ color: 'rgb(80,80,80)', width: '100%', textAlign: 'center', paddingTop: '5px' }} >Compartir.. </Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <FacebookShareButton>
                            <FacebookIcon size={42} round />
                        </FacebookShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Facebook</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <FacebookMessengerShareButton url={shareUrl}>
                            <FacebookMessengerIcon size={42} round />
                        </FacebookMessengerShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Menssenger</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <TwitterShareButton url={shareUrl}>
                            <TwitterIcon size={42} round />
                        </TwitterShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Twitter</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <WhatsappShareButton url={shareUrl}>
                            <WhatsappIcon size={42} round />
                        </WhatsappShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Whatsapp</Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <LinkedinShareButton url={shareUrl}>
                            <LinkedinIcon size={42} round />
                        </LinkedinShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Linkedin</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <RedditShareButton url={shareUrl}>
                            <RedditIcon size={42} round />
                        </RedditShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Reddit</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <TelegramShareButton url={shareUrl}>
                            <TelegramIcon size={42} round />
                        </TelegramShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Telegram</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                        <EmailShareButton url={shareUrl}>
                            <EmailIcon size={42} round />
                        </EmailShareButton>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Email</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center', position: 'relative' }}>
                        <div style={{ height: '49.34px' }}>
                            <IconButton onClick={copiarAlPortapapeles} style={{ width: '42px', height: '42px', backgroundColor: '#f9f9f9' }} >
                                <ContentCopyRoundedIcon />
                            </IconButton>
                        </div>
                        <Typography variant="caption" display="block" sx={{ color: 'rgb(80,80,80)' }} >Copy link</Typography>
                        {copy && <div style={{ position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.479)', color: 'black', textAlign: 'center', width: '42px', height: '42px', borderRadius: '50%', top: '0px', left: '0px', fontSize: '10px',display:'flex',alignItems:'center',justifyContent:'center' }}>Copied</div>}
                    </div>
                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        <IconButton onClick={() => handleShare(null)}>
                            <CloseIcon size={24} />
                        </IconButton>
                    </div>
                </div>
            </div>}

            <div style={{ width: '100vw', padding: '15px 30px', display: 'flex', justifyContent: 'center', backgroundColor: backgroundColorSecondary }}>
                <Typography variant="overline" display="block" sx={{ color: fontColor, textAlign: 'center',maxWidth:'900px' }} >{data.project.phrase[1]}</Typography>
            </div>
            {/* <ImageCarousel images={imagenes}/> */}
            {/* <div style={{ width: '100vw', padding: '15px 30px', display: 'flex', justifyContent: 'center', backgroundColor: backgroundColorPrimary }}>
                <Typography variant="overline" display="block" sx={{ color: fontColor, textAlign: 'center' }} ><span>{data.project.phrase[2]} </span><strong style={{ fontStyle: 'italic' }}> - chatGPT</strong></Typography>
            </div> */}
        </>
    )
}
