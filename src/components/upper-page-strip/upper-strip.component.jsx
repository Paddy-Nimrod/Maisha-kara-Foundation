import React from 'react';
import { Link } from 'react-router-dom';


import { StripContainer } from './upper-strip.style';

const UpperStripComponent = () =>{
    return(
        <StripContainer>
            <Link>Learning Agenda</Link> |
            <Link>The MKC Approach</Link> |
            <Link>Children's Learning Outcome</Link> |
            <Link>Financing Preprimary</Link> |
            <Link>General Resources</Link>
        </StripContainer>
    );
}

export default UpperStripComponent;