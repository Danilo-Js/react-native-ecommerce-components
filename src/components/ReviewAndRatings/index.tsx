import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Idiomas suportados
type Language = 'en' | 'pt';

// Traduções do componente
const translations: Record<Language, {
  defaultTitle: string;
  defaultSubTitle?: string;
  placeholderName: string;
  placeholderComment: string;
  placeholderRating: string;
  errorTitle: string;
  errorMessage: string;
  successTitle: string;
  successMessage: string;
  averageTemplate: (avg: number, total: number) => string;
  submitButton: string;
}> = {
  en: {
    defaultTitle: 'Reviews & Ratings',
    defaultSubTitle: 'What our customers say',
    placeholderName: 'Your Name',
    placeholderComment: 'Your Comment',
    placeholderRating: 'Your Rating (1-5)',
    errorTitle: 'Error',
    errorMessage: 'Please fill in all fields and select a rating.',
    successTitle: 'Success',
    successMessage: 'Review added successfully!',
    averageTemplate: (avg, total) => `⭐ ${avg.toFixed(1)} (${total} reviews)`,
    submitButton: 'Submit Review',
  },
  pt: {
    defaultTitle: 'Avaliações & Comentários',
    defaultSubTitle: 'O que nossos clientes dizem',
    placeholderName: 'Seu Nome',
    placeholderComment: 'Seu Comentário',
    placeholderRating: 'Sua Nota (1-5)',
    errorTitle: 'Erro',
    errorMessage: 'Por favor, preencha todos os campos e selecione uma nota.',
    successTitle: 'Sucesso',
    successMessage: 'Avaliação adicionada com sucesso!',
    averageTemplate: (avg, total) => `⭐ ${avg.toFixed(1)} (${total} avaliações)`,
    submitButton: 'Enviar Avaliação',
  },
};

export interface Review {
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
  title?: string;
  subTitle?: string;
  language?: Language;
  styles?: {
    container?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    subTitle?: StyleProp<TextStyle>;
    ratingContainer?: StyleProp<ViewStyle>;
    averageRating?: StyleProp<TextStyle>;
    reviewContainer?: StyleProp<ViewStyle>;
    reviewUser?: StyleProp<TextStyle>;
    reviewRating?: StyleProp<TextStyle>;
    reviewComment?: StyleProp<TextStyle>;
    reviewDate?: StyleProp<TextStyle>;
    inputContainer?: StyleProp<ViewStyle>;
    input?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
  };
}

const ReviewAndRatings: React.FC<ReviewAndRatingsProps> = ({
  reviews,
  averageRating,
  totalReviews,
  onAddReview,
  title,
  subTitle,
  language = 'en',
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const displayTitle = title || t.defaultTitle;
  const displaySubTitle = subTitle || t.defaultSubTitle;

  const [user, setUser] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleAddReview = () => {
    if (!user || rating === null || !comment) {
      Alert.alert(t.errorTitle, t.errorMessage);
      return;
    }
    onAddReview({ user, rating, comment });
    setUser('');
    setRating(null);
    setComment('');
    Alert.alert(t.successTitle, t.successMessage);
  };

  const renderReview = ({ item }: { item: Review }) => (
    <View style={[styles.reviewContainer, customStyles.reviewContainer]}>
      <Text style={[styles.reviewUser, customStyles.reviewUser]}>{item.user}</Text>
      <Text style={[styles.reviewRating, customStyles.reviewRating]}>⭐ {item.rating.toFixed(1)}</Text>
      <Text style={[styles.reviewComment, customStyles.reviewComment]}>{item.comment}</Text>
      <Text style={[styles.reviewDate, customStyles.reviewDate]}>{item.date}</Text>
    </View>
  );

  return (
    <View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>}

      <View style={[styles.ratingContainer, customStyles.ratingContainer]}>
        <Text style={[styles.averageRating, customStyles.averageRating]}>
          {t.averageTemplate(averageRating, totalReviews)}
        </Text>
      </View>

      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: hp('2%') }}
      />

      <View style={[styles.inputContainer, customStyles.inputContainer]}>
        <TextInput
          style={[styles.input, customStyles.input]}
          placeholder={t.placeholderName}
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          style={[styles.input, customStyles.input]}
          placeholder={t.placeholderComment}
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TextInput
          style={[styles.input, customStyles.input]}
          placeholder={t.placeholderRating}
          value={rating !== null ? rating.toString() : ''}
          onChangeText={(v) => setRating(Number(v) || null)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleAddReview}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>{t.submitButton}</Text>
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