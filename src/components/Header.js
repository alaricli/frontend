import Link from 'next/link';

function Header() {
  return (
    <nav className="bg-gray-800 p-6 flex items-center justify-between relative">
      <div className="flex justify-start items-center space-x-4">
        <span className="text-white text-xl font-bold">
          <Link href="/">Fragrance</Link>
        </span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
        <ul className="text-white flex">
          <li class="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li class="mr-4">
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end items-center space-x-4">
        <div className="flex items-center bg-white rounded-md">
          <input
            type="text"
            className="px-4 py-1 rounded-l-md"
            placeholder="Search..."
          />
          <button type="button" className="px-4 py-2">
            <svg
              class="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        <Link href="/auth/Account">
          My Account
        </Link>
        <div className="flex items-center">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </div>
        <div className="relative">
          <button
            type="button"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            CA
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
