import './card-footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function CardFooter() {
    return <div className="profiles">
        <FontAwesomeIcon icon={brands('twitter')} />
        <FontAwesomeIcon icon={brands('github')} />
        <FontAwesomeIcon icon={brands('linkedin')} />
    </div>;
}

export default CardFooter;
