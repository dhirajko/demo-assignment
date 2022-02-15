/* eslint-disable global-require */
import React from 'react';

const NotFoundPage = () => (
  <div>
    <img src={require('../../assets/images/page-not-found.png')} alt="Page-not-found" />
  </div>
);

export default NotFoundPage;
