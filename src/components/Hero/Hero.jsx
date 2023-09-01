import React from "react";
import { Typography } from "@mui/material";
import './Hero.css'
export default function Hero({ data,textColor,fontColor,textOposite }){
    return(<div style={{ color: fontColor, padding: '30px'}} className="bg-img-hero">
    <Typography variant="h1" display="block" sx={{ color: textColor, maxWidth: '700px', marginTop: '90px' }} >
        {data.hero.title}
    </Typography>
    <Typography variant="h2" display="block" gutterBottom sx={{ color: textOposite, maxWidth: '700px' }} >
       {data.hero.subtitle}
    </Typography>
    <Typography variant="overline" display="block" gutterBottom sx={{ color: fontColor, maxWidth: '700px' }} >
        {data.hero.description}
    </Typography>
    {/* <img style={{position:'absolute',bottom:'0vh',right:'0vw',width:'50vw'}} src={img}/> */}
</div>)

}