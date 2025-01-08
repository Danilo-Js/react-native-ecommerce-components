# 🛒 **Lista de Produtos**

O componente **ProductList** exibe uma lista de produtos em formato de **grade** ou **lista**. Ele permite que os usuários visualizem detalhes dos produtos, adicionem itens ao carrinho e executem ações de seleção de produtos.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Lista de Produtos</strong></td>
    <td><img src="../../Images/ProductList.png" alt="ProductList" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade      | Tipo                         | Obrigatória | Descrição                                                                                                                                                  |
| ---------------- | ---------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `products`       | `Product[]`                  | ✅          | Array de objetos de produtos para exibição.                                                                                                                |
| `onAddToCart`    | `(product: Product) => void` | ✅          | Callback acionado ao pressionar 'Adicionar ao Carrinho'.                                                                                                   |
| `onProductPress` | `(product: Product) => void` | ✅          | Callback acionado ao selecionar um produto.                                                                                                                |
| `gridView`       | `boolean`                    | ❌          | Ativa o layout em grade se definido como `true`. Padrão: `false`.                                                                                          |
| `title`          | `string`                     | ✅          | Texto do título exibido no topo da lista.                                                                                                                  |
| `subTitle`       | `string`                     | ❌          | Texto do subtítulo exibido abaixo do título.                                                                                                               |
| `styles`         | `object`                     | ❌          | Estilos personalizados para `container`, `productContainer`, `productImage`, `productTitle`, `productPrice`, `button`, `buttonText`, `title` e `subTitle`. |

### 📦 **Estrutura do Objeto Product**

```ts
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
}
```

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```tsx
import React from "react";
import { View, Alert } from "react-native";
import { ProductList } from "react-native-ecommerce-components/lib";

const App = () => {
  const products = [
    {
      id: "1",
      title: "Product 1",
      price: 19.99,
      image:
        "https://cdn3.iconfinder.com/data/icons/glypho-free/64/laptop-256.png",
    },
    {
      id: "2",
      title: "Product 2",
      price: 29.99,
      image:
        "https://cdn0.iconfinder.com/data/icons/news-and-magazine/512/fashion-256.png",
    },
    {
      id: "3",
      title: "Product 3",
      price: 39.99,
      image:
        "https://cdn2.iconfinder.com/data/icons/kitchen-appliances-computers-and-electronics/32/Appliances-15-256.png",
    },
  ];

  const handleAddToCart = (product) => {
    Alert.alert("Add to Cart", `${product.title} added to cart.`);
  };

  const handleProductPress = (product) => {
    Alert.alert("Product Selected", `You selected ${product.title}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onProductPress={handleProductPress}
        gridView={true}
        title="Our Products"
        subTitle="Find the best deals here"
      />
    </View>
  );
};

export default App;
```

---

## 🧪 **Testando o Componente**

Certifique-se de testar o componente após adicioná-lo ao seu projeto:

```sh
npx react-native run-android
```

ou para iOS:

```sh
npx react-native run-ios
```

---

Para mais informações ou personalizações avançadas, consulte a [documentação principal](../../README.md).
