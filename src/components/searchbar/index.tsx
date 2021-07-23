import React from 'react';
import './searchbar.css'

type SearchBarType = {
  onSearch: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarType> = ({ onSearch }) => {
  const [value, setValue] = React.useState<string>('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value.trim());
    }
  };

  return (
    <div className="searchbar-wrapper">
      <input
        className="input-wrapper"
        id="search-input"
        type="search"
        value={value}
        placeholder="enter movie title to search"
        onChange={(event) => setValue(String(event.target.value))}
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <button id="search-button" className="search-button" onClick={() => onSearch(value.trim())}>
        Search
      </button>
    </div>
  );
};
