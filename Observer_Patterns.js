"use strict";
function Subject() {
    this.observers = []; //array of observer
}
Subject.prototype = {
    //subscribe to observe the function
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    //remove me from the subscriber list
    unsubscribe: function (fnToRemove) {
        this.observers = this.observers.filter((fn) => {
            if (fn != fnToRemove) {
                return fn;
            }
        });
    },
    fire: function () {
        this.observers.forEach((fn) => {
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
