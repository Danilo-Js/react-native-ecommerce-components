# 🎟️ **CouponCodeInput**

O componente **CouponCodeInput** fornece uma maneira intuitiva para inserir e aplicar códigos de cupom no seu aplicativo.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Entrada de Código de Cupom</strong></td>
    <td><img src="../../Images/CouponCodeInput.png" alt="CouponCodeInput" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade      | Tipo                       | Obrigatória | Descrição                                                                                                                        |
| ---------------- | -------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `onApplyCoupon`  | `(coupon: string) => void` | ✅          | Função de callback chamada quando um cupom é aplicado.                                                                           |
| `onRemoveCoupon` | `() => void`               | ❌          | Função de callback chamada quando um cupom é removido.                                                                           |
| `placeholder`    | `string`                   | ❌          | Texto de placeholder para o campo de entrada.                                                                                    |
| `title`          | `string`                   | ✅          | Texto do título exibido acima do campo de cupom.                                                                                 |
| `subTitle`       | `string`                   | ❌          | Texto do subtítulo exibido abaixo do título.                                                                                     |
| `styles`         | `object`                   | ❌          | Estilos personalizados para container, message, input, buttonContainer, buttonApply, buttonRemove, buttonText, title e subTitle. |

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

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
