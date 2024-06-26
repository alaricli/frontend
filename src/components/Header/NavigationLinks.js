import Link from 'next/link';

function NavigationLinks() {
  return (
    <ul className="text-white flex">
      <li className="mr-4">
        <Link href="/">Home</Link>
      </li>
      <li className="mr-4">
        <Link href="/Shop">Shop</Link>
      </li>
      <li>
        <Link href="/About">About</Link>
      </li>
    </ul>
  );
}

export default NavigationLinks;