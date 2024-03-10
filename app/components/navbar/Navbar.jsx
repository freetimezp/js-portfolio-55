"use client";
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import { GoMoon, GoSun } from 'react-icons/go';

import { ThemeContext } from '@/app/context/ThemeContext';

import styles from './navbar.module.css';

const data = [
    {
        id: 1,
        link: '/',
        caption: 'Home',
    },
    {
        id: 2,
        link: '/about',
        caption: 'About',
    },
    {
        id: 3,
        link: '/services',
        caption: 'Services',
    },
    {
        id: 4,
        link: '/portfolio',
        caption: 'Portfolio',
    },
    {
        id: 5,
        link: '/contact',
        caption: 'Contact',
    },
];

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (window.innerWidth > 600) {
            setOpen(true);
        }
    }, [open]);

    const closeNavHandler = () => {
        if (window.innerWidth <= 600) {
            setOpen(false);
        }
    };

    const changeThemeHandler = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.navLogo}>Studio</Link>

                {open && (
                    <ul className={styles.navItems}>
                        {data.map(({ id, link, caption }) => (
                            <li key={id}>
                                <Link
                                    href={link}
                                    onClick={closeNavHandler}
                                    className={pathname === link ? 'active' : ''}
                                >
                                    {caption}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                <div className={styles.navBtns}>
                    <button className={styles.themeBtn} onClick={changeThemeHandler}>
                        {theme === 'light' ? <GoMoon /> : <GoSun />}
                    </button>
                    <button className={styles.navBtn} onClick={() => setOpen(!open)}>
                        {open ? <AiOutlineClose /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
