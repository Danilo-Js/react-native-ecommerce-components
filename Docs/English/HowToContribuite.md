## 📝 **How to Contribute**

Contributions are welcome and greatly appreciated! Follow the steps below to get started.

---

### 🚀 **Step 1: Clone the Repository**

First, clone the repository to your local machine:

```sh
git clone https://github.com/Danilo-Js/react-native-ecommerce-components.git
cd react-native-ecommerce-components
```

---

### 🛠️ **Step 2: Create a Test Project**

To test your changes locally, create a new React Native project:

```sh
npx react-native init Test
cd Test
```

Then, install the library locally:

```sh
yarn add react-native-ecommerce-components
```

---

### 🧑‍💻 **Step 3: Make Changes in the Library**

Make the desired changes directly in the `src` folder of the library.

Example path:

```
/react-native-ecommerce-components/src/
```

---

### 🔄 **Step 4: Compile the Library**

To ensure your changes are compiled into JavaScript use `npx tsc` directly:

```sh
npx tsc
```

This will generate JavaScript files in the `/lib` folder of the library.

Manually copy the compiled JavaScript files into your Test project:

```sh
cp -r lib/ ../Test/node_modules/react-native-ecommerce-components/lib/
```

---

### 🧪 **Step 5: Test Your Changes**

Run your test project:

```sh
cd ../Test
npx react-native run-android
```

or for iOS:

```sh
npx react-native run-ios
```

Make sure everything works as expected.

---

### 📤 **Step 6: Push Your Changes**

1. Commit your changes:

```sh
git add .
git commit -m "Your descriptive commit message"
```

2. Push your changes to your fork:

```sh
git push origin your-feature-branch
```

3. Open a **Pull Request** on GitHub.

---

### 🤝 **Step 7: Wait for Review**

Once your Pull Request is submitted, it will be reviewed, and feedback may be provided.

Thank you for contributing to **react-native-ecommerce-components**! 🚀✨
