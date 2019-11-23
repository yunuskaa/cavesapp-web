import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingHeader from './shared/components/Header';

import Landing from './pages/Landing';

function BaseLanding() {
  const menuItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '/features',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'FAQ',
      link: '/faq',
    },
  ];
  return (
    <>
      <LandingHeader items={menuItems} />
      <div className="landing-content">
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </>
  );
}

export default BaseLanding;
