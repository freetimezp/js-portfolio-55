"use client";
import React from 'react';

import styles from './faqs.module.css';

import FaqItem from './FaqItem';
import { faqsData } from './faqsData';

const Faqs = () => {
    return (
        <section className={styles.section}>
            <h2>Frequenttly Asked Questions</h2>
            <p>
                Find answer to some of the frequently asked questions below.
                Contact me if you have more questions.
            </p>

            <div className={`container ${styles.container}`}>
                {faqsData.map(({ id, title, description }) => (
                    <FaqItem key={id} title={title} desc={description} />
                ))}
            </div>
        </section>
    );
}

export default Faqs;
