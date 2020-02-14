import React from 'react';

import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';


const SocialBar = () => (
    <div className="social">
        <a href="https://www.instagram.com/theustech/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://open.spotify.com/user/matheus6114"><FontAwesomeIcon icon={faSpotify} /></a>
        <a href="https://www.youtube.com/channel/UC-vFXimWXa4VG_9L1aM0qTg"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://soundcloud.com/theustech"><i className="fab fa-soundcloud"><FontAwesomeIcon icon={faSoundcloud} /></i></a>
    </div>
);

export default SocialBar;