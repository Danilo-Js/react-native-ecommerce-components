import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
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
declare const ReviewAndRatings: React.FC<ReviewAndRatingsProps>;
export default ReviewAndRatings;
