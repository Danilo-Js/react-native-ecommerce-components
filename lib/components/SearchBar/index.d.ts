import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    clearButtonText?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        input?: StyleProp<ViewStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
    };
}
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
