// Different Ways of Creating Objects in JavaScript
// 1.Object literals
const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function () {
    console.log(this.prop1);
  }
}
// 2.Object.create() with descriptors
// 3.function + new
// 4.factory function with closures
// 5.JS Class