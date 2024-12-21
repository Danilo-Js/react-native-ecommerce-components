import React from 'react';
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
        container?: object;
        categoryContainer?: object;
        categoryImage?: object;
        categoryText?: object;
        descriptionText?: object;
        title?: object;
        subTitle?: object;
    };
}
declare const CategoryList: React.FC<CategoryListProps>;
export default CategoryList;
