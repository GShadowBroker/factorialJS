# 📦 @gledyson/factorialjs
Simple function to calculate the factorial of non-negative integers in JavaScript.

## 🔧 Installation
Use npm to install:

```npm install @gledyson/factorialjs```
## 🚀 Usage

#### Importing the module

```
const factorial = require('@gledyson/factorialjs');
```

#### Examples
```
console.log(factorial(0));   // 1
console.log(factorial(1));   // 1
console.log(factorial(5));   // 120
console.log(factorial(10));  // 3628800
```

#### Invalid cases
```
console.log(factorial(-3));      // NaN
console.log(factorial("texto")); // NaN
```

*The function only accepts non-negative integers. Any invalid input will return NaN.

## 🧪 Running the tests
To run the tests, simply use:

```
npm test
```

📄 License
MIT © Gledyson Ferreira dos Santos
