// This page will have a header and 3 buttons to 'my collection' display, 'add new pop' form, and a wishlist page with a separate display and form 

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Dom Dom&#39;s Pops</h1>
      <p><Link to='./Collection'>My Collection </Link></p>
      <p><Link to='./PopForm'>Add a New Pop </Link></p>
      <p><Link to='./Wishlist'>My Wishlist </Link></p>
    </div>
  );
}
