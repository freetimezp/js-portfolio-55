import React from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import styles from './contact.module.css';
import SectionHeader from '../components/section-header/SectionHeader';

const page = () => {
    return (
        <section className={styles.sectionWrap}>
            <SectionHeader
                title="Ge In Touch"
                subtitle="Contact me via any of the list below"
            />

            <div className={`container ${styles.contactWrapper}`}>
                <a href="#" className={styles.contactOption}>
                    <MdOutlineEmail className={styles.contactIcon} />
                </a>
                <a href="#" className={styles.contactOption}>
                    <RiMessengerLine className={styles.contactIcon} />
                </a>
                <a href="#" className={styles.contactOption}>
                    <BsWhatsapp className={styles.contactIcon} />
                </a>
            </div>
        </section>
    );
}

export default page;
