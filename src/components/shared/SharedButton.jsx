import React from "react";
import { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
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

export default function SharedButton({ fontColor,textColor }) {

    const [openShare, setOpenShare] = useState(false);
    const shareUrl = 'https://camila-zupanovich.vercel.app/';
    const handleShare = () => {
        setOpenShare(!openShare);
    }
    return (<>
        <IconButton onClick={handleShare}>
            <ShareIcon sx={{ color: textColor }} />
        </IconButton>
        {openShare && <div onClick={handleShare} style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.671)', zIndex: 1101, top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '20px', borderRadius: '6px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '25px', maxWidth: '300px', position: 'relative' }}>
                <Typography variant="overline" display="block" sx={{ color: 'rgb(80,80,80)', width: '100%', textAlign: 'center', paddingTop: '5px' }} >Compartir.. </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', with: '70px', alignItems: 'center' }}>
                    <FacebookShareButton url={shareUrl}>
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
                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <IconButton onClick={handleShare}>
                        <CloseIcon size={24} />
                    </IconButton>
                </div>
            </div>
        </div>}
    </>)
}