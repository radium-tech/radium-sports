import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/mobile/Header';
import NewsNavigation from '../components/mobile/NewsNavigation';
import BottomMenu from '../components/mobile/BottomMenu';
import dataComponents from '../data/dataComponents';

const Home: NextPage = () => (
  <>
    <Header />
    <NewsNavigation items={dataComponents} />
    <BottomMenu />
  </>
);

export default Home;
