const SearchBar = () => {
    return (
  <div class="flex items-center bg-gray-100 my-1 md:my-3 rounded-full px-2 py-1 md:px-6 md:py-3">
    <svg
      class="h-6 w-6 text-gray-400"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M22 22l-6-6"></path>
      <circle cx="10" cy="10" r="8"></circle>
    </svg>
    <input
      class="bg-gray-100 ml-4 flex-grow text-gray-700 focus:outline-none"
      type="text"
      placeholder="Search"
    />
  </div>
    );
};

export default SearchBar;