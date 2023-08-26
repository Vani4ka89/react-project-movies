import React, {FC} from 'react';
import {Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {IVideo} from "../../interfaces/video.interface";

interface IProps {
    trailer: IVideo;
}

const Video: FC<IProps> = ({trailer}) => {
    const {key, type} = trailer;

    return (
        <div>
            <Container>
                {type &&
                    <div className="ratio ratio-16x9">
                        <iframe src={`https://www.youtube.com/embed/${key}?si=AkJBVRgR699ZLWzR`} title="YouTube video"
                                allowFullScreen>
                        </iframe>
                    </div>}
            </Container>
        </div>
    );
};

export {Video};