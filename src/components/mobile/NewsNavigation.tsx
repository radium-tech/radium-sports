import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/components/NewsNavigation.module.css';

interface NewsNavigationProps {
  items: {
    title: string,
    path: string,
  }[]
}

export default function NewsNavigation({ items }: NewsNavigationProps) {
  const router = useRouter();

  return (
    <nav className="news-navigation">
      <ul className={styles.newsItems}>
        {items.map(({ path, title }) => (
          <li key={title} className={styles.item}>
            <Link href={path} passHref>
              <span
                className={router.pathname === path ? styles.active : ''}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
