# ⭐ **ReviewAndRatings**

The **ReviewAndRatings** component allows users to view, add, and manage reviews and ratings for a product. It supports displaying an average rating, a list of user reviews, and an interactive form for submitting new reviews.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>ReviewAndRatings</strong></td>
    <td><img src="../../Images/ReviewAndRatings.png" alt="ReviewAndRatings" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop            | Type                        | Required          | Description                                                                                                                                                                                                                    |
| --------------- | --------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `reviews`       | `Review[]`                  | ✅                | Array of reviews to display.                                                                                                                                                                                                   |
| `averageRating` | `number`                    | ✅                | Average rating value displayed at the top.                                                                                                                                                                                     |
| `totalReviews`  | `number`                    | ✅                | Total number of reviews displayed at the top.                                                                                                                                                                                  |
| `onAddReview`   | `(review: Omit<Review, 'id' | 'date'>) => void` | ✅                                                                                                                                                                                                                             | Callback triggered when a user adds a new review. |
| `title`         | `string`                    | ✅                | Title text displayed at the top of the reviews section.                                                                                                                                                                        |
| `subTitle`      | `string`                    | ❌                | Subtitle text displayed below the title.                                                                                                                                                                                       |
| `styles`        | `object`                    | ❌                | Custom styles for `container`, `title`, `subTitle`, `reviewContainer`, `reviewUser`, `reviewComment`, `reviewDate`, `reviewRating`, `inputContainer`, `input`, `button`, `buttonText`, `ratingContainer`, and `averageRating`. |

### 📦 **Review Object Structure**

```ts
interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
```

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
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
        totalReviews={10}
        onAddReview={handleAddReview}
      />
    </View>
  );
};

export default ReviewAndRatingsTest;
```

---

## 🧪 **Testing**

Make sure to test the component after adding it to your project:

```sh
npx react-native run-android
```

or for iOS:

```sh
npx react-native run-ios
```

---

For more information or advanced customization, refer to the [main documentation](../../README.md).
