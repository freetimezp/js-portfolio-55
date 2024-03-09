"use client";
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './testimonials.module.css';

import { testimonialsData } from './testimonialsData';

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <h2>Testimonials</h2>
            <p>Check out what my clients say</p>

            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonialsData.map(({ id, name, profession, avatar, quote }) => (
                    <SwiperSlide key={id} className={styles.slide}>
                        <div className={styles.avatarWrapper}>
                            <div className={styles.avatar}>
                                <Image src={avatar} alt="avatar" />
                            </div>
                        </div>
                        <h6 className={styles.name}>{name}</h6>
                        <small className={styles.job}>{profession}</small>
                        <p className={styles.quote}>{quote}</p>
                    </SwiperSlide>
                ))}

                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    );
}

export default Testimonials;
