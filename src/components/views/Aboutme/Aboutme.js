import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import styles from './Aboutme.module.scss';

function Aboutme() {
    return (
        <div>
            <h1>About me</h1>
            <div className={styles.wrapper}>
                <div className={styles.img_wrapper} >
                    <img src="https://i.imgur.com/Dt28z3q.jpg" alt="background" />
                </div>
                <div className={styles.text_wrapper}>
                    <p>Magical jewelry made for you. I specialize in harajuku, decora, fairykei and uchuukei style. I repurpose things, too.</p>
                   <p> My pieces are created usingepoxy resin, metal, polymer clay and acrylics.</p>
                    <p>When I don't pour resin I tap dance or play with my three cats.</p>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;