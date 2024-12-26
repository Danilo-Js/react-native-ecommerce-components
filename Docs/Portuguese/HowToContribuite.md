## 📝 **Como Contribuir**

Contribuições são bem-vindas e muito apreciadas! Siga os passos abaixo para começar.

---

### 🚀 **Passo 1: Clone o Repositório**

Primeiro, clone o repositório para sua máquina local:

```sh
git clone https://github.com/Danilo-Js/react-native-ecommerce-helper.git
cd react-native-ecommerce-helper
```

---

### 🛠️ **Passo 2: Crie um Projeto de Teste**

Para testar suas alterações localmente, crie um novo projeto React Native:

```sh
npx react-native init Teste
cd Teste
```

Depois, instale a biblioteca localmente:

```sh
yarn add react-native-ecommerce-helper
```

---

### 🧑‍💻 **Passo 3: Faça Alterações na Biblioteca**

Faça as alterações desejadas diretamente na pasta `src` da biblioteca.

Exemplo de caminho:
```
/react-native-ecommerce-helper/src/
```

---

### 🔄 **Passo 4: Compile a Biblioteca**

Para garantir que suas alterações sejam compiladas para JavaScript, use o `npx tsc` diretamente:

```sh
npx tsc
```

Isso irá gerar os arquivos JavaScript na pasta `/lib` da biblioteca.

Copie manualmente os arquivos JavaScript compilados para seu projeto de teste:

```sh
cp -r lib/ ../Teste/node_modules/react-native-ecommerce-helper/lib/
```

---

### 🧪 **Passo 5: Teste Suas Alterações**

Execute seu projeto de teste:

```sh
cd ../Teste
npx react-native run-android
```

ou para iOS:

```sh
npx react-native run-ios
```

Certifique-se de que tudo funciona conforme o esperado.

---

### 📤 **Passo 6: Envie Suas Alterações**

1. Faça o commit das suas alterações:

```sh
git add .
git commit -m "Uma mensagem descritiva para suas alterações"
```

2. Envie suas alterações para seu fork:

```sh
git push origin sua-branch-de-recurso
```

3. Abra um **Pull Request** no GitHub.

---

### 🤝 **Passo 7: Aguarde a Revisão**

Depois que seu Pull Request for enviado, ele será revisado e pode receber feedback.

Obrigado por contribuir com **react-native-ecommerce-helper**! 🚀✨
