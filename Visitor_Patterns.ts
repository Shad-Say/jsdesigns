function Employee(name: string, salary: number) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal: number) {
    this.salary = sal;
  },
  accept: function (visitorFunction: Function) {
    visitorFunction(this);
  },
};

const user1 = new Employee("user1", 10000);
console.log(user1.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

user1.accept(ExtraSalary);
console.log(user1.getSalary());
