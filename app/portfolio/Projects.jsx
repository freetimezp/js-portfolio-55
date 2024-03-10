"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './portfolio.module.css';

import Card from '../components/card/Card';

const Projects = ({ projects }) => {
    return (
        <div className={styles.projects}>
            {projects.map(({ id, category, title, desc, image, demo, github }) => (
                <Card key={id} className={styles.project}>
                    <div className={styles.image}>
                        <Image src={image} alt="project" />
                    </div>
                    <div className={styles.content}>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                        <div className={styles.cta}>

                            <Link
                                href={demo}
                                className={`${styles.btn}`}
                                rel="noopener noreferrer"
                            >
                                Demo
                            </Link>
                            <Link
                                href={demo}
                                className={`${styles.btn} ${styles.primary}`}
                                rel="noopener noreferrer"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default Projects;
