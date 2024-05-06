import Link from 'next/link';
import NavigationLinks from './NavigationLinks';
import SearchBox from './SearchBox';
import Geography from './Geography';
import HeaderAccount from './HeaderAccount';
import TempCartBtn from './TempCartBtn';

function Header() {
  return (
    <nav className="bg-gray-800 p-6 flex items-center justify-between relative">
      <div className="flex justify-start items-center space-x-4">
        <span className="text-white text-3xl font-semi-bold">
          <Link href="/">Fragrance</Link>
        </span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
        <NavigationLinks />
      </div>
      <div className="flex justify-end items-center space-x-4">
        <SearchBox />
        <HeaderAccount />
        <TempCartBtn />
        <Geography />
      </div>
    </nav>
  );
}

export default Header;
