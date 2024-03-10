import React from 'react';
import Image from 'next/image';

import styles from './about.module.css';

import AboutImg from '../../public/assets/images/about.jpg';

import SectionHeader from '../components/section-header/SectionHeader';

const page = () => {
    return (
        <div>
            <SectionHeader
                title="About Me"
                subtitle="Who I am and what I do"
            />

            <div className={`container ${styles.aboutContainer}`}>
                <article className={styles.aboutImage}>
                    <Image src={AboutImg} alt="about" />
                </article>

                <article className={styles.aboutContent}>
                    <h4>My name is Jenya, and I`am a Web Developer</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                        consequuntur pariatur iure, a accusamus iste facere, amet in voluptates
                        cum omnis ipsam ducimus cupiditate. Laborum veritatis fuga tenetur
                        aspernatur quis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia
                        a facilis ipsam necessitatibus officiis harum beatae, blanditiis animi
                        quidem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
                        veritatis eius veniam? Velit eos vel, totam blanditiis recusandae
                        inventore deleniti repudiandae reiciendis harum repellat aspernatur,
                        veritatis nemo distinctio odit natus quasi unde labore quidem cupiditate
                        consectetur molestiae ducimus aliquid.
                    </p>

                    <a
                        href="cv.pdf"
                        className={`btn primary ${styles.aboutCta}`}
                        download

                    >
                        Download CV
                    </a>
                </article>
            </div>
        </div>
    );
}

export default page;
