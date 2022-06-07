"use strict";
const items = [1, "user", false, 1.25165];
function Iterator(items) {
    this.items = items;
    this.index = 0;
}
Iterator.prototype = {
    // Checks whether next element is available
    hasNext: function () {
        return this.index < this.items.length;
    },
    // gets the next element
    next: function () {
        return this.items[this.index++];
    },
};
const iteratorOne = new Iterator(items);
console.log(iteratorOne.next());
console.log(iteratorOne.hasNext());
