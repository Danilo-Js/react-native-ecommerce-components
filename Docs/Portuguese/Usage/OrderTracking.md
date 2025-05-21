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
| `language`         | `en` ou `pt`                 | ❌          | Linguagem do componente em português ou inglês (default). |

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
    id: '1',
    title: 'Pedido realizado',
    description: 'Seu pedido foi feito.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Pedido processado',
    description: 'Seu pedido está sendo processado.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Enviado',
    description: 'Seu pedido foi enviado.',
    status: 'current',
  },
  {
    id: '4',
    title: 'A caminho',
    description: 'Seu pedido está a caminho.',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Entregue',
    description: 'Seu pedido foi entregue.',
    status: 'pending',
  },
];

const OrderTrackingTest = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <OrderTracking
        language="pt"
        title="Acompanhe a entrega"
        subTitle="Fique atualizado com o status da entrega"
        steps={steps as any}
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
