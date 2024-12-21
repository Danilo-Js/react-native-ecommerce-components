import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CategoryList = ({ categories, onSelectCategory, title, subTitle, styles: customStyles = {}, }) => {
    const renderCategory = ({ item }) => (<TouchableOpacity style={[styles.categoryContainer, customStyles.categoryContainer]} onPress={() => onSelectCategory(item)}>
      {item.image && (<Image source={{ uri: item.image }} style={[styles.categoryImage, customStyles.categoryImage]}/>)}
      <View>
        <Text style={[styles.categoryText, customStyles.categoryText]}>{item.name}</Text>
        {item.description && (<Text style={[styles.descriptionText, customStyles.descriptionText]}>
            {item.description}
          </Text>)}
      </View>
    </TouchableOpacity>);
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: hp('3%') }}/>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('5%'),
        backgroundColor: '#fff',
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'),
        padding: wp('3%'),
        backgroundColor: '#f9f9f9',
        borderRadius: wp('2%'),
        elevation: 2,
    },
    categoryImage: {
        width: wp('15%'),
        height: hp('8%'),
        borderRadius: wp('2%'),
        marginRight: wp('3%'),
    },
    categoryText: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
    },
    descriptionText: {
        fontSize: wp('3.5%'),
        color: '#555',
    },
    title: {
        fontSize: wp('6%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    subTitle: {
        fontSize: wp('4.5%'),
        color: '#777',
        marginBottom: hp('2%'),
    },
});
export default CategoryList;
