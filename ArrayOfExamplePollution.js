const pollutionExamples = [
  `Object.prototype.polluted = 'yes'; console.log({}.polluted);`, // Example 1
  `Array.prototype.polluted = 'yes'; console.log([].polluted);`, // Example 2
  `Function.prototype.execute = () => console.log('Executed'); (() => {}).execute();`, // Example 3
  `String.prototype.customLength = function() { return this.length * 2; }; console.log("Test".customLength());`, // Example 4
  `Object.defineProperty(Object.prototype, 'hiddenPolluted', {value: 'yes', enumerable: false}); console.log({}.hiddenPolluted);`, // Example 5
  `HTMLElement.prototype.clickMe = function() { this.click(); }; document.querySelector('button').clickMe();`, // Example 6
  `Object.prototype.constructor = () => console.log('Constructor Polluted'); console.log(({}).constructor());`, // Example 7
  `Date.prototype.getCustomDate = function() { return 'Polluted Date'; }; console.log((new Date()).getCustomDate());`, // Example 8
  `Number.prototype.toDouble = function() { return this * 2; }; console.log((2).toDouble());`, // Example 9
  `Object.prototype.immediatelyExecuted = (() => { console.log('Immediately Executed'); })();` // Example 10
];
