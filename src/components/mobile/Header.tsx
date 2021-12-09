import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <Link href="/" passHref>
          <img src="/icons/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.github}>
        <a
          href="https://github.com/radium-tech/radium-sports"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github.svg" alt="github" />
        </a>
      </div>
    </header>
  );
}
