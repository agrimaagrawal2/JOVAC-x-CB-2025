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
