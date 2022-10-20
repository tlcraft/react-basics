import './card-footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function CardFooter() {
    return <div className="profiles">
        <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={brands('twitter')} />
        </a>
        <a href="https://www.github.com">
            <FontAwesomeIcon icon={brands('github')} />
        </a>
        <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={brands('linkedin')} />
        </a>
    </div>;
}

export default CardFooter;
