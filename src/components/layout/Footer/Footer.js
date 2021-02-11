import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (

    <div className={styles.footerWrapper}>
        <div className='socialMedia'>
<a href="https://www.facebook.com/moremagicdecora/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/Nadita_resina" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/moremagic_jewelry/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
        </div>
    </div>
);

export default Footer;