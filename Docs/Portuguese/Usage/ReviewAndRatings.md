# ⭐ **Avaliações e Comentários**

O componente **ReviewAndRatings** permite que os usuários visualizem, adicionem e gerenciem avaliações e comentários de um produto. Ele suporta a exibição de uma **avaliação média**, uma **lista de avaliações dos usuários** e um **formulário interativo** para o envio de novas avaliações.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Avaliações e Comentários</strong></td>
    <td><img src="../../Images/ReviewAndRatingspt.png" alt="ReviewAndRatings" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade     | Tipo                                      | Obrigatória | Descrição                                                                                                                                                  |
| --------------- | ---------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reviews`       | `Review[]`                               | ✅          | Array de avaliações para exibição.                                                                                                                         |
| `averageRating` | `number`                                 | ✅          | Valor médio das avaliações exibido no topo.                                                                                                                |
| `totalReviews`  | `number`                                 | ✅          | Número total de avaliações exibido no topo.                                                                                                                |
| `onAddReview`   | `(review: Omit<Review, 'id' \| 'date'>) => void` | ✅          | Callback acionado quando uma nova avaliação é adicionada.                                                                                                   |
| `title`         | `string`                                 | ✅          | Texto do título exibido no topo da seção de avaliações.                                                                                                    |
| `subTitle`      | `string`                                 | ❌          | Texto do subtítulo exibido abaixo do título.                                                                                                               |
| `styles`        | `object`                                 | ❌          | Estilos personalizados para `container`, `title`, `subTitle`, `reviewContainer`, `reviewUser`, `reviewComment`, `reviewDate`, `reviewRating`, `inputContainer`, `input`, `button`, `buttonText`, `ratingContainer` e `averageRating`. |
| `language`         | `en` ou `pt`                 | ❌          | Linguagem do componente em português ou inglês (default). |

### 📦 **Estrutura do Objeto Review**

```ts
interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
```

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```tsx
import React from 'react';
import {View} from 'react-native';
import {ReviewAndRatings} from 'react-native-ecommerce-components/lib';

const initialReviews = [
  {
    id: '1',
    user: 'Alice',
    rating: 4.5,
    comment: 'Ótimo produto!',
    date: '2024-06-20',
  },
  {
    id: '2',
    user: 'Bob',
    rating: 5,
    comment: 'Superou minhas expectativas!',
    date: '2024-06-19',
  },
  {
    id: '3',
    user: 'Charlie',
    rating: 4.0,
    comment: 'Bom valor pelo preço.',
    date: '2024-06-18',
  },
  {
    id: '4',
    user: 'Diana',
    rating: 3.5,
    comment: 'Decente, mas poderia ser melhor.',
    date: '2024-06-17',
  },
  {
    id: '5',
    user: 'Ethan',
    rating: 5,
    comment: 'Adorei!',
    date: '2024-06-16',
  },
  {
    id: '6',
    user: 'Fiona',
    rating: 2.5,
    comment: 'Não vale o preço.',
    date: '2024-06-15',
  },
  {
    id: '7',
    user: 'George',
    rating: 4.8,
    comment: 'Recomendo muito este produto.',
    date: '2024-06-14',
  },
  {
    id: '8',
    user: 'Hannah',
    rating: 3.0,
    comment: 'É ok, nada especial.',
    date: '2024-06-13',
  },
  {
    id: '9',
    user: 'Ian',
    rating: 4.2,
    comment: 'Desempenho sólido, pequenas falhas.',
    date: '2024-06-12',
  },
  {
    id: '10',
    user: 'Jasmine',
    rating: 5,
    comment: 'Perfeito em todos os aspectos!',
    date: '2024-06-11',
  },
];

const ReviewAndRatingsTest = () => {
  const handleAddReview = review => {
    console.log('Nova avaliação adicionada:', review);
  };

  return (
    <View style={{flex: 1}}>
      <ReviewAndRatings
        language="pt"
        reviews={initialReviews}
        averageRating={
          initialReviews.reduce((sum, review) => sum + review.rating, 0) /
          initialReviews.length
        }
        totalReviews={initialReviews.length}
        onAddReview={handleAddReview}
        title="Avaliações do Produto"
        subTitle="Veja a opinião dos compradores"
      />
    </View>
  );
};

export default ReviewAndRatingsTest;
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
