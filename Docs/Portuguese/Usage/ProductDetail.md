# 🛍️ **Detalhes do Produto**

O componente **ProductDetail** exibe informações detalhadas sobre um produto específico, incluindo imagem, preço, descrição e opções de compra.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Detalhes do Produto</strong></td>
    <td><img src="../../Images/ProductDetail.png" alt="ProductDetail" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade   | Tipo                         | Obrigatória | Descrição                                                                                                                                             |
| ------------- | ---------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `product`     | `Product`                    | ✅          | Objeto contendo os detalhes do produto.                                                                                                               |
| `onAddToCart` | `(product: Product) => void` | ✅          | Callback acionado ao pressionar 'Adicionar ao Carrinho'.                                                                                              |
| `onBuyNow`    | `(product: Product) => void` | ✅          | Callback acionado ao pressionar 'Comprar Agora'.                                                                                                      |
| `title`       | `string`                     | ✅          | Texto do título exibido no topo da tela do produto.                                                                                                   |
| `subTitle`    | `string`                     | ❌          | Texto do subtítulo exibido abaixo do título.                                                                                                          |
| `styles`      | `object`                     | ❌          | Estilos personalizados para `container`, `image`, `title`, `subTitle`, `description`, `price`, `rating`, `buttonContainer`, `button`, e `buttonText`. |
| `language`         | `en` ou `pt`                 | ❌          | Linguagem do componente em português ou inglês (default). |

### 📦 **Estrutura do Objeto Product**

```ts
interface Product {
  id: string;
  title: string;
  description: string;
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
import { ProductDetail } from "react-native-ecommerce-components/lib";

const App = () => {
  const product = {
    id: "1",
    title: "Celular Pro X",
    description:
      "Um smartphone potente com excelente qualidade de câmera e longa duração de bateria.",
    price: 999.99,
    image:
      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-iphone-256.png",
    rating: 4.8,
  };

  const handleAddToCart = (paramProduct) => {
    Alert.alert("Adicionar ao carrinho", `${paramProduct.title} added to cart.`);
  };

  const handleBuyNow = (paramProduct) => {
    Alert.alert("Comprar agora", `Comprando ${paramProduct.title}.`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductDetail
        language="pt"
        product={product}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        title="Detalhes do Produto"
        subTitle="Conheça as características"
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
