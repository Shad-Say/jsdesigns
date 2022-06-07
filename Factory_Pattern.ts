//create function developer
function developer(name: string): void {
  this.name = name;
  this.type = "Developer";
}
//create function tester
function tester(name: string): void {
  this.name = name;
  this.type = "Tester";
}

//Factory creation

function EmployeeFactory() {
  this.create = (name: string, type: number) => {
    switch (type) {
      case 1:
        return new developer(name);
        break;
      case 2:
        return new developer(name);
        break;
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Employee1", 2));
employees.push(employeeFactory.create("Employee2", 2));
employees.push(employeeFactory.create("Employee3", 1));
employees.push(employeeFactory.create("Employee4", 1));
employees.push(employeeFactory.create("Employee5", 2));

console.log(employees);
