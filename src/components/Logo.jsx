import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" aria-label="Página de inicio de Eruditus.group">
    <img src="https://eruditus-apps.sfo2.digitaloceanspaces.com/cdn/logo.svg" alt="Logo de Eruditus.group" className="h-8 w-auto" />
  </Link>
);

export default Logo;