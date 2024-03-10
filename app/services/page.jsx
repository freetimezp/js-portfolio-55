import React from 'react';

import styles from './services.module.css';

import SectionHeader from '../components/section-header/SectionHeader';
import Card from '../components/card/Card';

import { servicesData } from './servicesData';

const page = () => {
    return (
        <section>
            <SectionHeader title="Services" subtitle="The services I offer" />

            <div className={`container ${styles.container}`}>
                {servicesData.map(({ id, icon, title, description }) => (
                    <Card key={id} className={styles.service}>
                        <span>{icon}</span>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default page;
