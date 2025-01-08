# ❤️ **Lista de Desejos**

O componente **WishList** exibe uma lista de produtos favoritos, permitindo que os usuários adicionem itens ao carrinho ou os removam da lista de desejos.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Lista de Desejos</strong></td>
    <td><img src="../../Images/WishList.png" alt="WishList" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade    | Tipo                           | Obrigatória | Descrição                                                                                                                                                    |
| -------------- | ------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `items`        | `WishlistItem[]`               | ✅          | Array de itens na lista de desejos com `id`, `name`, `price` e `image`.                                                                                      |
| `onRemoveItem` | `(id: string) => void`         | ✅          | Callback acionado quando um item é removido da lista de desejos.                                                                                             |
| `onAddToCart`  | `(item: WishlistItem) => void` | ✅          | Callback acionado quando um item é adicionado ao carrinho.                                                                                                   |
| `title`        | `string`                       | ✅          | Texto do título exibido no topo da lista de desejos.                                                                                                         |
| `subTitle`     | `string`                       | ❌          | Texto do subtítulo exibido abaixo do título.                                                                                                                 |
| `styles`       | `object`                       | ❌          | Estilos personalizados para `container`, `itemContainer`, `image`, `itemText`, `priceText`, `buttonContainer`, `button`, `buttonText`, `title` e `subTitle`. |

---

### 📦 **Estrutura do Objeto WishlistItem**

```ts
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}
```

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```ts
import React from "react";
import { View, Alert } from "react-native";
import { WishList } from "react-native-ecommerce-components/lib";

const App = () => {
  const wishlistItems = [
    {
      id: "1",
      name: "Smartphone",
      price: 699.99,
      image:
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-iphone-256.png",
    },
    {
      id: "2",
      name: "Headphones",
      price: 199.99,
      image:
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-headphone-256.png",
    },
    {
      id: "3",
      name: "Smartwatch",
      price: 299.99,
      image:
        "https://cdn2.iconfinder.com/data/icons/technology-straight-line/128/SVG_LINE_TECHNOLOGY-03-256.png",
    },
  ];

  const handleRemoveItem = (id) => {
    Alert.alert("Removed", `Item with ID: ${id} removed from wishlist`);
  };

  const handleAddToCart = (item) => {
    Alert.alert("Added to Cart", `${item.name} added to the cart`);
  };

  return (
    <View style={{ flex: 1 }}>
      <WishList
        items={wishlistItems}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
        title="My Wishlist"
        subTitle="Your favorite products"
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
