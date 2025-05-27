import React from 'react';
import { ViewStyle, TextStyle, ImageStyle, StyleProp } from 'react-native';
interface Category {
    id: string;
    name: string;
    image?: string;
    description?: string;
}
interface CategoryListProps {
    categories: Category[];
    onSelectCategory: (category: Category) => void;
    title: string;
    subTitle?: string;
    styles?: {
        container?: StyleProp<ViewStyle>;
        categoryContainer?: StyleProp<ViewStyle>;
        categoryImage?: StyleProp<ImageStyle>;
        categoryText?: StyleProp<TextStyle>;
        descriptionText?: StyleProp<TextStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
}
declare const CategoryList: React.FC<CategoryListProps>;
export default CategoryList;
