import React from "react";
import { certificates} from "../data/certificates";
import Gallery from 'react-grid-gallery';

const Certificates = () => {

    return (
        <Gallery images={certificates} backdropClosesModal={true} enableImageSelection={false}/>
    );
};

export default Certificates;
