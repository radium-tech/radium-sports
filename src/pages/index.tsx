import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/mobile/Header';
import NewsNavigation from '../components/mobile/NewsNavigation';
import dataComponents from '../data/dataComponents';

const Home: NextPage = () => (
  <>
    <Header />
    <NewsNavigation items={dataComponents} />
  </>
);

export default Home;
