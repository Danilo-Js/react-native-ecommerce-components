# 🔍 **Barra de Pesquisa**

O componente **SearchBar** oferece uma interface intuitiva de pesquisa, permitindo que os usuários filtrem conteúdo dinamicamente usando uma **consulta de pesquisa**.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Barra de Pesquisa</strong></td>
    <td><img src="../../Images/SearchBarpt.png" alt="SearchBar" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade       | Tipo                      | Obrigatória | Descrição                                                                  |
| ----------------- | ------------------------- | ----------- | -------------------------------------------------------------------------- |
| `onSearch`        | `(query: string) => void` | ✅          | Função de callback acionada quando uma pesquisa é realizada.               |
| `placeholder`     | `string`                  | ❌          | Texto exibido no campo de entrada. Padrão: `"Pesquisar..."`.               |
| `clearButtonText` | `string`                  | ❌          | Texto exibido no botão de limpar. Padrão: `"Limpar"`.                      |
| `styles`          | `object`                  | ❌          | Estilos personalizados para `container`, `input`, `button` e `buttonText`. |
| `language`         | `en` ou `pt`                 | ❌          | Linguagem do componente em português ou inglês (default). |
---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```tsx
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-ecommerce-components/lib";

const App = () => {
  const [data, setData] = useState([
    { id: "1", name: "Smartphone" },
    { id: "2", name: "Laptop" },
    { id: "3", name: "Fones de ouvido" },
    { id: "4", name: "Relógio inteligente" },
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} language="pt" />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});

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
