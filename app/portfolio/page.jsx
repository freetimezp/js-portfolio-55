/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from 'react';

import SectionHeader from '../components/section-header/SectionHeader';
import CategoryButtons from './CategoryButtons';

import styles from './portfolio.module.css';

import { portfolioData } from './portfolioData';
import Projects from './Projects';

const page = () => {
    const [projects, setProjects] = useState(portfolioData);
    const categories = portfolioData.map(item => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filterProjectsHandler = (category) => {
        if (category === 'all') {
            setProjects(portfolioData);
            return;
        }

        const filteredProjects = portfolioData.filter(project => project.category === category);
        setProjects(filteredProjects);
    };

    return (
        <section>
            <SectionHeader
                title="My Projects"
                subtitle="My recent projects. Filter with the buttons."
            />

            <div className="container">
                <CategoryButtons
                    categories={uniqueCategories}
                    onFilterProjects={filterProjectsHandler}
                />

                <Projects projects={projects} />
            </div>
        </section>
    );
}

export default page;
