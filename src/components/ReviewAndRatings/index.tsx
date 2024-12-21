import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewAndRatingsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
  title: string;
  subTitle?: string;
  styles?: {
    container?: object;
    title?: object;
    subTitle?: object;
    reviewContainer?: object;
    reviewUser?: object;
    reviewComment?: object;
    reviewDate?: object;
    reviewRating?: object;
    inputContainer?: object;
    input?: object;
    button?: object;
    buttonText?: object;
    ratingContainer?: object;
    averageRating?: object;
  };
}

const ReviewAndRatings: React.FC<ReviewAndRatingsProps> = ({
  reviews,
  averageRating,
  totalReviews,
  onAddReview,
  title,
  subTitle,
  styles: customStyles = {},
}) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleAddReview = () => {
    if (!user || !rating || !comment) {
      Alert.alert('Error', 'Please fill in all fields and select a rating.');
      return;
    }

    onAddReview({
      user,
      rating,
      comment,
    });

    setUser('');
    setRating(null);
    setComment('');
    Alert.alert('Success', 'Review added successfully!');
  };

  const renderReview = ({ item }: { item: Review }) => (
    <View style={[styles.reviewContainer, customStyles.reviewContainer]}>
      <Text style={[styles.reviewUser, customStyles.reviewUser]}>{item.user}</Text>
      <Text style={[styles.reviewRating, customStyles.reviewRating]}>
        ⭐ {item.rating.toFixed(1)}
      </Text>
      <Text style={[styles.reviewComment, customStyles.reviewComment]}>{item.comment}</Text>
      <Text style={[styles.reviewDate, customStyles.reviewDate]}>{item.date}</Text>
    </View>
  );

  return (
    <View style={[styles.container, customStyles.container]}>
      {/* Title */}
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      {/* Average Rating */}
      <View style={[styles.ratingContainer, customStyles.ratingContainer]}>
        <Text style={[styles.averageRating, customStyles.averageRating]}>
          ⭐ {averageRating.toFixed(1)} ({totalReviews} reviews)
        </Text>
      </View>

      {/* Reviews List */}
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: hp('2%') }}
      />

      {/* Add Review Section */}
      <View style={[styles.inputContainer, customStyles.inputContainer]}>
        <TextInput
          style={[styles.input, customStyles.input]}
          placeholder="Your Name"
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          style={[styles.input, customStyles.input]}
          placeholder="Your Comment"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TextInput
          style={[styles.input, customStyles.input]}
          placeholder="Your Rating (1-5)"
          value={rating ? rating.toString() : ''}
          onChangeText={(value) => setRating(Number(value) || null)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleAddReview}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
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
  ratingContainer: {
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  averageRating: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  reviewContainer: {
    padding: hp('1.5%'),
    marginBottom: hp('1%'),
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  reviewUser: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  reviewRating: {
    fontSize: wp('4%'),
    color: '#f39c12',
  },
  reviewComment: {
    fontSize: wp('3.5%'),
    marginVertical: hp('0.5%'),
  },
  reviewDate: {
    fontSize: wp('3%'),
    color: '#999',
  },
  inputContainer: {
    marginTop: hp('2%'),
  },
  input: {
    height: hp('6%'),
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('2%'),
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: hp('2%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});

export default ReviewAndRatings;
