import Link from 'next/link';
import NavigationLinks from './NavigationLinks';
import SearchBox from './SearchBox';
import HeaderCart from './HeaderCart';
import Geography from './Geography';
import HeaderAccount from './HeaderAccount';

function Header() {
  return (
    <nav className="bg-gray-800 p-6 flex items-center justify-between relative">
      <div className="flex justify-start items-center space-x-4">
        <span className="text-white text-xl font-bold">
          <Link href="/">Fragrance</Link>
        </span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
        <NavigationLinks />
      </div>
      <div className="flex justify-end items-center space-x-4">
        <SearchBox />
        <HeaderAccount />
        <HeaderCart />
        <Geography />
      </div>
    </nav>
  );
}

export default Header;