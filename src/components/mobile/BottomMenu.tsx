import React from 'react';
import OptionBottomMenuModel from '../../../model/optionBottomMenu';
import styles from '../../styles/components/BottomMenu.module.css';
import OptionBottomMenu from './OptionBottomMenu';

const menuBottomOptions = [
  {
    title: 'home',
    iconPath: '/icons/home.svg',
    link: '/',
  },
  {
    title: 'search',
    iconPath: '/icons/search.svg',
    link: '/search',
  },
  {
    title: 'notifications',
    iconPath: '/icons/bell.svg',
    link: '/notifications',
  },
  {
    title: 'profile',
    iconPath: '/icons/user.svg',
    link: '/profile',
  },
];

export default function BottomMenu() {
  const options = menuBottomOptions.map((option) => (
    new OptionBottomMenuModel(option.title, option.iconPath, option.link)
  ));

  return (
    <div className={styles.bottomMenu}>
      <div className={styles.wrapper}>
        {
          options.map((option) => (
            <OptionBottomMenu
              key={option.title}
              option={new OptionBottomMenuModel(option.title, option.iconPath, option.link)}
            />
          ))
        }
      </div>
    </div>
  );
}
