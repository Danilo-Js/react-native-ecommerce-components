import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const SearchBar = ({ onSearch, placeholder = 'Search...', clearButtonText = 'Clear', styles: customStyles = {}, }) => {
    const [query, setQuery] = useState('');
    const handleSearch = () => {
        onSearch(query);
    };
    const handleClear = () => {
        setQuery('');
        onSearch('');
    };
    return (<View style={[styles.container, customStyles.container]}>
      <TextInput style={[styles.input, customStyles.input]} placeholder={placeholder} value={query} onChangeText={setQuery} onSubmitEditing={handleSearch} returnKeyType="search"/>
      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleSearch}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleClear}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>{clearButtonText}</Text>
      </TouchableOpacity>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('2%'),
        backgroundColor: '#f5f5f5',
        borderRadius: wp('2%'),
        marginBottom: hp('2%'),
        elevation: 2,
    },
    input: {
        flex: 1,
        height: hp('6%'),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: wp('2%'),
        paddingHorizontal: wp('4%'),
        marginRight: wp('2%'),
        fontSize: wp('4%'),
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('3%'),
        borderRadius: wp('2%'),
        marginHorizontal: wp('1%'),
    },
    buttonText: {
        color: '#fff',
        fontSize: wp('4%'),
        fontWeight: 'bold',
    },
});
export default SearchBar;
