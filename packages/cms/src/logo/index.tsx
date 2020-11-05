import React from 'react';
import css from './index.module.css';

const Logo: React.FC = () => (
  <div className={css.logo}>
    <img src="/static/logo.svg" width="50" height="256" alt="Alv Logo" />
  </div>
);

export default Logo;
