import React, { ChangeEvent } from "react";

type InputSearchProps = {
  searchInput: string;
  handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch: React.FC<InputSearchProps> = ({ searchInput, handleSearchInputChange }) => {
  return (
    <>
      <section>
        <div className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-mainBlue focus:border-mainBlue block w-full ps-10 p-2.5"
              placeholder="Search data"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          {/* <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-mainBlue rounded-lg border border-mainBlue hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 flex">
            <p className=" font-medium mr-2">Search</p>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default InputSearch;
