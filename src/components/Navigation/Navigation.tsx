import React from 'react';
import {Button} from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
            {<div>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" href="#outlined-buttons">
                    Link
                </Button>
            </div>}
        </div>
    );
};

export {Navigation};