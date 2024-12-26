import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface NewClientProps {
  onSubmit: (data: Record<string, string>) => void;
  fields: string[];
  title: string;
  subTitle?: string;
  styles?: {
    container?: object;
    input?: object;
    button?: object;
    buttonText?: object;
    title?: object;
    subTitle?: object;
  };
}

const NewClient: React.FC<NewClientProps> = ({ onSubmit, fields, title, subTitle, styles: customStyles = {} }: NewClientProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const missingFields = fields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      Alert.alert('Error', `Please fill in all fields: ${missingFields.join(', ')}`);
      return;
    }

    onSubmit(formData);
    setFormData({});
    Alert.alert('Success', 'Customer registered successfully!');
  };

  return (
    <ScrollView style={[styles.container, customStyles.container]} contentContainerStyle={{ paddingBottom: hp('10%') }}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}
      {fields.map((field) => (
        <TextInput
          key={field}
          style={[styles.input, customStyles.input]}
          placeholder={field}
          value={formData[field] || ''}
          onChangeText={(value) => handleInputChange(field, value)}
        />
      ))}
      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleSubmit}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
  },
  input: {
    height: hp('6%'),
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('2%'),
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    borderRadius: wp('2%'),
    marginBottom: hp('3%'),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  title: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  subTitle: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('2%'),
  },
});

export default NewClient;
