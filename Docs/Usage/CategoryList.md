# 📚 **CategoryList**

The **CategoryList** component displays a list of product categories in an organized and customizable way.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>CategoryList</strong></td>
    <td><img src="../Images/CategoryList.png" alt="CategoryList" width="200"/></td>
  </tr>
</table>


---

## 🛠️ **Props**

| Prop              | Type                 | Required | Description                                              |
|--------------------|----------------------|----------|----------------------------------------------------------|
| `categories`      | `Category[]`         | ✅       | Array of category objects to display.                   |
| `onSelectCategory`| `(category: Category) => void` | ✅ | Callback function when a category is selected.          |
| `title`           | `string`             | ✅       | Title text displayed at the top of the list.            |
| `subTitle`        | `string`             | ❌       | Subtitle text displayed below the title.               |
| `styles`          | `object`             | ❌       | Custom styles for container, categoryContainer, categoryImage, categoryText, descriptionText, title and subTitle.      |

### 📦 **Category Object Structure**

```ts
interface Category {
  id: string;
  name: string;
  image?: string;
  description?: string;
}
```

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from "react";
import { View, Alert } from "react-native";
import { CategoryList } from "react-native-ecommerce-helper/lib";

const App = () => {
  const categories = [
    {
      id: "1",
      name: "Electronics",
      image: "https://via.placeholder.com/100",
      description: "Gadgets, devices, and accessories",
    },
    {
      id: "2",
      name: "Fashion",
      image: "https://via.placeholder.com/100",
      description: "Trendy clothing and accessories",
    },
    {
      id: "3",
      name: "Home & Kitchen",
      image: "https://via.placeholder.com/100",
      description: "Essentials for your home",
    },
  ];

  const handleCategorySelect = (category) => {
    Alert.alert("Category Selected", `You selected: ${category.name}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <CategoryList
        categories={categories}
        onSelectCategory={handleCategorySelect}
        title="Shop by Category"
        subTitle="Choose a category to explore products"
      />
    </View>
  );
};

export default App;
```

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
