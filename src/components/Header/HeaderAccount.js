'use client';
import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react';
import Link from 'next/link';
import { useState } from 'react';

function HeaderAccount() {
  const { isSignedIn, user, signOut } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className=" focus:outline-none" onClick={toggleDropdown}>
        {isSignedIn ? (
          <div>Hi {user.firstName || 'there'}</div>
        ) : (
          <Link href={'/Account'}>My Account</Link>
        )}
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-md mt-2 py-2 text-gray-700">
          {isSignedIn ? (
            <>
              <Link href="/Account">My Account</Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      )}
    </div>
  );
}

export default HeaderAccount;