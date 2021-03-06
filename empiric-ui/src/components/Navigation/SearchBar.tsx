import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

import { useSearch } from "../../providers/search";

const SearchBar: React.FC = () => {
  const setSearch = useSearch();

  return (
    <button
      type="button"
      className="flex h-12 w-full items-center space-x-3 rounded-lg bg-white px-4 text-left text-slate-500 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-60 lg:h-14"
      onClick={() => setSearch(true)}
    >
      <SearchIcon aria-hidden="true" className="h-6 w-6 text-slate-400" />
      <span className="flex-auto">Search assets...</span>
      <kbd className="hidden font-sans font-semibold sm:inline-block">
        <kbd title="Command" className="text-slate-300 no-underline">
          {/* This needs to be cross-platform compatible.
            More info at https://github.com/mdn/content/issues/14429.
          */}
          ⌘
        </kbd>{" "}
        K
      </kbd>
    </button>
  );
};

export default SearchBar;
