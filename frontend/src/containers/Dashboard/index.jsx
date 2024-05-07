import React from 'react';
import Header from '../Shared/header';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__card">
        <Header />
        <div className="dashboard__container">
          <span className="dashboard__container__title">Атлас Растений</span>
          <span className="dashboard__container__text">МГУ ППИ</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
