import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-grow h-screen items-center justify-center">
      <div>
        <h1>404 Page Not Found</h1>
        <nav className="mb-8 mt-4 flex justify-center">
          <Link className='bg-secondary text-secondary-foreground hover:bg-accent mr-2 mt-8 rounded border px-4 py-2 hover:scale-105' href="/">Back to Home</Link>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
