function SearchBox() {
  return (
    <div className="flex items-center bg-white rounded-md">
      <input
        type="text"
        className="px-4 py-1 rounded-l-md"
        placeholder="Search..."
      />
      <button type="button" className="px-4 py-2">
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBox;