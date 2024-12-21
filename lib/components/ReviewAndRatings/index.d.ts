import React from 'react';
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
declare const ReviewAndRatings: React.FC<ReviewAndRatingsProps>;
export default ReviewAndRatings;
