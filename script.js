const nameStudent = "Слюсар Анна";

// Функція для виведення результатів у DOM
function printOutput(title, description, output, codeSyntax) {
  const container = document.getElementById('output-container');
  
  const block = document.createElement('div');
  block.className = 'output-block';

  const heading = document.createElement('h2');
  heading.textContent = title;

  const descriptionText = document.createElement('p');
  descriptionText.textContent = description;

  const result = document.createElement('pre');
  result.textContent = output;

  block.appendChild(heading);
  block.appendChild(descriptionText);
  block.appendChild(result);
  block.appendChild(document.createElement('hr'));
  
  container.appendChild(block);

  // Додаємо можливість показу спливаючого вікна
  block.addEventListener('mouseenter', function(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = codeSyntax; // Вставляємо синтаксис коду
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
  });

  block.addEventListener('mouseleave', function() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none'; // Ховаємо спливаюче вікно
  });
}

// Виконання коду та виведення результатів
function runCode() {
  // Реєстрація гостей
  function registerGuest(name, callback) {
    const output = `Registering ${name}!`;
    callback(name, output);
  }

  registerGuest("Mango", function greet(name, output) {
    printOutput(
      "Функція: registerGuest",
      "Функція реєстрації гостя з передачею колбек-функції.",
      `${output}\nWelcome ${name}! (Метод: registerGuest, Студент: ${nameStudent})`,
      `registerGuest(name, callback)`
    );
  });

  registerGuest("Poly", function notify(name, output) {
    printOutput(
      "Функція: registerGuest",
      "Функція повідомлення гостя з використанням колбеку.",
      `${output}\nDear ${name}, your room will be ready in 30 minutes (Метод: registerGuest, Студент: ${nameStudent})`,
      `registerGuest(name, callback)`
    );
  });

  // Функція для об'єднання результатів циклів
  function handleIteration(methodName, description, items, callback, codeSyntax) {
    let combinedOutput = '';
    items.forEach((item, index) => {
      combinedOutput += callback(item, index);
    });
    printOutput(methodName, description, combinedOutput, codeSyntax);
  }

  // Цикли for та forEach
  const numbers = [5, 10, 15, 20, 25];
  
  handleIteration(
    'Цикл: for',
    'Класичний цикл for, що виводить індекси та значення масиву.',
    numbers,
    (number, index) => {
      return `Index ${index}, value ${number} (Цикл: for, Студент: ${nameStudent})\n`;
    },
    `for (let index = 0; index < array.length; index++) { /* ... */ }`
  );

  handleIteration(
    'Метод: forEach',
    'Перебір масиву за допомогою методу forEach.',
    numbers,
    (number, index) => {
      return `Index ${index}, value ${number} (Метод: forEach, Студент: ${nameStudent})\n`;
    },
    `array.forEach((element, index) => { /* ... */ })`
  );

  // Стрілочна функція
  const arrowAdd = (a, b, c) => {
    const result = `${a}, ${b}, ${c} (Метод: arrowAdd, Студент: ${nameStudent})`;
    printOutput(
      "Метод: arrowAdd",
      "Стрілочна функція для складання трьох чисел.",
      result,
      `const arrowAdd = (a, b, c) => { /* ... */ };`
    );
    return a + b + c;
  };
  
  arrowAdd(1, 2, 3);

  // Множення без мутації
  const pureMultiply = (array, value) => {
    const newArray = array.map((element) => element * value);
    return newArray;
  };

  const numbers3 = [1, 2, 3, 4, 5];
  const doubledNumbers = pureMultiply(numbers3, 2);
  printOutput(
    "Метод: pureMultiply",
    "Функція чистого множення масиву без його мутації.",
    `Original: ${numbers3}\nMultiplied: ${doubledNumbers} (Метод: pureMultiply, Студент: ${nameStudent})`,
    `const newArray = array.map(element => element * value);`
  );

  // Метод map
  const planets = ["Earth", "Mars", "Venus", "Jupiter"];
  const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
  printOutput(
    "Метод: map",
    "Метод map для перетворення масиву планет у верхній регістр.",
    `${planetsInUpperCase} (Метод: map, Студент: ${nameStudent})`,
    `const newArray = array.map(element => element.toUpperCase());`
  );

  // Метод filter
  const values = [51, -3, 27, 21, -68, 42, -37];
  const positiveValues = values.filter((value) => value >= 0);
  printOutput(
    "Метод: filter",
    "Метод filter для фільтрації масиву позитивних значень.",
    `${positiveValues} (Метод: filter, Студент: ${nameStudent})`,
    `const newArray = array.filter(value => value >= 0);`
  );

  // Метод find
  const colorPickerOptions = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
  ];
  
  const blueOption = colorPickerOptions.find((option) => option.label === "blue");
  printOutput(
    "Метод: find",
    "Метод find для пошуку елемента масиву за умовою.",
    `Option found: ${JSON.stringify(blueOption)} (Метод: find, Студент: ${nameStudent})`,
    `const found = array.find(option => option.label === "blue");`
  );

  // Метод every
  const products = [
    { name: "apple", quantity: 2 },
    { name: "orange", quantity: 5 },
    { name: "plum", quantity: 0 },
  ];
  
  const hasEveryProduct = products.every(product => product.quantity > 0);
  printOutput(
    "Метод: every",
    "Перевірка, чи всі продукти мають кількість більше 0.",
    `All products have quantity > 0: ${hasEveryProduct} (Метод: every, Студент: ${nameStudent})`,
    `const allAvailable = products.every(product => product.quantity > 0);`
  );

  // Метод some
  const hasSomeProduct = products.some(product => product.quantity > 0);
  printOutput(
    "Метод: some",
    "Перевірка, чи є принаймні один продукт з кількістю більше 0.",
    `At least one product has quantity > 0: ${hasSomeProduct} (Метод: some, Студент: ${nameStudent})`,
    `const hasAvailable = products.some(product => product.quantity > 0);`
  );
}

document.getElementById('runScript').addEventListener('click', runCode);