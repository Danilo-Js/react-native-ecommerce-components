# 📦 **OrderConfirmation**

O componente **OrderConfirmation** fornece um resumo claro de um pedido com detalhes essenciais, como ID do pedido, método de pagamento e endereço de entrega. Ele também oferece botões acionáveis para continuar comprando ou visualizar detalhes do pedido.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Confirmação de Pedido</strong></td>
    <td><img src="../../Images/OrderConfirmation.png" alt="OrderConfirmation" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade         | Tipo                          | Obrigatória | Descrição                                                     |
|----------------------|-------------------------------|-------------|----------------------------------------------------------------|
| `orderId`           | `string`                      | ✅          | Identificador único do pedido.                                 |
| `orderDate`         | `string`                      | ✅          | Data em que o pedido foi realizado.                            |
| `totalAmount`       | `number`                      | ✅          | Valor total pago pelo pedido.                                  |
| `paymentMethod`     | `string`                      | ✅          | Método de pagamento utilizado na transação.                    |
| `shippingAddress`   | `string`                      | ✅          | Endereço de entrega do pedido.                                 |
| `onContinueShopping`| `() => void`                  | ✅          | Função de callback acionada ao pressionar "Continuar Comprando".|
| `onViewOrderDetails`| `() => void`                  | ✅          | Função de callback acionada ao pressionar "Ver Detalhes do Pedido". |
| `title`            | `string`                      | ✅          | Texto do título exibido no topo da tela de confirmação.         |
| `subTitle`         | `string`                      | ❌          | Texto do subtítulo exibido abaixo do título.                   |
| `styles`           | `object`                      | ❌          | Estilos personalizados para container, orderInfo, buttonContainer, orderInfoText, button, buttonText, title e subTitle. |

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```tsx
import React from 'react';
import {View, Alert} from 'react-native';
import {OrderConfirmation} from 'react-native-ecommerce-helper/lib';

const OrderConfirmationTest = () => {
  const handleContinueShopping = () => {
    Alert.alert('Continue Shopping', 'Navigating to home page...');
  };

  const handleViewOrderDetails = () => {
    Alert.alert('Order Details', 'Showing order details...');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <OrderConfirmation
        title="Order Confirmed"
        subTitle="Thank you for your purchase!"
        orderId="ORD12345"
        orderDate="2024-06-21"
        totalAmount={149.99}
        paymentMethod="Credit Card"
        shippingAddress="123 Main Street, Cityville, CA"
        onContinueShopping={handleContinueShopping}
        onViewOrderDetails={handleViewOrderDetails}
      />
    </View>
  );
};

export default OrderConfirmationTest;
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
