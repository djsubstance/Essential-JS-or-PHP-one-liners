let div = document.createElement('div');
div.id = 'himom';
let script = document.createElement('script');
script.textContent = 'alert("Arbitrary Code Execution");';
div.appendChild(script);
document.body.appendChild(div);

