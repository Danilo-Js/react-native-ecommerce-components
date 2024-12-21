import React from 'react';
interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    clearButtonText?: string;
    styles?: {
        container?: object;
        input?: object;
        button?: object;
        buttonText?: object;
    };
}
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
