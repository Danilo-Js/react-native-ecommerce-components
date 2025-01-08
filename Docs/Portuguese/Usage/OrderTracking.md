# 🚚 **OrderTracking**

O componente **OrderTracking** exibe o status de um pedido por meio de uma série de etapas, cada uma representando uma fase no processo de entrega.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Rastreamento de Pedido</strong></td>
    <td><img src="../../Images/OrderTracking.png" alt="OrderTracking" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade | Tipo                  | Obrigatória | Descrição                                                                                                                                                      |
| ----------- | --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`     | `OrderTrackingStep[]` | ✅          | Array de etapas, cada uma representando um status do pedido.                                                                                                   |
| `title`     | `string`              | ✅          | Texto do título exibido no topo do componente de rastreamento.                                                                                                 |
| `subTitle`  | `string`              | ❌          | Texto do subtítulo exibido abaixo do título.                                                                                                                   |
| `styles`    | `object`              | ❌          | Estilos personalizados para `container`, `title`, `subTitle`, `stepContainer`, `stepTitle`, `stepDescription`, `stepCompleted`, `stepCurrent` e `stepPending`. |

### 📦 **Estrutura do Objeto OrderTrackingStep**

```ts
interface OrderTrackingStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "pending";
}
```

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```tsx
import React from "react";
import { View } from "react-native";
import { OrderTracking } from "react-native-ecommerce-components/lib";

const steps = [
  {
    id: "1",
    title: "Order Placed",
    description: "Your order has been placed.",
    status: "completed",
  },
  {
    id: "2",
    title: "Order Processed",
    description: "Your order is being processed.",
    status: "completed",
  },
  {
    id: "3",
    title: "Shipped",
    description: "Your order has been shipped.",
    status: "current",
  },
  {
    id: "4",
    title: "Out for Delivery",
    description: "Your order is on the way.",
    status: "pending",
  },
  {
    id: "5",
    title: "Delivered",
    description: "Your order has been delivered.",
    status: "pending",
  },
];

const OrderTrackingTest = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <OrderTracking
        title="Track Your Order"
        subTitle="Stay updated with your order status"
        steps={steps}
      />
    </View>
  );
};

export default OrderTrackingTest;
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
