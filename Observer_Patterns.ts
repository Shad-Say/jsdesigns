function Subject(): void {
  this.observers = []; //array of observer
}

Subject.prototype = {
  //subscribe to observe the function
  subscribe: function (fn: Function) {
    this.observers.push(fn);
  },
  //remove me from the subscriber list
  unsubscribe: function (fnToRemove: Function) {
    this.observers = this.observers.filter((fn: Function) => {
      if (fn != fnToRemove) {
        return fn;
      }
    });
  },
  fire: function () {
    this.observers.forEach((fn: Function) => {
      fn();
    });
  },
};

function Observer1() {
  console.log("Observer 1 firing");
}

function Observer2() {
  console.log("Observer 2 firing");
}

Subject.subscribe(Observer1);

Subject.fire();
