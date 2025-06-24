// HW 1: Business logic using map, filter, and reduce (Employee Example)

// Step 1: Array of 20 employee objects
const employees = [
  { name: "Aarav Mehta", salary: 50000, department: "Engineering" },
  { name: "Priya Sharma", salary: 42000, department: "Design" },
  { name: "Ravi Verma", salary: 60000, department: "Engineering" },
  { name: "Sneha Patel", salary: 38000, department: "HR" },
  { name: "Karan Singh", salary: 45000, department: "Sales" },
  { name: "Divya Kapoor", salary: 47000, department: "Design" },
  { name: "Amit Joshi", salary: 52000, department: "Engineering" },
  { name: "Neha Rao", salary: 41000, department: "Marketing" },
  { name: "Rohan Desai", salary: 58000, department: "Engineering" },
  { name: "Tanya Nair", salary: 43000, department: "HR" },
  { name: "Manish Dubey", salary: 40000, department: "Sales" },
  { name: "Isha Agarwal", salary: 46000, department: "Design" },
  { name: "Vikram Chauhan", salary: 61000, department: "Engineering" },
  { name: "Pooja Jain", salary: 39000, department: "Marketing" },
  { name: "Siddharth Saxena", salary: 55000, department: "Engineering" },
  { name: "Ritika Bansal", salary: 48000, department: "Design" },
  { name: "Harshita Bhatt", salary: 37000, department: "HR" },
  { name: "Ankit Sinha", salary: 44000, department: "Sales" },
  { name: "Megha Tripathi", salary: 42000, department: "Marketing" },
  { name: "Yash Gupta", salary: 53000, department: "Engineering" }
];

// Step 2: FILTER – Get all employees in the Engineering department
const engineeringEmployees = employees.filter(emp => emp.department === "Engineering");
console.log("Engineering Department Employees:");
console.log(engineeringEmployees);

// Step 3: MAP – Get names of all employees
const employeeNames = employees.map(emp => emp.name);
console.log("All Employee Names:");
console.log(employeeNames);

// Step 4: REDUCE – Calculate total salary of all employees
const totalSalaries = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary of All Employees:");
console.log("₹" + totalSalaries);

// e-commerce platform using callbacks and promises separately

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart');

let cart = [];

// --------- 1. USING CALLBACKS ----------
function fetchProductsCallback(callback) {
  setTimeout(() => {
    const products = [
      { id: 1, name: "Shirt", price: 20 },
      { id: 2, name: "Shoes", price: 50 },
      { id: 3, name: "Hat", price: 15 }
    ];
    callback(products);
  }, 1000); // Simulate async API call
}

function renderProductsWithCallback() {
  fetchProductsCallback((products) => {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCartCallback(${product.id}, '${product.name}')">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  });
}

function addToCartCallback(id, name) {
  // Simulate async operation
  setTimeout(() => {
    cart.push(name);
    updateCart();
  }, 500);
}

// --------- 2. USING PROMISES ----------
function fetchProductsPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { id: 4, name: "Bag", price: 30 },
        { id: 5, name: "Watch", price: 100 }
      ];
      resolve(products);
    }, 1000);
  });
}

function renderProductsWithPromise() {
  fetchProductsPromise().then(products => {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCartPromise(${product.id}, '${product.name}')">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  });
}

function addToCartPromise(id, name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cart.push(name);
      resolve();
    }, 500);
  }).then(updateCart);
}

// --------- CART RENDERING ----------
function updateCart() {
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

// --------- INIT ---------
renderProductsWithCallback();
renderProductsWithPromise();

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Simple E-commerce</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>My Shop</h1>
  <div id="product-list"></div>
  <h2>Cart</h2>
  <ul id="cart"></ul>

  <script src="script.js"></script>
</body>
</html>

body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f2f2f2;
}

h1, h2 {
  color: #333;
}

#product-list {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.product {
  background: white;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 150px;
  text-align: center;
}

button {
  padding: 5px 10px;
  margin-top: 10px;
}

ecommerce/
├── index.html
├── style.css
└── script.js

