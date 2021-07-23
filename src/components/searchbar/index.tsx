import React from 'react';

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
    <div>
      <input
        id="search-input"
        type="search"
        value={value}
        placeholder="enter movie title"
        onChange={(event) => setValue(String(event.target.value))}
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <button id="search-button" onClick={() => onSearch(value.trim())}>
        Search
      </button>
    </div>
  );
};
