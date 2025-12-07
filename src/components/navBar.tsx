import React, { useState } from 'react';
import styles from './navBar.module.css';

const NavBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

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
        <nav className={styles.navbar}>
            <a href="/" className={styles['navbar-logo']}>
                <img className={styles['navbar-logo-img']} src="../../public/reddit.png" alt="Reddit" />
                <span className="text-accent">Reddit</span><span>Minimal</span>
            </a>
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
        </nav>
    );
};

export default NavBar;