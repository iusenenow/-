let company = { // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) { return department.reduce((prev, current) => prev + current.salary, 0) }
  else {
    let sum = 0;
    for (let subDepartment of Object.values(department)) {
      sum += sumSalaries(subDepartment)
    }
    return sum
  }
}

// console.log(sumSalaries(company))

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

// console.log(sumTo(100))

function sumToTo(n) {
  if (n === 1) return 1
  return n + sumToTo(n - 1)
}

console.log(sumToTo(100))