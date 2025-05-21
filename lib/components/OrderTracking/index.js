import React from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
// Traduções para título e subtítulo
const translations = {
    en: {
        defaultTitle: 'Order Tracking',
        defaultSubTitle: 'Track your order',
    },
    pt: {
        defaultTitle: 'Rastreamento de Pedido',
        defaultSubTitle: 'Acompanhe seu pedido',
    },
};
const OrderTracking = ({ steps, title, subTitle, language = 'en', styles: customStyles = {}, }) => {
    const t = translations[language] || translations.en;
    const displayTitle = title || t.defaultTitle;
    const displaySubTitle = subTitle || t.defaultSubTitle;
    const renderStep = ({ item }) => {
        let stepDefaultStyle = styles.stepPending;
        if (item.status === 'completed')
            stepDefaultStyle = styles.stepCompleted;
        if (item.status === 'current')
            stepDefaultStyle = styles.stepCurrent;
        // Seleciona estilo customizado conforme status
        const statusCustomStyle = item.status === 'completed'
            ? customStyles.stepCompleted
            : item.status === 'current'
                ? customStyles.stepCurrent
                : customStyles.stepPending;
        return (<View style={[styles.stepContainer, customStyles.stepContainer]}>
        <View style={[
                styles.stepIndicator,
                stepDefaultStyle,
                statusCustomStyle,
            ]}/>
        <View style={styles.stepContent}>
          <Text style={[styles.stepTitle, customStyles.stepTitle]}>{item.title}</Text>
          <Text style={[styles.stepDescription, customStyles.stepDescription]}>
            {item.description}
          </Text>
        </View>
      </View>);
    };
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && (<Text style={[styles.subTitle, customStyles.subTitle]}>
          {displaySubTitle}
        </Text>)}

      <FlatList data={steps} renderItem={renderStep} keyExtractor={(item) => item.id} style={styles.flatList}/>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        padding: wp('5%'),
        backgroundColor: '#fff',
        borderRadius: wp('3%'),
        elevation: 2,
        flex: 1,
    },
    title: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
        textAlign: 'center',
    },
    subTitle: {
        fontSize: wp('4%'),
        color: '#555',
        marginBottom: hp('2%'),
        textAlign: 'center',
    },
    flatList: {
        marginTop: hp('1%'),
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'),
    },
    stepIndicator: {
        width: wp('4%'),
        height: wp('4%'),
        borderRadius: wp('2%'),
        marginRight: wp('3%'),
    },
    stepContent: {
        flex: 1,
    },
    stepTitle: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
    },
    stepDescription: {
        fontSize: wp('3.5%'),
        color: '#666',
    },
    stepCompleted: {
        backgroundColor: '#28a745',
    },
    stepCurrent: {
        backgroundColor: '#ffc107',
    },
    stepPending: {
        backgroundColor: '#ccc',
    },
});
export default OrderTracking;
