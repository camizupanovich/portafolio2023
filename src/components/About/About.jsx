import React from "react";
import colors from "../../assets/helpers/colors";
import './About.css'
import Technologies from "../Technologies/Technologies";

export default function About({ data, backgroundColorSecondary, backgroundColorPrimary, textColor, fontColor, textOposite }) {
    return (
        <>
            <div className="bg-img-coffee">
                <strong style={{ color: textOposite, fontSize: '86px', paddingLeft: '20px', fontWeight: 'bolder' }}>COFFEE & CODE LOVER</strong>
            </div>
            {data&&<Technologies backgroundColorSecondary={backgroundColorSecondary} backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} fontColor={fontColor} textOposite={textOposite} data={data} />}
            {/* <div className="bg-img-pet">
                <strong style={{ color: textColor, fontSize: '72px', paddingRight: '20px', fontWeight: 'bolder' }}>PET FRIENDLY</strong>
            </div> */}
            <div className="bg-img-team">
                <strong style={{ color: textOposite, fontSize: '86px', paddingLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}>TEAM PLAYER</strong>
            </div>
            {data&&<div style={{ backgroundColor: colors.text.dark, display: "flex", flexWrap: 'wrap', width: '100vw', justifyContent: 'center', alignItems: 'center', padding: '5vh 10vw', position: 'relative' }}>
                {data.recommendations.map((e, i) =>
                    <figure className="snip1157" key={i}>
                        <blockquote>{e.content}
                            <div className="arrow"></div>
                        </blockquote>
                        <img src="https://alh-webservice.de/bstbilder/3461_1672833327.jpg" alt={e.author} />
                        <div className="author">
                            <h5>{e.author}<span>{e.description}</span></h5>
                        </div>
                    </figure>
                )}
            </div>}
        </>
    )
}
