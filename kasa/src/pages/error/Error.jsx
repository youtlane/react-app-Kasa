import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  

  return (
    <main className="content-error">
      <h2 className="content-error_title">404</h2>
      <p className="content-error_text">Oups! La page que vous demandez n'existe pas.</p>
    
      <Link to="/">
          Retourner sur la page d’accueil
      </Link>
      
    </main>
  );
}
