import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
const CategoryList = ({ categories, onSelectCategory, title, subTitle, styles: customStyles = {}, }) => {
    const renderCategory = ({ item }) => (<TouchableOpacity style={[styles.categoryContainer, customStyles.categoryContainer]} onPress={() => onSelectCategory(item)}>
      {item.image && (<View style={styles.imageWrapper}>
          <Image source={{ uri: item.image }} style={[styles.categoryImage, customStyles.categoryImage]} resizeMode="contain"/>
        </View>)}
      <View>
        <Text style={[styles.categoryText, customStyles.categoryText]}>
          {item.name}
        </Text>
        {item.description ? (<Text style={[styles.descriptionText, customStyles.descriptionText]}>
            {item.description}
          </Text>) : null}
      </View>
    </TouchableOpacity>);
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle ? (<Text style={[styles.subTitle, customStyles.subTitle]}>
          {subTitle}
        </Text>) : null}
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={item => item.id} contentContainerStyle={{ paddingBottom: hp('3%') }}/>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('5%'),
        backgroundColor: '#fff',
    },
    imageWrapper: {
        width: wp('15%'),
        height: hp('8%'),
        marginRight: wp('3%'),
        // opcional: adicionar background para destacar ícone branco
        // backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '100%',
        height: '100%',
        borderRadius: wp('2%'),
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
