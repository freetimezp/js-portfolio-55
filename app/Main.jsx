"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';

const Main = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <main className={theme}>
            {children}
        </main>
    );
}

export default Main;
