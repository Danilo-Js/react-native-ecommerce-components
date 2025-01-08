/* eslint-disable prettier/prettier */
import React from "react";
import { View } from "react-native";
import { ReviewAndRatings } from "react-native-ecommerce-components/lib";

const initialReviews = [
  {
    id: "1",
    user: "Alice",
    rating: 4.5,
    comment: "Great product!",
    date: "2024-06-20",
  },
  {
    id: "2",
    user: "Bob",
    rating: 5,
    comment: "Exceeded my expectations!",
    date: "2024-06-19",
  },
  {
    id: "3",
    user: "Charlie",
    rating: 4.0,
    comment: "Good value for the price.",
    date: "2024-06-18",
  },
  {
    id: "4",
    user: "Diana",
    rating: 3.5,
    comment: "Decent, but could be better.",
    date: "2024-06-17",
  },
  {
    id: "5",
    user: "Ethan",
    rating: 5,
    comment: "Absolutely loved it!",
    date: "2024-06-16",
  },
  {
    id: "6",
    user: "Fiona",
    rating: 2.5,
    comment: "Not worth the price.",
    date: "2024-06-15",
  },
  {
    id: "7",
    user: "George",
    rating: 4.8,
    comment: "Highly recommend this product.",
    date: "2024-06-14",
  },
  {
    id: "8",
    user: "Hannah",
    rating: 3.0,
    comment: "It’s okay, nothing special.",
    date: "2024-06-13",
  },
  {
    id: "9",
    user: "Ian",
    rating: 4.2,
    comment: "Solid performance, minor flaws.",
    date: "2024-06-12",
  },
  {
    id: "10",
    user: "Jasmine",
    rating: 5,
    comment: "Perfect in every way!",
    date: "2024-06-11",
  },
];

const ReviewAndRatingsTest = () => {
  const handleAddReview = (review) => {
    console.log("New Review Added:", review);
  };

  return (
    <View style={{ flex: 1 }}>
      <ReviewAndRatings
        title="Product Reviews"
        subTitle="See what others are saying"
        reviews={initialReviews}
        averageRating={4.8}
        totalReviews={2}
        onAddReview={handleAddReview}
      />
    </View>
  );
};

export default ReviewAndRatingsTest;
