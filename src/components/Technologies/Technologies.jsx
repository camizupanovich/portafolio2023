import React from "react";
import './Technologies.css'
import dogApp from '../../assets/images/dog_app.png'
import { Typography } from "@mui/material";
import {SiTypescript,SiExpress,SiSequelize,SiNextdotjs,SiPostman} from 'react-icons/si';
import {DiIllustrator} from 'react-icons/di'

export default function Technologies({ data, backgroundColorSecondary, backgroundColorPrimary, textColor, fontColor, textOposite }) {
    return (
        <>
            <div className="containerTech">
                <div className="data1">
                    {data&&<Typography variant="overline" display="block" sx={{ color: textColor }} >{data.about.phrase[0]}</Typography>}
                    <div className="container-tech">
                        {data && data.technologies.map((e, i) =>
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <i name={e.name} className={e.icon} style={{ color: textColor, fontSize: '36px' }}></i>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >{e.name}</Typography>
                            </div>)}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <SiTypescript style={{ color: textColor, fontSize: '32px' }}/>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >TypeScript</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <SiExpress style={{ color: textColor, fontSize: '32px' }}/>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >Express</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <SiSequelize style={{ color: textColor, fontSize: '32px' }}/>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >Sequelize</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <SiNextdotjs style={{ color: textColor, fontSize: '32px' }}/>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >NextJs</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <SiPostman style={{ color: textColor, fontSize: '32px' }}/>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >Postman</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <DiIllustrator style={{ color: textColor, fontSize: '32px' }}/>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >Illustrator</Typography>
                            </div>

                    </div>
                    <Typography variant="overline" display="block" sx={{ color: textColor, mt:2 }} >{data.about.phrase[1]}</Typography>
                    <div className="responsive-img">
                        <img src={dogApp} alt="macbook" className="macbook"/>
                        <Typography variant="overline" display="block" sx={{ color: textColor, mt:2 }} >{data.about.phrase[2]} <br/>{data.about.phrase[3]}</Typography>
                    </div>
                    {/* <Typography variant="overline" display="block" sx={{ color: fontColor, mt:2 }} ></Typography> */}
                </div>
            </div>
            <div></div>
            <div style={{ padding:'7vh 10vw', backgroundColor:backgroundColorPrimary}}>
            <Typography variant="overline" display="block" sx={{ color: fontColor}} >{data.about.phrase[4]}</Typography>
            </div>
        </>
    )
}
