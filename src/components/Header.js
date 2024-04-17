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
            <Link href="/About">About Us</Link>
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
            Search
          </button>
        </div>
        <button type="button" className="text-white">
          My Account
        </button>
        <div className="flex items-center">Cart</div>
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
