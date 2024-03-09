import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.css';

import Image1 from '../../../public/assets/images/top-left.png';
import Image2 from '../../../public/assets/images/top-right.png';
import Image3 from '../../../public/assets/images/bottom-left.png';
import Image4 from '../../../public/assets/images/bottom-right.png';

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.headerLeft}>
                <h1>Get your business online the right way!</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum nemo aperiam facere omnis.
                </p>
                <div className={styles.headerCta}>
                    <Link href="/portfolio" className='btn'>Projects</Link>
                    <Link href="/contact" className='btn primary'>Hire Me</Link>
                </div>
            </div>

            <div className={styles.headerRight}>
                <article className={styles.card1}>
                    <Image src={Image1} alt="face" />
                </article>
                <article className={styles.card2}>
                    <Image src={Image2} alt="face" />
                </article>
                <article className={styles.card3}>
                    <Image src={Image3} alt="face" />
                </article>
                <article className={styles.card4}>
                    <Image src={Image4} alt="face" />
                </article>
            </div>
        </header>
    );
}

export default Header;
