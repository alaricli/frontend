'use client';
import { useUser } from '@clerk/clerk-react';
import Link from 'next/link';
import { useState } from 'react';

function HeaderAccount() {
  const { isSignedIn, user, signOut } = useUser();
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button 
        className=' focus:outline-none'
        onClick={toggleDropdown}
        onBlur={closeDropdown}
      >
        {isSignedIn ? (
          <div>
            Hi {user.firstName || 'there'}
          </div>
        ) : (
          <Link href={"/SignUp"}>
            My Account
          </Link>
        )}
      </button>
      {isOpen && (
        <div className='absolute bg-white shadow-md mt-2 py-2'>
          {isSignedIn ? (
            <>
              <Link href="/Account" className='text-gray-700'>
                My Account
              </Link>
              <button
                onClick={() => {
                  signOut({ redirectTo: '/'});
                  closeDropdown();
                  return false;
                }}
                className="block text-gray-700"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href='SignIn' className='text-gray-700'>
              Sign In
            </Link>
          )}
          </div>
      )}

    </div>
  );
}

export default HeaderAccount;