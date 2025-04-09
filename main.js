
const shoppingList = [
  {
    product: 'Яблоки',
    quantity: 5,
    purchased: false
  },
  {
    product: 'Молоко',
    quantity: 2,
    purchased: true
  },
  {
    product: 'Хлеб',
    quantity: 1,
    purchased: false
  },
  {
    product: 'Яйца',
    quantity: 12,
    purchased: true
  },

  {
    product: 'Кофе',
    quantity: 1,
    purchased: false
  }
];



function addProduct(productName, quantity) {
  const existingProduct = shoppingList.find(item => item.product === productName);

  if (existingProduct) {
    existingProduct.quantity += quantity; // Увеличиваем количество
  } else {
    shoppingList.push({ product: productName, quantity, purchased: false }); // Добавляем новый продукт
  }
};

function purchaseProduct(productName) {
  const product = shoppingList.find(item => item.product === productName);

  if (product) {
    product.purchased = true; // Отмечаем продукт как купленный
  } else {
    console.log(`Продукт "${productName}" не найден в списке.`);
  }
}

addProduct('Яблоки', 3); // Увеличивает количество яблок до 8
addProduct('Чай', 2); // Добавляет новый продукт - Чай


purchaseProduct('Хлеб'); // Отмечает Хлеб как купленный


shoppingList.sort((a, b) => {
  return a.purchased - b.purchased; // Если purchased === false (0), то a меньше b, и наоборот
});


// Пример вывода списка покупок
console.log('Список покупок:');
shoppingList.forEach(item => {
  console.log(`Продукт: ${item.product}, Количество: ${item.quantity}, Куплен: ${item.purchased}`);
});

//Вывод списка на экран

let listDiv = document.createElement('div');
listDiv.id = 'root';
document.body.append(listDiv);


function productsList(arr) {
  let ul = document.createElement('ul');
  arr.forEach(elems => {
    let li = document.createElement('li');
    li.textContent = `Продукт: ${elems.product}; Количество: ${elems.quantity};  Куплен: ${elems.purchased}`;
    ul.append(li);
  });
  return ul; // возвращаем список
}

let productsUl = productsList(shoppingList); // получаем список 
document.getElementById('root').append(productsUl);


//Задание 2

// Массив, описывающий чек в магазине
const receipt = [
  { name: 'Яблоки', quantity: 3, price: 50 },
  { name: 'Молоко', quantity: 2, price: 60 },
  { name: 'Хлеб', quantity: 1, price: 30 },
  { name: 'Яйца', quantity: 12, price: 5 },
  { name: 'Сыр', quantity: 1, price: 120 }
];

// Функция для распечатки чека на экран
function printReceipt(receipt) {
  console.log('Чек:');
  receipt.forEach(item => {
    console.log(`${item.name} - ${item.quantity} шт. по ${item.price} руб. = ${item.quantity * item.price} руб.`);
  });
  console.log(`Итого: ${calculateTotal(receipt)} руб.`);
}

// Функция для подсчета общей суммы покупки
function calculateTotal(receipt) {
  return receipt.reduce((total, item) => {
    return total + (item.quantity * item.price);
  }, 0);
}
//Метод reduce используется для вычисления на основе массива какого-либо единого значения, иначе говорят «для свёртки массива».




// Функция для получения самой дорогой покупки в чеке
function getMostExpensivePurchase(receipt) {
  return receipt.reduce((mostExpensive, item) => {
    const itemTotal = item.quantity * item.price;
    return itemTotal > mostExpensive.total ? { name: item.name, total: itemTotal } : mostExpensive;
  }, { name: '', total: 0 });
}

// Функция для подсчета средней стоимости одного товара в чеке
function calculateAveragePrice(receipt) {
  const totalItems = receipt.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = calculateTotal(receipt);
  return totalItems > 0 ? (totalPrice / totalItems).toFixed(2) : 0;
}

// Использование функций
printReceipt(receipt);
console.log(`Самая дорогая покупка: ${getMostExpensivePurchase(receipt).name} на сумму ${getMostExpensivePurchase(receipt).total} руб.`);
console.log(`Средняя стоимость одного товара: ${calculateAveragePrice(receipt)} руб.`);



//Задание 3  стилизовать через write

function writeStyledText(stylesArray, text) {
  // Создаем строку стилей из массива
  const stylesString = stylesArray.map(style => `${style.name}: ${style.value}`).join('; ');

  // Формируем HTML-код с использованием document.write()
  document.write(`<p style="${stylesString}">${text}</p>`);
}

// Пример использования функции
const styles = [
  { name: 'color', value: 'blue' },
  { name: 'font-size', value: '20px' },
  { name: 'font-weight', value: 'bold' },
  { name: 'text-align', value: 'center' }
];

const text = 'Это стилизованный текст!';
writeStyledText(styles, text);