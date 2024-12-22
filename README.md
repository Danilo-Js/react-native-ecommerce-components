<h1 align="center">
  react-native-ecommerce-helper
</h1>


<h5 align="center">
  Components to boost the development of your ecommerce.
</h5>

---

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Danilo-Js/react-native-ecommerce-helper">

  <a href="https://img.shields.io/github/repo-size/Danilo-Js/react-native-ecommerce-helper/commits/master">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/Danilo-Js/react-native-ecommerce-helper">
  </a>
  
  <img alt="Repository forks" src="https://img.shields.io/github/forks/Danilo-Js/react-native-ecommerce-helper">
  
  <img alt="Repository stars" src="https://img.shields.io/github/stars/Danilo-Js/react-native-ecommerce-helper">
</p>

<p align="center">
  <a href="https://img.shields.io/github/issues/Danilo-Js/react-native-ecommerce-helper/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Danilo-Js/react-native-ecommerce-helper">
  </a>

  <img alt="Last commit" src="https://img.shields.io/github/last-commit/Danilo-Js/react-native-ecommerce-helper">

  <a href="https://www.npmjs.com/package/react-native-react-native-search-bar">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/react-native-ecommerce-helper.svg">
  </a>
</p>

<p align="center">
  <a href="#information_source-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="Docs/HowToContribuite.md">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

---

## 📸 **Components**

Click on the image to view the component documentation

<a href="Docs/Usage/CategoryList.md">
  <img src="Docs/Images/CategoryList.png" alt="CategoryList" width="200"/>
</a>
<a href="Docs/Usage/CouponCodeInput.md">
  <img src="Docs/Images/CouponCodeInput.png" alt="CouponCodeInput" width="200"/>
</a>
<a href="Docs/Usage/NewClient.md">
  <img src="Docs/Images/NewClient.png" alt="NewClient" width="200"/>
</a>
<a href="Docs/Usage/OrderConfirmation.md">
  <img src="Docs/Images/OrderConfirmation.png" alt="OrderConfirmation" width="200"/>
</a>
<a href="Docs/Usage/OrderSummary.md">
  <img src="Docs/Images/OrderSummary.png" alt="OrderSummary" width="200"/>
</a>
<a href="Docs/Usage/OrderTracking.md">
  <img src="Docs/Images/OrderTracking.png" alt="OrderTracking" width="200"/>
</a>
<a href="Docs/Usage/PaymentGateway.md">
  <img src="Docs/Images/PaymentGateway.png" alt="PaymentGateway" width="200"/>
</a>
<a href="Docs/Usage/ProductDetail.md">
  <img src="Docs/Images/ProductDetail.png" alt="ProductDetail" width="200"/>
</a>
<a href="Docs/Usage/ProductList.md">
  <img src="Docs/Images/ProductList.png" alt="ProductList" width="200"/>
</a>
<a href="Docs/Usage/ReviewAndRatings.md">
  <img src="Docs/Images/ReviewAndRatings.png" alt="ReviewAndRatings" width="200"/>
</a>
<a href="Docs/Usage/SearchBar.md">
  <img src="Docs/Images/SearchBar.png" alt="SearchBar" width="200"/>
</a>
<a href="Docs/Usage/ShippingDetails.md">
  <img src="Docs/Images/ShippingDetails.png" alt="ShippingDetails" width="200"/>
</a>
<a href="Docs/Usage/ShoppingCart.md">
  <img src="Docs/Images/ShoppingCart.png" alt="ShoppingCart" width="200"/>
</a>
<a href="Docs/Usage/WishList.md">
  <img src="Docs/Images/WishList.png" alt="WishList" width="200"/>
</a>

---

## :information_source: **About the Project**

This project was created as part of a final paper for the Computer Science course at **UFES (Federal University of Espírito Santo)**.  

Please leave a ***⭐ STAR*** on the [repository](https://github.com/Danilo-Js/react-native-ecommerce-helper) and contribute to the library to help improve it further.  

---

## :clipboard: Usage

### **Installation**

To install the library, run one of the following commands:

```sh
yarn add react-native-ecommerce-helper
```

or

```sh
npm install react-native-ecommerce-helper
```

### **Using a Component**

1. **Import the desired component** in your project:

```js
import { NewClient } from 'react-native-ecommerce-helper/lib';
```

2. **Render the component:**

```js
<NewClient
  onSubmit={(data) => console.log(data)}
  fields={['Name', 'Email']}
  title="Customer Registration"
  subTitle="Fill out the form below"
/>
```

### **Editing Components in Node Modules**

If necessary, you can navigate to the following path:

```plaintext
node_modules/react-native-ecommerce-helper/lib/components
```

Locate the desired component file and make your edits.

---

## :memo: **License**

This project is under the **MIT License**. See the [LICENSE](https://github.com/Danilo-Js/react-native-ecommerce-helper/blob/master/LICENSE) file for details.

---

**Made with ❤️ by Danilo José Lima de Oliveira**  
[Get in touch!](https://www.linkedin.com/in/danilo-js/)
