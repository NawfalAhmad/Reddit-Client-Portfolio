import React, { useState, useEffect } from 'react';
import styles from './navBar.module.css';

const NavBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchQuery);
        // clean the search input after search
        setSearchQuery('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <nav className={styles.navbar}>

                {/* MOBILE: hamburger button */}
                {isMobile && (
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span></span><span></span><span></span>
                    </button>
                )}

                <a href="/" className={styles['navbar-logo']}>
                    <img className={styles['navbar-logo-img']} src="../../public/reddit.png" alt="Reddit" />
                    <span className="text-accent">Reddit</span><span>Minimal</span>
                </a>

                {/* DESKTOP SEARCH */}
                {!isMobile && (
                    <>
                        <div className={styles['navbar-search']}>
                            <input
                                type="text"
                                className={styles["navbar-search-input"]}
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className={styles["navbar-search-button"]}
                                onClick={handleSearch}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className={styles["navbar-search-icon"]}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <button className={styles["navbar-button"]}>Something</button>
                    </>
                )}

            </nav>


            {/* MOBILE SIDE PANEL */}
        </>
    );
};

export default NavBar;