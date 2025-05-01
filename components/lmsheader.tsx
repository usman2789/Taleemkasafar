import React from 'react';
import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Lmsheader = () => {
  return (
    <div>
      <header className="relative flex items-center bg-purple-700 p-4 h-16">
        {/* Logo Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">Taleem Ka Safar</h1>
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="ml-auto flex items-center gap-4">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </div>
  );
};

export default Lmsheader;