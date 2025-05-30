# 🎟️ **CouponCodeInput**

The **CouponCodeInput** component provides a user-friendly way to input and apply coupon codes in your application.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>CouponCodeInput</strong></td>
    <td><img src="../../Images/CouponCodeInput.png" alt="CouponCodeInput" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop             | Type                       | Required | Description                                                                                                               |
| ---------------- | -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `onApplyCoupon`  | `(coupon: string) => void` | ✅       | Callback function when a coupon is applied.                                                                               |
| `onRemoveCoupon` | `() => void`               | ❌       | Callback function when a coupon is removed.                                                                               |
| `placeholder`    | `string`                   | ❌       | Placeholder text for the input field.                                                                                     |
| `title`          | `string`                   | ✅       | Title text displayed above the coupon input.                                                                              |
| `subTitle`       | `string`                   | ❌       | Subtitle text displayed below the title.                                                                                  |
| `styles`         | `object`                   | ❌       | Custom styles for container, message, input, buttonContainer, buttonApply, buttonRemove, buttonText, title, and subTitle. |
| `language`         | `en` ou `pt`                 | ❌          | Component language in Portuguese or English (default). |

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from "react";
import { View, Alert } from "react-native";
import { CouponCodeInput } from "react-native-ecommerce-components/lib";

const CouponCodeInputTest = () => {
  const handleApplyCoupon = (coupon) => {
    Alert.alert("Coupon Applied", `Coupon Code: ${coupon}`);
  };

  const handleRemoveCoupon = () => {
    Alert.alert("Coupon Removed", "The coupon has been removed.");
  };

  return (
    <View>
      <CouponCodeInput
        title="Apply Your Coupon"
        subTitle="Enter a valid coupon code to get discounts"
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />
    </View>
  );
};

export default CouponCodeInputTest;
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
