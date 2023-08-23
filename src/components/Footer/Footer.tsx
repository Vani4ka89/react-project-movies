import React, {FC} from 'react';

import img from '../../assets/images/tmdb.png';
import '../../styles/components/Footer.css';

const Footer: FC = () => {
    return (
        <div className={"box"}>
            <div className={"text"}>
                <img src={img} alt={"logo"}/>
                <div>This product uses the TMDB API but is not endorsed or certified by TMDB.</div>
            </div>
        </div>
    );
};

export {Footer};